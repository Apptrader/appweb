import { SET_USER, SET_PLAN, SET_NODES, LOG_OUT} from "./actionsTypes";

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

export const setNodes = (nodes) => {
    console.log(nodes, "en el action")
    return {
        type: SET_NODES,
        payload: nodes
    }
}

export const setLogOut = () => {
    return {
        type: LOG_OUT
    }
}