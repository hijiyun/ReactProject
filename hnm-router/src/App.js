import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState } from 'react';


function App() {
  const [authenticate, setAuthenticate] = useState(false); //false면 로그인 안된거고 , true면 로그인 성공한거임 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
