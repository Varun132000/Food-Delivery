import * as ActionType from './ControlsActionType'
export const toggleSideMenu = (show) => {
    return function (dispatch) {
        dispatch(toggleSideMenuSuccess(show));
    };
};
export const toggleCustomPicker = (show, needBlur) => {
    return function (dispatch) {
      dispatch(ToggleCustomPickerSuccess(show));
    };
  };
  
const toggleSideMenuSuccess = show => {
    return {
        type: ActionType.SHOW_SIDE_MENU,
        payload: show,
    };
};
const ToggleCustomPickerSuccess = show => {
    return {
      type: ActionType.TOGGLE_CUSTOM_PICKER_SUCCESS,
      payload: show,
    }
}