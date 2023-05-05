let initialState ={
    popularoMvies:{},
    topratedMovie:{},
    upcomingMovies:{}
}

function movieReducer(state=initialState, action){
    let {type, payload} = action
    switch(type){
        case "GET_MOVIE_SUCCESS":
            return {...state,popularoMvies:payload.popularoMvies 
                            ,topratedMovie:payload.topratedMovie 
                            , upcomingMovies:payload.upcomingMovies };
            default:
                return {...state}
    };
}
export default movieReducer;