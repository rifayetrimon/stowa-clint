"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Middleheader = () => {
  return (
    <div className="header_middle">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-3 col-md-3 col-sm-12">
            <div className="brand_logo">
              <Link href="/" className="brand_link">
                <Image
                  src="/images/logo/logo_1x.png"
                  alt="Brand Logo"
                  width={150}
                  height={50}
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="col col-lg-6 col-md-6 col-sm-12">
            <form action="#" role="search">
              <div className="advance_serach">
                <div className="select_option mb-0 clearfix">
                  <select className="category" aria-label="Select category">
                    <option value="" data-display="All Categories">
                      Select A Category
                    </option>
                    <option value="1">New Arrival Products</option>
                    <option value="2">Most Popular Products</option>
                    <option value="3">Deals of the day</option>
                    <option value="4">Mobile Accessories</option>
                    <option value="5">Computer Accessories</option>
                    <option value="6">Consumer Electronics</option>
                    <option value="7">Automobiles & Motorcycles</option>
                  </select>
                  <span className="custom_arrow_black">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
                <div className="form_item">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search Products..."
                    aria-label="Search products"
                  />
                  <button type="submit" className="search_btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col col-lg-3 col-md-3 col-sm-12">
            <div className="header_actions">
              <button
                className="mobile_menu_btn2 navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_menu_dropdown"
                aria-controls="main_menu_dropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars"></i>
              </button>

              <button type="button" className="cart_btn">
                <span className="cart_icon">
                  {/* <i className="icon icon-Shopping-Cart"></i> */}
                  <img
                    src="/images/icons/cart.png"
                    className="h-10 w-10"
                    alt=""
                  />
                  <small className="cart_counter">3</small>
                </span>
                <span className="cart_amount">$909.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middleheader;
