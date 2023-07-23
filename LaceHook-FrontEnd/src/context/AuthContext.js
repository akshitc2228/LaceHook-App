import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
  user: {
    _id: "634402c7d70b4027ddee6f74",
    username: "secondUser",
    email: "secondUser@gmail.com",
    profilePicture: "Profile pics/second_user prof pic.png",
    coverPicture: "",
    isAdmin: false,
    followers: ["636831bee53db900799bedd2", "636833cee53db900799bedd4"],
    following: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
