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

export const unfollowUserCall = async(userId, dispatch, currUserId) => {
    try {
        const res = await axios.put(`http://localhost:8080/users/${userId}/unfollow/`, {userId: currUserId})
        dispatch({type: "UNFOLLOW", payload: res.data.userId})
    } catch (error) {
        dispatch({type: "UNFOLLOW_FAILED", payload: error})
    }
}

export const followUserCall = async(userId, dispatch, currUserId) => {
    try {
        const res = await axios.put(`http://localhost:8080/users/${userId}/follow/`, {userId: currUserId})
        dispatch({type: "FOLLOW", payload: res.data.userId})
    } catch (error) {
        dispatch({type: "FOLLOW_FAILED", payload: error})
    }
}