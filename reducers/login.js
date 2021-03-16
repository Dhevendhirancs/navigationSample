const initialState = {
    userDetails: null
};
export default (login = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DETAILS":
            var newState = state;
            newState.userDetails = action.payload;
            return newState;
        default:
            return state;
    }
});
