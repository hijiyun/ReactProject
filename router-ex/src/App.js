import './App.css';
import "./pages/Homepage"
import "./pages/Aboutpage"
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import { Routes, Route } from 'react-router-dom';
import Productpage from './pages/Productpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/products" element={<Productpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
