import { SET_USER } from "./actionsTypes";

export const setUser = (user)=>{
    return{
        type: SET_USER,
        payload:user
    }
};