"use client";
import React, { useState } from "react";

const DropdownArrow = () => (
  <svg
    className="ms-2"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "middle" }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function HeaderBottom() {
  // State for Browse Categories dropdown
  const [categoriesOpen, setCategoriesOpen] = useState(true);

  return (
    <>
      <div className="header_bottom">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: All Categories Dropdown */}
            <div className="col col-md-3">
              <div className="allcategories_dropdown">
                <button
                  className="allcategories_btn d-flex align-items-center"
                  type="button"
                  aria-expanded={categoriesOpen}
                  aria-controls="allcategories_collapse"
                  onClick={() => setCategoriesOpen((open) => !open)}
                >
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    aria-labelledby="statsIconTitle"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    color="#000"
                    className="me-2"
                  >
                    <title id="statsIconTitle">Stats</title>
                    <path d="M6 7L15 7M6 12L18 12M6 17L12 17" />
                  </svg>
                  <span>Browse categories</span>
                </button>
                <div
                  className={
                    "allcategories_collapse" + (categoriesOpen ? " show" : "")
                  }
                  id="allcategories_collapse"
                >
                  <div className="card card-body">
                    <ul className="allcategories_list ul_li_block">
                      <li>
                        <a href="shop_grid.html">
                          <i className="icon icon-Starship"></i> New Arrival
                          Products
                        </a>
                      </li>
                      <li>
                        <a href="shop_list.html">
                          <i className="icon icon-WorldWide"></i> Most Popular
                          Products
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid.html">
                          <i className="icon icon-Star"></i> Deals of the day
                        </a>
                      </li>
                      <li>
                        <a href="shop_list.html">
                          <i className="icon icon-Phone"></i> Mobile Accessories
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid.html">
                          <i className="icon icon-DesktopMonitor"></i> Computer
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a href="shop_list.html">
                          <i className="icon icon-Bulb"></i> Consumer
                          Electronics
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid.html">
                          <i className="icon icon-Car"></i> Automobiles &
                          Motorcycles
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Main Menu */}
            <div className="col col-md-6">
              <nav className="main_menu navbar navbar-expand-lg">
                <div className="main_menu_inner" id="main_menu_dropdown">
                  <button type="button" className="offcanvas_close">
                    <i className="fal fa-times"></i>
                  </button>
                  <ul className="main_menu_list ul_li">
                    <li className="dropdown">
                      <a
                        className="nav-link d-flex align-items-center"
                        href="#"
                        id="home_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home <DropdownArrow />
                      </a>
                      <ul
                        className="submenu dropdown-menu"
                        aria-labelledby="home_submenu"
                      >
                        <li>
                          <a href="index-2.html">Home default</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home style 2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="nav-link d-flex align-items-center"
                        href="#"
                        id="shop_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Shop <DropdownArrow />
                      </a>
                      <ul
                        className="submenu dropdown-menu"
                        aria-labelledby="shop_submenu"
                      >
                        <li>
                          <a href="shop_grid.html">Shop Grid</a>
                        </li>
                        <li>
                          <a href="shop_list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="shop_details.html">Shop Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="nav-link d-flex align-items-center"
                        href="#"
                        id="blog_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Blog <DropdownArrow />
                      </a>
                      <ul
                        className="submenu dropdown-menu"
                        aria-labelledby="blog_submenu"
                      >
                        <li>
                          <a href="blog.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left sidebar</a>
                        </li>
                        <li>
                          <a href="blog-fullwidth.html">Blog Full width</a>
                        </li>
                        <li>
                          <a href="blog_details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="nav-link d-flex align-items-center"
                        href="#"
                        id="pages_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages <DropdownArrow />
                      </a>
                      <ul
                        className="submenu dropdown-menu"
                        aria-labelledby="pages_submenu"
                      >
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="account.html">My Account</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            id="cart_submenu"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="d-flex align-items-center"
                          >
                            Shopping Cart <DropdownArrow />
                          </a>
                          <ul
                            className="submenu dropdown-menu"
                            aria-labelledby="cart_submenu"
                          >
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="cart_empty.html">Cart Empty</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="order_tracking.html">Order Tracking</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="error.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="offcanvas_overlay"></div>
            </div>

            {/* Right: Icons */}
            <div className="col col-md-3">
              <ul className="header_icons_group ul_li_right">
                <li>
                  <a href="contact.html">
                    <svg
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      stroke="#051d43"
                      strokeWidth="1"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      fill="none"
                      color="#2329D6"
                    >
                      <title id="locationIconTitle">Location</title>
                      <path d="M12,21 C16,16.8 18,12.8 18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 C6,12.8 8,16.8 12,21 Z" />
                      <circle cx="12" cy="9" r="1" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="compare.html">
                    <svg
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      stroke="#051d43"
                      strokeWidth="1"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      fill="none"
                      color="#2329D6"
                    >
                      <title id="rotateIconTitle">Rotate</title>
                      <path d="M22 12l-3 3-3-3" />
                      <path d="M2 12l3-3 3 3" />
                      <path d="M19.016 14v-1.95A7.05 7.05 0 0 0 8 6.22" />
                      <path d="M16.016 17.845A7.05 7.05 0 0 1 5 12.015V10" />
                      <path strokeLinecap="round" d="M5 10V9" />
                      <path strokeLinecap="round" d="M19 15v-1" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="wishlist.html">
                    <svg
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      stroke="#051d43"
                      strokeWidth="1"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      fill="none"
                      color="#2329D6"
                    >
                      <title>Favourite</title>
                      <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z" />
                    </svg>
                    <span className="wishlist_counter">3</span>
                  </a>
                </li>
                <li>
                  <a href="account.html">
                    <svg
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      stroke="#051d43"
                      strokeWidth="1"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      fill="none"
                      color="#2329D6"
                    >
                      <title id="personIconTitle">Person</title>
                      <path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
