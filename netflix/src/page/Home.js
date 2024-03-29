import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction'
import {useDispatch, useSelector} from "react-redux"
import Banner from "../components/Banner"

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies} = useSelector(
    (state) => state.movie  
    )
    console.log("popular",popularMovies)
    useEffect(()=>{
      dispatch(movieAction.getMovies())
    },[])
    return (
    <div>
        {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
        <div>안녕</div>
    </div>
    );
}

export default Home