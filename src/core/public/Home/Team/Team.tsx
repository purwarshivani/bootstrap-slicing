import React from "react";

const Team = () => {
  return (
    <section className="main banner banner-teambanner mt-2 mb-5 ">
      <div className="d-flex flex-column text-right w-100 h-100 justify-content-center">
        <p className="heading-5 text-white mt-5 font-nunito">
          Welcome To The Team. We’re glad to have you here.
        </p>
        <div className="d-grid gap-2 d--flex justify-content-end">
          <button
            className="btn btn-primary text-white rounded-pill mt-3 font-nunito"
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
