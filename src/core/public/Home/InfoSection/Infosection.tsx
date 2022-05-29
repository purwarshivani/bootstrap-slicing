import React from "react";

const Infosection = () => {
  return (
    <section className="main my-5 pt-5">
      <div className="row justify-content-end align-items-center">
        <div className="col-md-5 sm-3">
          <h5 className="mb-4 font-nunito   strong">
            Lorem ipsum dolor sit amet
          </h5>
          <p className="font-roboto small">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit qui ratione voluptatem sequi nesciunt. Neque porro quisquam
            est, qui dolorem.
          </p>
        </div>
        <div className="col-1" />
        <div className="col-md-5">
          <img
            className="info-image"
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwYW5kJTIwY29mZmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Infosection;
