import './App.css';
import { Route, Routes } from "react-router-dom";
import ProductAllPage from './pages/ProductAllPage';
import ProductsDeailPage from './pages/ProductsDeailPage';
import Login from './pages/Login';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAllPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/products/:id' element={<ProductsDeailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
