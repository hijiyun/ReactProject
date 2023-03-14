import './App.css';
import "./pages/Homepage"
import "./pages/Aboutpage"
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Homepage />
      <Aboutpage />
    </div>
  );
}

export default App;
