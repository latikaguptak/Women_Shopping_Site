import React, { useEffect, useState } from "react";
import SelectedAttributes from "../../components/attributes/SelectedAttributes.js";
import SimpleImageSlider from "react-simple-image-slider";
import ChangeCartItemQuantity from "../../components/ChangeCartItemQuantity.js";

const CartSingleItem = ({ selectedCurrency, singleProduct, handleAddProduct, handleRemoveProduct }) => {
  const [priceAmount, setPriceAmount] = useState("");

  useEffect(() => {
    const targetCurrency = singleProduct.prices.find(price => price.currency.symbol === selectedCurrency);
    setPriceAmount(targetCurrency.amount.toFixed(2));
  }, [selectedCurrency, singleProduct.prices]);

  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <h2 className="cart-item-brand">{singleProduct.brand}</h2>
        <h2 className="cart-item-name">{singleProduct.name}</h2>
        <p className="cart-item-price">
          {selectedCurrency} {priceAmount}
        </p>
        {singleProduct.attributes.map(attribute => (
          <SelectedAttributes
            key={attribute.id}
            attribute={attribute}
            userSelectedAttributes={singleProduct.userSelectedAttributes}
            singleProduct={singleProduct}
          />
        ))}
      </div>

      <div className="cart-item-media">
        <ChangeCartItemQuantity
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          singleProduct={singleProduct}
          className={"display:flex"}
        />
        <SimpleImageSlider
          images={singleProduct.gallery}
          showNavs={singleProduct.gallery.length > 1}
          width={200}
          height={200}
          navSize={10}
          navStyle={2}
          bgColor="#FFF"
        />
      </div>
    </article>
  );
};

export default CartSingleItem;
