import React, { useEffect } from "react";
import CartSingleItem from "./CartSingleItem.js";
import CartTotals from "./CartTotals.js";
import "./cart.css";
import CartHero from "../../assets/images/cart-hero.mp4";

const Cart = ({ selectedCurrency, totalPayment, taxes, handleRemoveProduct, cartItems, handleAddProduct, selectedAttributes, productsQuantity, clearCart }) => {
  useEffect(() => {
    document.title = "Cart | Womens Fashion";
  }, []);

  return (
    <main>
      <section className="cart-hero">
        <h2>Cart</h2>
        <video autoPlay loop muted playsInline>
          <source src={CartHero} type="video/mp4" />
        </video>
      </section>

      <section className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty-message">
            <p>Looks like you haven't added anything to your cart yet.</p>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((singleProduct) => (
              <CartSingleItem
                selectedAttributes={selectedAttributes}
                handleAddProduct={handleAddProduct}
                key={singleProduct.uniqueId}
                singleProduct={singleProduct}
                selectedCurrency={selectedCurrency}
                handleRemoveProduct={handleRemoveProduct}
              />
            ))}
          </div>
        )}
        <CartTotals
          selectedCurrency={selectedCurrency}
          totalPayment={totalPayment}
          productsQuantity={productsQuantity}
          taxes={taxes}
          clearCart={clearCart}
        />
      </section>
    </main>
  );
};

export default Cart;
