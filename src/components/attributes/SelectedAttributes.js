import React, { useEffect, useState } from "react";
import "./attributes.css";

const SelectedAttributes = ({ attribute, userSelectedAttributes, className }) => {
  const [existingAttributes, setExistingAttributes] = useState([]);

  // Syncs selected attributes with existing attributes based on user selection
  const syncSelectedAttributes = () => {
    const updatedAttributes = attribute.items.map((existingAttribute) => {
      const selectedAttribute = userSelectedAttributes.find(
        (attr) => attr.attributeId === attribute.id
      );
      return {
        ...existingAttribute,
        isSelected:
          selectedAttribute &&
          selectedAttribute.attributeValue === existingAttribute.value,
      };
    });
    setExistingAttributes(updatedAttributes);
  };

  // Initialize on component mount
  useEffect(() => {
    syncSelectedAttributes();
  }, [attribute, userSelectedAttributes]);

  return (
    <section className={`attribute-container ${className}`}>
      <h3 className="attribute-title">{attribute.id}:</h3>
      <section className="attribute-buttons-row">
        {existingAttributes.map((item) => (
          <div
            key={item.id}
            className={
              attribute.id === "Color" && item.isSelected
                ? "selected-color-box-section"
                : "unselected-color-box-section"
            }
          >
            {attribute.id === "Color" ? (
              <button
                className={`color-circle ${item.isSelected ? "active" : ""}`}
                style={{ backgroundColor: `${item.value}` }}
              />
            ) : (
              <button
                className={`text-attribute-button ${item.isSelected ? "active" : ""}`}
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

export default SelectedAttributes;
