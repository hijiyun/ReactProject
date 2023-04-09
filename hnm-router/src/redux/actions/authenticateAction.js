function login(id, password){
    return (dispatch, getState)=>{
        console.log("LOGIN_SUCCESs action")
        dispatch({type:"LOGIN_SUCCESS", payload:{id, password}})
    }
}

export const authenticateAction={login};