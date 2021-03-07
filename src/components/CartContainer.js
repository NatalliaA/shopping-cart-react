import React from "react";
import CartItem from "./CartItem";
import {connect} from 'react-redux';
import { SHOW_ALL, GET_TOTALS } from '../actions';

const CartContainer = ({ cart = [], total, dispatch}) => {

  React.useEffect(()=>{
    //dependency array to run useEffect ONLY
    // if something changes in the cart
    dispatch({type: GET_TOTALS});
  }, [cart, dispatch]);

  //cart = [] default parameter if something goes wrong with the cart

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header className='empty'>       
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <button className="btn clear-btn"
        onClick={()=>dispatch({type: SHOW_ALL})}>All Classes</button>          
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      
      <header>
        <h2>your cart</h2>
      </header>
    
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
    
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>  
        <button className="btn clear-btn"
        onClick={()=>dispatch({type: SHOW_ALL})}>All Classes</button>      
      </footer>
    </section>
  );
};

const mapStateToProps = store => {
return {cart: store.cart, total: store.total};
};

export default connect(mapStateToProps)(CartContainer);
