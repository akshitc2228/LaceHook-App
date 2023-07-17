import axios from "axios";

//More study on dispatch
export const loginCall = async(userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post("http://localhost:8080/auth/login", userCredentials)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch(err) {
        dispatch({type: "LOGIN_FAILURE", payload: err})

    }
}