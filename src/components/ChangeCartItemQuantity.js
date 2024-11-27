import React from "react";

const ChangeCartItemQuantity = ({ handleRemoveProduct, handleAddProduct, singleProduct, className }) => {
  return (
    <section
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <button
        onClick={() =>
          handleAddProduct(singleProduct, singleProduct.userSelectedAttributes)
        }
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f2f5",
          color: "#333",
          fontSize: "1.2rem",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s ease, transform 0.2s ease",
          marginBottom:"20px"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e0e4e7")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f2f5")}
      >
        +
      </button>

      <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "#333", textAlign: "center", width: "32px" ,marginBottom:"20px" }}>
        {singleProduct.quantity}
      </p>

      <button
        onClick={() =>
          handleRemoveProduct(singleProduct, singleProduct.userSelectedAttributes)
        }
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f2f5",
          color: "#333",
          fontSize: "1.2rem",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s ease, transform 0.2s ease",
          marginBottom:"20px"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e0e4e7")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f2f5")}
      >
        -
      </button>
    </section>
  );
}

export default ChangeCartItemQuantity;
