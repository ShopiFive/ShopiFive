import React from "react";
import { NavLink } from "react-router-dom";

import "./MobileNav.scss";

import {
  HomeMajor,
  OrdersMajor,
  ProductsMajor,
  StoreMajor,
} from "@shopify/polaris-icons";

export default function MobileNav() {
  const links = [
    { name: "Home", icon: <HomeMajor />, route: "/home" },
    { name: "Orders", icon: <OrdersMajor />, route: "/orders" },
    { name: "Products", icon: <ProductsMajor />, route: "/products" },
    { name: "Store", icon: <StoreMajor />, route: "/store" },
  ];

  return (
    <nav className="mobilenav">
      <div className="mobilenav__container">
        <nav className="mobilenav__bar">
          <ul className="mobilenav__list">
            {links.map((link, index) => (
              <li className="mobilenav__items" key={index}>
                <NavLink className="mobilenav__links" to={link.route}>
                  <div className="mobilenav__icon">{link.icon}</div>
                  <p className="mobilenav__text">{link.name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}