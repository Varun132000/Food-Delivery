import * as ActionType from './ControlsActionType'
const initialState = {
    showSideMenu: false,
}
const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SHOW_SIDE_MENU:
            return {
                ...state,
                showSideMenu: action.payload,
            };
        default:
            return state;
    }
}
export default controlsReducer;