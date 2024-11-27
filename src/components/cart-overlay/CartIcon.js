import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import EmptyCart from "../../assets/images/cart-icon.png";
import CartOverlay from "./CartOverlay.js";
import { ResetLocation } from "../../helpers/ResetLocation";

const CartIcon = ({
  totalPayment,
  cartItems,
  selectedCurrency,
  productsQuantity,
  handleAddProduct,
  handleRemoveProduct,
  activeMenu,
  clearCart,
  closeMenu
}) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const cartIcon = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const redirectToCart = () => {
    navigate("/cart"); // Redirect to cart page
  };

  const removeCartOverlay = () => {
    setDropdownMenu(false);
    ResetLocation();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cartIcon.current && !cartIcon.current.contains(e.target)) {
        setDropdownMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section className="cart-icon-section" ref={cartIcon}>
      <section className="cart-icon" onClick={redirectToCart}> {/* Redirect on click */}
        <img src={EmptyCart} alt="empty cart" className="cart-icon" />
        {productsQuantity > 0 ? (
          <p className="cart-quantity">{productsQuantity}</p>
        ) : null}
      </section>

      {/* {!dropdownMenu ? null : (
        <CartOverlay
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          ToggleCartOverlay={() => setDropdownMenu(!dropdownMenu)}
          productsQuantity={productsQuantity}
          cartItems={cartItems}
          selectedCurrency={selectedCurrency}
          totalPayment={totalPayment}
          activeMenu={activeMenu}
          removeCartOverlay={removeCartOverlay}
          clearCart={clearCart}
          closeMenu={closeMenu}
        />
      )} */}
    </section>
  );
};

export default CartIcon;
