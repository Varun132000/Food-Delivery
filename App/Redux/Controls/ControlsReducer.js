/* eslint-disable prettier/prettier */
import * as ActionType from './ControlsActionTypes';

const initialState = {
  isHomeAddSheetShown: false,
  isBlurViewShown: false,
  showingCustomPicker: false,
  showSideMenu: false,
};

const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_HOME_ADD_SHEET_SUCCESS:
      return {
        ...state,
        isHomeAddSheetShown: action.payload,
      };
    case ActionType.SHOW_BLUR_VIEW_SUCCESS:
      return {
        ...state,
        isBlurViewShown: action.payload,
      };
    case ActionType.TOGGLE_CUSTOM_PICKER_SUCCESS:
      return {
        ...state,
        showingCustomPicker: action.payload,
      };
    case ActionType.SHOW_SIDE_MENU:
      return {
        ...state,
        showSideMenu: action.payload,
      };
    default:
      return state;
  }
};

export default controlsReducer;
