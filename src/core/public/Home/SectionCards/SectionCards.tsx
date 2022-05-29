import React from "react";

const SectionCards = () => {
  return (
    <section className="main mt-2 mb-5">
      <h5 className="heading-6 font-roboto text-black">Section Card</h5>

      <div className="row">
        <div className="col-sm-3">
          <div className="card card-hover border-0">
            <div className="card-body">
              <h5 className="card-title">
                <div
                  className="rounded-circle bg-primary-light text-primary d-flex align-items-center justify-content-center top-2 margin-auto "
                  style={{ height: "60px", width: "60px", margin: "auto" }}
                >
                  <i className="ic-mail text-primary heading-7 fw-normal"></i>
                </div>
              </h5>
              <p className="card-text  small ">
                Consectetur culpa nostrud nostrud fugiat reprehenderit enim est
                ea do aliquip in laboris. Consectetur culpary lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-hover border-0">
            <div className="card-body">
              <h5 className="card-title">
                <div
                  className="rounded-circle bg-primary-light text-primary d-flex align-items-center justify-content-center top-2 margin-auto "
                  style={{ height: "60px", width: "60px", margin: "auto" }}
                >
                  <i className="ic-phone text-primary heading-4 fw-normal"></i>
                </div>
              </h5>
              <p className="card-text small">
                Consectetur culpa nostrud nostrud fugiat reprehenderit enim est
                ea do aliquip in laboris. Consectetur culpary lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-hover border-0">
            <div className="card-body">
              <h5 className="card-title">
                <div
                  className="rounded-circle bg-primary-light text-primary d-flex align-items-center justify-content-center top-2 margin-auto "
                  style={{ height: "60px", width: "60px", margin: "auto" }}
                >
                  <i className="ic-user text-primary heading-4 fw-normal"></i>
                </div>
              </h5>
              <p className="card-text small">
                Consectetur culpa nostrud nostrud fugiat reprehenderit enim est
                ea do aliquip in laboris. Consectetur culpary lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-hover border-0">
            <div className="card-body">
              <h5 className="card-title">
                <div
                  className="rounded-circle bg-primary-light text-primary d-flex align-items-center justify-content-center top-2 margin-auto "
                  style={{ height: "60px", width: "60px", margin: "auto" }}
                >
                  <i className="ic-location text-primary heading-4 fw-normal"></i>
                </div>
              </h5>
              <p className="card-text small">
                Consectetur culpa nostrud nostrud fugiat reprehenderit enim est
                ea do aliquip in laboris. Consectetur culpary lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
