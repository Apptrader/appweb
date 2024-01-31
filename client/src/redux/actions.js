import { SET_USER, SET_PLAN} from "./actionsTypes";

export const setUser = (user)=>{
    console.log(user, "en el action")
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