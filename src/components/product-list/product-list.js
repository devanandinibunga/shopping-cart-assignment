import React, { useContext, useState } from "react";
import "./product-list.scss";
import { ProductDetails } from "../product-details/product-details";
import { CartContext } from "../../context-provider/context";

export const ProductList = () => {
  const { dispatch } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 (128 GB) - Blue",
      price: 100000,
      image: "/images/iphone.png",
    },
    {
      id: 2,
      name: "Tufted Accent Chair",
      price: 2500,
      image: "/images/accent_chair.png",
    },
    {
      id: 3,
      name: "Portable Power Bank",
      price: 3000,
      image: "/images/power_bank.png",
    },
    {
      id: 4,
      name: "The Catcher in the Rye",
      price: 999,
      image: "/images/rye.png",
    },
    {
      id: 5,
      name: "Men's Soccer Jersey",
      price: 4500,
      image: "/images/soccer_jersey.png",
    },
    {
      id: 6,
      name: "Wooden Dining Table Set",
      price: 5000,
      image: "/images/table_set.png",
    },
    {
      id: 7,
      name: "Basketball",
      price: 2500,
      image: "/images/basketball.png",
    },
    {
      id: 8,
      name: "Standing Desk Converter",
      price: 12000,
      image: "/images/desk_converter.png",
    },
    {
      id: 9,
      name: "Levi's 501 Original Fit Jeans",
      price: 3999,
      image: "/images/fit_jeans.png",
    },
    {
      id: 10,
      name: "Women's Vintage Floral Dress",
      price: 4999,
      image: "/images/floral_dress.png",
    },
  ];
  const handleClick = (product) => {
    setIsModalOpen(true);
    setSelectedProduct(product);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    closeModal();
  };
  return (
    <div className="product-list-wrapper">
      {products?.map((product) => (
        <div
          key={product?.id}
          className="card"
          onClick={() => handleClick(product)}
        >
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <p className="card-text">
              {product?.name}
            </p>
            <p className="card-text">
              {product?.price}
            </p>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <ProductDetails
          selectedProduct={selectedProduct}
          closeModal={closeModal}
          handleCart={handleCart}
        />
      )}
    </div>
  );
};
