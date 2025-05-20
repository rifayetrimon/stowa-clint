import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter_section mt-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6">
            <h2 className="newsletter_title text-white">
              Sign Up for Newsletter{" "}
            </h2>
            <p>
              Get E-mail updates about our latest products and special offers.
            </p>
          </div>
          <div className="col col-lg-6">
            <form action="#!">
              <div className="newsletter_form">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
                <button type="submit" className="btn btn_secondary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
