import React from "react";

const Topheader = () => {
  return (
    <div>
      <div className="header_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-md-6">
              <ul className="header_select_options ul_li">
                <li>
                  <div className="select_option">
                    <div className="flug_wrap">
                      <img src="/images/flug/flug_uk.png" alt="UK Flag" />
                    </div>
                    <select defaultValue="">
                      <option value="" disabled>
                        Select Your Language
                      </option>
                      <option value="1">English</option>
                      <option value="2">Bangla</option>
                      <option value="3" disabled>
                        Arabic
                      </option>
                      <option value="4">Hebrew</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="select_option">
                    <h3 className="title_text">Currency:</h3>
                    <select defaultValue="">
                      <option value="" disabled>
                        Select Your Currency
                      </option>
                      <option value="usd">USD</option>
                      <option value="amd">AMD</option>
                      <option value="aud" disabled>
                        AUD
                      </option>
                      <option value="eur">EUR</option>
                    </select>
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
    </div>
  );
};

export default Topheader;
