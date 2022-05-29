import React from "react";
import img1 from "../../../../assets/images/img1.png";
import img2 from "../../../../assets/images/img2.png";
import img3 from "../../../../assets/images/img3.png";
import img4 from "../../../../assets/images/img4.png";

const Gallery = () => {
  const imgae = [img1, img2, img3, img4];
  return (
    <section className="main">
      <h5 className="heading-5 font-semi-bold text-black">Gallery</h5>
      <div className="row row-cols-2 row-cols-lg-4 g-4 mb-5 mt-2">
        <div className="col">
          <img className="card-image" src={img1} />
        </div>
        <div className="col">
          <img className="card-image" src={img2} />
        </div>
        <div className="col">
          <img className="card-image" src={img3} />
        </div>
        <div className="col">
          <img className="card-image" src={img4} />
        </div>
        <div className="col">
          <img className="card-image" src={img3} />
        </div>
        <div className="col">
          <img className="card-image" src={img1} />
        </div>
        <div className="col">
          <img className="card-image" src={img4} />
        </div>
        <div className="col">
          <img className="card-image" src={img2} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
