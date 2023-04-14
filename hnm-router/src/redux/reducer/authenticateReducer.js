let initialstate={
    id:'',
    password:'',
    authenticate:false
};

function authenticateReducer(state=initialstate, action){
    let {type, payload}=action
    console.log("LOGIN_SUCCESS reducer")
    switch(type){
        case "LOGIN_SUCCESS":
            return{...state, id:payload.id,password:payload.password,authenticate:true};
        case "LOGIN_FAIL":
            return {...state, id:payload.id,password:payload.password,authenticate:false}
        default: 
        return {...state};
    }
}

export default authenticateReducer;