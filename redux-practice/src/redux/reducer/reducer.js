

let initialState ={
    count:0
}

function reducer(state = initialState, action){
    console.log("action은 모지?", action);
    // if(action.type === "INCREMENT"){
    //     return{...state, count: state.count+1} //...state를 왜 했냐면 만약 state가 여러개이면 다른 state값은 유지하되 count만 바꾼다는 것
    //     // ...state는 기본적으로 쓰고, 뒤에내용을 바꾸고 싶은 내용을 쓰면 된다.
    // }

    switch(action.type){
        case "INCREMENT":
            return{...state, count: state.count + action.payload.num};
        default:
            return{...state};
    }
}

export default reducer;