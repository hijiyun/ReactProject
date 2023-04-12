function login(id, password, authenticate){
    return (dispatch, getState)=>{
        console.log("LOGIN_SUCCESs action")
        dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } })
        dispatch({ type: "LOGIN_FAIL", payload: {authenticate}})
    }
}

export const authenticateAction={login};