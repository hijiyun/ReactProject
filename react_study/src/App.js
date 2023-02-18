import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState('여자 봄 옷 추천');
  let posts = "강남 고기 맛집 리스트";
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'pink'}}>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목 }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
