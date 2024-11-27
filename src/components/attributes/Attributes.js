import React, { useState } from "react";
import "./attributes.css";

const Attributes = ({ attribute, handleSelectedAttributes, className }) => {
  const [selectedAttribute, setSelectedAttribute] = useState("");

  return (
    <section className={`attribute-container ${className}`}>
      <h3 className="attribute-title">{attribute.id}:</h3>
      <section className="attribute-buttons">
        {attribute?.items?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelectedAttributes(attribute.id, item.value)}
            className={`attribute-button-wrapper ${
              selectedAttribute === item.value && attribute.id === "Color" ? "selected-color" : ""
            }`}
          >
            {attribute.id === "Color" ? (
              <button
                className={`color-circle ${selectedAttribute === item.value ? "active" : ""}`}
                onClick={() => setSelectedAttribute(item.value)}
                style={{ backgroundColor: `${item.value}` }}
              />
            ) : (
              <button
                className={`text-attribute-button ${selectedAttribute === item.value ? "active" : ""}`}
                onClick={() => setSelectedAttribute(item.value)}
              >
                {item.value}
              </button>
            )}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Attributes;
