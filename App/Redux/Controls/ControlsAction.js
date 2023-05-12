import * as ActionType from './ControlsActionType'
export const toggleSideMenu = (show) => {
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