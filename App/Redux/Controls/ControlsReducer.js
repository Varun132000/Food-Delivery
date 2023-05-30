import * as ActionType from './ControlsActionType'
const initialState = {
    showSideMenu: false,
    showingCustomPicker: false,
}
const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SHOW_SIDE_MENU:
            return {
                ...state,
                showSideMenu: action.payload,
            };
        case ActionType.TOGGLE_CUSTOM_PICKER_SUCCESS:
            return {
                ...state,
                showingCustomPicker: action.payload,
            };
        default:
            return state;
    }
}
export default controlsReducer;