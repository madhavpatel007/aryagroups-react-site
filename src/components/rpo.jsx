import React from "react";
import { useNavigate } from "react-router-dom";

export const Rpo = (props) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/rpo-details");
  };

  return (
    <div id="rpo" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>RPO & Talent Partner</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        <button
          type="button"
          className="btn btn-custom btn-lg"
          onClick={() => goToDetails()}
        >
          See More
        </button>
      </div>
    </div>
  );
};
