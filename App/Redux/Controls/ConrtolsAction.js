/* eslint-disable prettier/prettier */
import * as ActionType from './ControlsActionTypes';

export const toggleHomeAddSheet = (show, needBlur) => {
  return function (dispatch) {
    dispatch(ShowHomeAddSheetSuccess(show));
    if (needBlur) {
      dispatch(ShowBlurViewSucces(show));
    }
  };
};
export const toggleSideMenu = (show, needBlur) => {
  return function (dispatch) {

    dispatch(toggleSideMenuSuccess(show));
  };
};

const toggleSideMenuSuccess = show => {
  return {
    type: ActionType.SHOW_SIDE_MENU,
    payload: show,
  };
};

export const toggleCustomPicker = (show, needBlur) => {
  return function (dispatch) {
    dispatch(ToggleCustomPickerSuccess(show));
    if (needBlur) {
      dispatch(ShowBlurViewSucces(show));
    }
  };
};

const ShowHomeAddSheetSuccess = show => {
  return {
    type: ActionType.SHOW_HOME_ADD_SHEET_SUCCESS,
    payload: show,
  };
};

const ToggleCustomPickerSuccess = show => {
  return {
    type: ActionType.TOGGLE_CUSTOM_PICKER_SUCCESS,
    payload: show,
  };
};

const ShowBlurViewSucces = show => {
  return {
    type: ActionType.SHOW_BLUR_VIEW_SUCCESS,
    payload: show,
  };
};
