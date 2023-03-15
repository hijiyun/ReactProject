import './App.css';
import "./pages/Homepage"
import "./pages/Aboutpage"
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Productpage from './pages/Productpage';
import ProductDetailpage from './pages/ProductDetailpage';
import Loginpage from './pages/Loginpage';
import { useState } from 'react';
import Userpage from './pages/Userpage';

function App() {
  const [authenticate, setauthenticate] = useState(false)
  const PrivateRoute = () => {
    return authenticate == true?<Userpage />:<Navigate to="/login" />
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/products" element={<Productpage />}></Route>
        <Route path="/products/:id" element={<ProductDetailpage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/user" element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
