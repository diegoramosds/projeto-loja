import UserActionsTypes from "./actionTypes"

export const loginUser = (payload) =>  ({
    type: UserActionsTypes.LOGIN,
      payload: {name: 'DG', email: 'FELIPE@'}
});
export const loginLogout = () =>  ({
    type: UserActionsTypes.LOGOUT,
});