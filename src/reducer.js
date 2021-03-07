import { DECREASE, GET_TOTALS, INCREASE, REMOVE, SHOW_ALL } from './actions';
// items
import data from "./data";

//initial store
//cart = cartitems from data file data.js
//total=initial amout of money to pay in cart
//amount= initial amount of items in cart
let cartItems = data;

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0
};

//reducer
function reducer(state = initialStore, action) { 
    //can't mutate state
    //NO state.count = state.count -1
    //instead copy and return a new object
    //...state: COPY all values from state
    //change in that copy only count value

    if (action.type === SHOW_ALL) {
        
        return { ...state, cart: data };      
    }

    if (action.type === DECREASE) {
        let newCart = [];
        if (action.payload.amount === 1) {
            newCart = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
        }
        else {
            newCart = state.cart.map(cartItem => {
                if (cartItem.id === action.payload.id) {
                    cartItem = { ...cartItem, amount: cartItem.amount - 1 };
                }
                return cartItem;
            })
        }
        return { ...state, cart: newCart };
    }

    if (action.type === INCREASE) {
        let newCart = state.cart.map(cartItem => {
            if (cartItem.id === action.payload.id) {
                cartItem = { ...cartItem, amount: cartItem.amount + 1 };
            }
            return cartItem;
        })
        return { ...state, cart: newCart };
    }

    if (action.type === REMOVE) {
        let newCart = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
        return { ...state, cart: newCart };
    }

    //amount= number in the cart icon in navbar
    //total = number in total after all cart items
    if (action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            //reduce ES6 we can return anything we want but must return total
            const { price, amount } = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        },
            {
                total: 0,
                amount: 0
            }
        );
        return { ...state, total, amount };
    }
    return state;
}

export default reducer;