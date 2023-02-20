/* eslint-disable  */
/* 위에있는 주석은 warning을 잡아주지 않게끔 해주는 코드*/ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['여자 봄 옷 추천','강남 우동 맛집','남자 봄 옷 추천']);
  let [하트, 하트변경] = useState(0);
  let posts = "강남 고기 맛집 리스트";
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '남자 봄 옷 추천'
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "pink" }}>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              하트변경(하트 + 1);
            }}
          >
            💙
          </span>{" "}
          {하트}{" "}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
