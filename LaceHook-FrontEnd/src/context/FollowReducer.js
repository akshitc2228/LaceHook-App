const FollowReducer = (state, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        isFetching: false,
        followedUsers: [...state.followedUsers, action.payload],
      };
    case "FOLLOW_FAILED":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case "UNFOLLOW":
      return {
        ...state,
        isFetching: false,
        followedUsers: state.followingUsers.filter(
          (userId) => userId !== action.payload
        ),
      };
    case "UNFOLLOW_FAILED":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default FollowReducer;
