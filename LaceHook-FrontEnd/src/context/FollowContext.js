import { createContext, useReducer } from "react";
import FollowReducer from "./FollowReducer";

const INITIAL_STATE = {
  followedUsers: [],
  isFetching: false,
  error: false,
};

export const FollowContext = createContext(INITIAL_STATE);

export const FollowContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FollowReducer, INITIAL_STATE);

  return (
    <FollowContextProvider
      value={{
        followedUsers: state.followedUsers,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FollowContextProvider>
  );
};
