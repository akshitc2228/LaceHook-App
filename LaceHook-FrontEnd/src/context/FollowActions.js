export const FollowSuccess = (userId) => ({
    type: "FOLLOW",
    payload: userId,
});

export const FollowFailure = (error) => ({
    type: "FOLLOW_FAILED",
    payload: error,
});

export const UnfollowSuccess = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
});

export const UnfollowFailure = (error) => ({
    type: "UNFOLLOW_FAILED",
    payload: error,
});