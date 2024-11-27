import React, { memo } from "react";
import Attribute from "../../components/attributes/Attributes.js";
import AddToCartButton from "../../components/AddToCartButton.js";

const QuickAddToCart = ({
  item,
  handleAddProduct,
  handleSelectedAttributes,
  selectedAttributes,
  allAttributesAreSelected,
  alertMessageMain,
  toggleQuickCart,
  setActiveItem
}) => {
  if (!item) return null; // Avoid rendering if item is not available

  return (
    <section className="quick-addto-cart-container">
      <div className="quick-addto-cart-content">
        <h3 className="quick-addto-cart-title">Quick Add to Cart</h3>

        <div className="quick-addto-cart-attributes">
          {item.attributes.map((attribute) => (
            <Attribute
              className="quick-attribute"
              key={attribute.id}
              attribute={attribute}
              handleSelectedAttributes={handleSelectedAttributes}
              selectedAttributes={selectedAttributes}
            />
          ))}
        </div>

        <AddToCartButton
          className={`quick-addtocart-btn ${allAttributesAreSelected ? "active" : "inactive"}`}
          handleAddProduct={handleAddProduct}
          item={item}
          allAttributesAreSelected={allAttributesAreSelected}
          selectedAttributes={selectedAttributes}
          alertMessageMain={alertMessageMain}
          toggleQuickAddToCart={toggleQuickCart}
          setActiveItem={setActiveItem}
        />

        <p
          className="close-quickbuy"
          onClick={() => {
            setActiveItem(null);
            toggleQuickCart(false);
          }}
        >
          Close
        </p>
      </div>
    </section>
  );
};

export default memo(QuickAddToCart);
