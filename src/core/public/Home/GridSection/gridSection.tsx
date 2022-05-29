import React from "react";

const Grids = () => {
  return (
    <section className="main">
      <h5 className="heading-5 font-roboto text-black">Grid</h5>

      <div className="row g-2 mt-2 mb-5 ">
        <div className="col-sm-3 small">
          <div className=" p-3 border  border border-primary d-flex flex-column justify-content-center align-items-center  h-100">
            <div className="d-flex align-items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle "
                style={{ height: "32px", width: "32px", marginRight: "10px" }}
              />

              <div className="d-flex flex-column text-black ">
                <p className="font-semi-small font-semi-bold">
                  Ram Bahadur Shrestha
                </p>
                <p
                  className="text-secondary text-uppercase"
                  style={{ fontSize: "10px" }}
                >
                  CEO
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="p-3 border bg-light  border-primary">
            <div className="d-flex flex-column">
              <p className="text-dark font-roboto strong">
                Pariatur ea exercitation laborum aliquip occaecat mollit
                voluptate in enim
              </p>
              <p className=" font-roboto small mt-3">
                Magna nisi voluptate tempor eiusmod ad labore ea ad laboris
                labore. In magna cupidatat mollit ex deserunt duis magna est.
                Sit ea sunt cillum adipisicing Lorem labore proident eiusmod do
                laborum enim consectetur.
              </p>
              <p className="font-small text-secondary text-right mt-3">
                08/07/2021
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="p-3  h-100 border  border border-primary d-flex flex-column justify-content-between">
            <p className="font-small text-secondary ">08/07/2021</p>
            <p className="font-small text-body text-right ">01:30pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grids;
