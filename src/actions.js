export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const SHOW_ALL= "SHOW_ALL";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const GET_TOTALS = "GET_TOTALS";

export const removeItem = id => {
    return {type: REMOVE, payload: {id}};
};