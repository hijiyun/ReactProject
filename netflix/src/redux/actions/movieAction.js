import api from "../api"

const API_KEY =process.env.REACT_APP_API_KEY
function getMovies(){
    return async (dispatch)=>{
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedMovieApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upComingMovieApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

       let data = await Promise.all([popularMovieApi, topRatedMovieApi, upComingMovieApi]);
       console.log("data:", data)

        // let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
        // let response = await fetch(url)
        // let data = await response.json()

        // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
        // let response2 = await fetch(url2)
    }
}

export const movieAction = {
    getMovies,
}