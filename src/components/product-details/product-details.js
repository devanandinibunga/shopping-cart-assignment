import React from "react";
import "./product-details.scss";

export const ProductDetails = ({ selectedProduct, closeModal, handleCart }) => {
  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Product Details</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={selectedProduct?.image}
              alt={selectedProduct?.name}
              // style={{ width: "100%", height: "50%" }}
            />
            <p>
              <strong>Product Name:</strong> {selectedProduct?.name}
            </p>
            <p>
              <strong>Price:</strong> ${selectedProduct?.price.toFixed(2)}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleCart(selectedProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
