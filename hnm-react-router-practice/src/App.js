import './App.css';
import { Route, Routes } from "react-router-dom";
import ProductAllPage from './pages/ProductAllPage';
import Loginpage from './pages/Loginpage';
import ProductsDeailPage from './pages/ProductsDeailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductAllPage />}></Route>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/products/:id' element={<ProductsDeailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
