import UserActionsTypes from "./actionTypes";

const initialState = {
    currentUser: null,
}


const userReducer = (state = initialState, action) => {
    switch (action.type){
        case  UserActionsTypes.LOGIN:
       return {...state, currentUser: action.payload};
       case UserActionsTypes.LOGOUT:
        return {...state,currentUser: null};
        default:
        return state;
    }}



export default userReducer;