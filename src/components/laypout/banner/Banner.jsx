import React from "react";

const Banner = () => {
  return (
    <section className="slider_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-3">
            <div className="main_slider" data-slick='{"arrows": false}'>
              <div
                className="slider_item set-bg-image"
                data-background="/images/slider/slide-2.jpg"
              >
                <div className="slider_content">
                  <h3
                    className="small_title"
                    data-animation="fadeInUp2"
                    data-delay=".2s"
                  >
                    Clothing
                  </h3>
                  <h4
                    className="big_title"
                    data-animation="fadeInUp2"
                    data-delay=".4s"
                  >
                    Smart blood <span>Pressure monitor</span>
                  </h4>
                  <p data-animation="fadeInUp2" data-delay=".6s">
                    The best gadgets collection 2021
                  </p>
                  <div
                    className="item_price"
                    data-animation="fadeInUp2"
                    data-delay=".6s"
                  >
                    <del>$430.00</del>
                    <span className="sale_price">$350.00</span>
                  </div>
                  <a
                    className="btn btn_primary"
                    href="shop_details.html"
                    data-animation="fadeInUp2"
                    data-delay=".8s"
                  >
                    Start Buying
                  </a>
                </div>
              </div>
              <div
                className="slider_item set-bg-image"
                data-background="/images/slider/slide-3.jpg"
              >
                <div className="slider_content">
                  <h3
                    className="small_title"
                    data-animation="fadeInUp2"
                    data-delay=".2s"
                  >
                    Clothing
                  </h3>
                  <h4
                    className="big_title"
                    data-animation="fadeInUp2"
                    data-delay=".4s"
                  >
                    Smart blood <span>Pressure monitor</span>
                  </h4>
                  <p data-animation="fadeInUp2" data-delay=".6s">
                    The best gadgets collection 2021
                  </p>
                  <div
                    className="item_price"
                    data-animation="fadeInUp2"
                    data-delay=".6s"
                  >
                    <del>$430.00</del>
                    <span className="sale_price">$350.00</span>
                  </div>
                  <a
                    className="btn btn_primary"
                    href="shop_details.html"
                    data-animation="fadeInUp2"
                    data-delay=".8s"
                  >
                    Start Buying
                  </a>
                </div>
              </div>
              <div
                className="slider_item set-bg-image"
                data-background="/images/slider/slide-1.jpg"
              >
                <div className="slider_content">
                  <h3
                    className="small_title"
                    data-animation="fadeInUp2"
                    data-delay=".2s"
                  >
                    Clothing
                  </h3>
                  <h4
                    className="big_title"
                    data-animation="fadeInUp2"
                    data-delay=".4s"
                  >
                    Smart blood <span>Pressure monitor</span>
                  </h4>
                  <p data-animation="fadeInUp2" data-delay=".6s">
                    The best gadgets collection 2021
                  </p>
                  <div
                    className="item_price"
                    data-animation="fadeInUp2"
                    data-delay=".6s"
                  >
                    <del>$430.00</del>
                    <span className="sale_price">$350.00</span>
                  </div>
                  <a
                    className="btn btn_primary"
                    href="shop_details.html"
                    data-animation="fadeInUp2"
                    data-delay=".8s"
                  >
                    Start Buying
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
