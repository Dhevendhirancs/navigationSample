import * as constants from '../components/utils/constants'
const initialState = {
    selectedTab: constants.productListTab
};
export default (drawer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTED_TAB":
            var newState = state;
            newState.selectedTab = action.payload;
            return newState;
        default:
            return state;
    }
});
