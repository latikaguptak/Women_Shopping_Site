import React from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ totalPayment, productsQuantity, selectedCurrency, taxes, clearCart }) => {
  return (
    <aside className="cart-totals-container">
      <header className="cart-totals-header">
        <h3>Totals</h3>
        <button onClick={clearCart} className="clear-cart-totals">Clear Cart</button>
      </header>

      <ul className="cart-totals-list">
        <li className="cart-totals-item">
          Tax 21%: <span>{selectedCurrency} {taxes}</span>
        </li>
        <li className="cart-totals-item">
          Quantity: <span>{productsQuantity}</span>
        </li>
        <li className="cart-totals-item">
          Total: <span>{selectedCurrency} {totalPayment}</span>
        </li>
      </ul>

      <div className="action-buttons">
        <Link to="/store/all" className="btn-secondary">Continue Shopping</Link>
        <Link to="/checkout" className="btn-primary">Checkout</Link>
      </div>
    </aside>
  );
};

export default CartTotals;
