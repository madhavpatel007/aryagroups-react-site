import React from "react";
import ReadMore from "./readMore";
import { useNavigate } from "react-router-dom";

export const SoftwareDevelopment = (props) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/sw-development-details");
  };

  return (
    <div id="softwareDevelopment" className="text-center">
      <div className="overlay">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Software Development</h2>
          </div>
          <div className="col-md-10 col-md-offset-1 section-title">
            {/* {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-12 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>
                      <ReadMore>{d.text}</ReadMore>
                    </p>
                  </div>
                ))
              : "Loading..."} */}
            <p>
              {props?.data?.title}
            </p>
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
    </div>
  );
};
