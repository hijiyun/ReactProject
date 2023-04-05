import './App.css';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {  
  const count = useSelector(state=>state.count)
  //state에 있는값을 다 가지고 온다
  //근데 state갑 안에있는 count를 들고오겠다 라는 의미
  const dispatch = useDispatch();
  const increase =()=>{
    dispatch({type:"INCREMENT" , payload:{num:5}}) //type는 무조건 써야하는 것이고, payload는 선택사항임
    //payload:{num:5} 이거는 한번 증가 시킬 때마다 5씩 증가시키겠다는 것
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가 !</button>
      <Box />
    </div>
  );
}

export default App;
