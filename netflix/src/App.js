import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./page/Home"
import Movie from "./page/Movie"
import MovieDetail from "./page/MovieDetail"

//1. 3개 페이지 필요 [홈페이지 , 영화페이지 , 영화 디테일페이지]
//2. 홈페이지에서 영화 베너들을 볼 수 있다.
//3. 3가지 섹션의 영화를 볼 수 있다(popular, top rated, upcomming)
//4. 각 영화에 마우스를 올리면 확대되면서 제목, 장르, 평점, 인기도, 청불여부
//5. 영화를 슬라이드로 넘기면서 볼 수 있다.

//6. 영화 디테일 페이지에선 영화에 대한 디테일한 정보를 볼 수 있다. (포스터, 베목, 줄거리 ,점수, 인기도 등등)
//7. 예고편 누르면 예고편 볼 수 있음
//8. 영화 리뷰도 볼 수 있음
//9. 영화 관련 추천 영화도 볼 수 있음

//10. 영화 검색 가능 
//11. 영화를 정렬할 수 있음
//12. 영화를 필터링 할 수 있음

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movie' element={<Movie/>}/>
        <Route path='/Movie/:id' element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
