// components/Header.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  return (
    <div className="header_top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-md-6">
            <ul className="header_select_options ul_li">
              <li>
                <div className="select_option">
                  <div className="flug_wrap">
                    <Image
                      src="/images/flug/flug_uk.png"
                      alt="flag"
                      width={16}
                      height={12}
                    />
                  </div>
                  <div className="custom_select_wrapper">
                    <div
                      className="selected_option"
                      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    >
                      {selectedLanguage}
                      <span className="custom_arrow">
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </div>
                    {isLanguageOpen && (
                      <div className="dropdown_menu">
                        <div
                          className="dropdown_item"
                          onClick={() => {
                            setSelectedLanguage("English");
                            setIsLanguageOpen(false);
                          }}
                        >
                          English
                        </div>
                        <div
                          className="dropdown_item"
                          onClick={() => {
                            setSelectedLanguage("Bangla");
                            setIsLanguageOpen(false);
                          }}
                        >
                          Bangla
                        </div>
                        <div className="dropdown_item disabled">Arabic</div>
                        <div
                          className="dropdown_item"
                          onClick={() => {
                            setSelectedLanguage("Hebrew");
                            setIsLanguageOpen(false);
                          }}
                        >
                          Hebrew
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <div className="select_option">
                  <h3 className="title_text">Currency:</h3>
                  <div className="custom_select_wrapper">
                    <div
                      className="selected_option"
                      onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                    >
                      {selectedCurrency}
                      <span className="custom_arrow">
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </div>
                    {isCurrencyOpen && (
                      <div className="dropdown_menu">
                        <div
                          className="dropdown_item"
                          onClick={() => {
                            setSelectedCurrency("USD");
                            setIsCurrencyOpen(false);
                          }}
                        >
                          USD
                        </div>
                        <div
                          className="dropdown_item"
                          onClick={() => {
                            setSelectedCurrency("AMD");
                            setIsCurrencyOpen(false);
                          }}
                        >
                          AMD
                        </div>
                        <div className="dropdown_item disabled">AUD</div>
                        <div
                          className="dropdown_item"
                          onClick={() => {
                            setSelectedCurrency("EUR");
                            setIsCurrencyOpen(false);
                          }}
                        >
                          EUR
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col col-md-6">
            <p className="header_hotline">
              Call us toll free: <strong>+1888 234 5678</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
