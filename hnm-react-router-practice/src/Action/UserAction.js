    import api from "../util/api";
    import * as types from "../constants/user.constants";

    const loginWithToken = () => async (dispatch) => {
    try {
        const response = await api.get("/user/me");
        console.log("rrr", response);
        dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response.data.user,
        });
    } catch (error) {}
    };
    const loginWithEmail = (payload) => async (dispatch) => {
    try {
        dispatch({ type: types.LOGIN_REQUEST });
        const response = await api.post(`/user/login`, payload);

        if (response.status !== 200) throw new Error(response.error);
        sessionStorage.setItem("token", response.data.token);

        dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response.data.user,
        });
    } catch (error) {
        console.log("eeee", error);
        dispatch({ type: types.LOGIN_FAIL, payload: error.error });
    }
    };
    const logout = () => async (dispatch) => {
    sessionStorage.removeItem("token");
    dispatch({ type: types.LOGOUT });
    };

    export const userActions = {
    loginWithToken,
    loginWithEmail,
    logout,
    };
