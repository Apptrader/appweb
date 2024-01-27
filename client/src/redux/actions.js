import { SET_USER, SET_PLAN} from "./actionsTypes";

export const setUser = (user)=>{
    return{
        type: SET_USER,
        payload:user
    }
};

export const setPlan = (plan) => {
    return {
        type: SET_PLAN,
        payload: plan
    }
}