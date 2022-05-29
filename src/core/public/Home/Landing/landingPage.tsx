import React from "react";

const landingPage = () => {
  return (
    <section className="main banner banner-herobanner mt-2 mb-5 position-relative overflow-hidden">
      <button className="carousel-buttons carousel-buttons-left  btn btn-primary rounded-circle text-white  top-50 banner-icon ">
        <i className="ic-chevron-left" />
      </button>
      <button className="carousel-buttons carousel-buttons-right btn btn-primary rounded-circle top-50 text-white banner-icon">
        <i className="ic-chevron-right" />
      </button>
      <div className="position-absolute bottom-0 start-50 mb-3 d-flex justify-content-center align-items-center">
        <div className="carousel-indicator carousel-indicator-active rounded-circle m-1" />
        <div className="carousel-indicator rounded-circle m-1" />
        <div className="carousel-indicator rounded-circle m-1" />
        <div className="carousel-indicator rounded-circle m-1" />
      </div>

      <div className="d-flex flex-column w-100 h-100 justify-content-center px-5">
        <h1 className="text-white font-nunito">Hello,</h1>
        <h5 className="heading-5 text-white font-nunito ">
          Welcome To The Team. We’re glad to have you here.
        </h5>
        <div className="d-grid gap-2 d--flex justify-content-start">
          <button
            className="btn font-nunito btn-primary text-white rounded-pill mt-3"
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default landingPage;
