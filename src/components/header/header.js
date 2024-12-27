import React, { useContext } from "react";
import { CartContext } from "../../context-provider/context";
import { FaShoppingCart } from "react-icons/fa";
import "./header.scss";

export const Header = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="commerce-text">E-commerce website</span>
        <span className="navbar-text">
          <div className="btn position-relative">
            <FaShoppingCart className="icon" />
            <span className="badge position-absolute bg-danger">
              {cart?.length}
            </span>
          </div>
        </span>
      </div>
    </nav>
  );
};
