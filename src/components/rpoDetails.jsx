import React, { useEffect, useState } from "react";
import { useAnalytics } from "../contexts/AnalyticsContext";

export const RpoDetails = (props) => {
  const [services, setServices] = useState([]);
  const [reasons, setReasons] = useState([]);

  const { printFirebaseAnalyticsLog } = useAnalytics();

  useEffect(() => {
    if (props?.data && props?.data?.services) {
      setServices(props?.data?.services);
    }
    if (props?.data && props?.data?.reasons) {
      setReasons(props?.data?.reasons);
    }
  }, [props?.data]);

  useEffect(() => {
    printFirebaseAnalyticsLog("RPO Details Page");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="rpoDetail">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="rpo-detail-text">
              <h2>Arya Groups RPO Solutions</h2>
              <p>{props.data ? props.data.intro : "loading..."}</p>
            </div>
          </div>
        </div>
        {services &&
          services.length > 0 &&
          services.map((item, index) => (
            <div className="row" key={index}>
              {index % 2 === 0 && (
                <div className="col-xs-12 col-md-6">
                  {" "}
                  <img src={item.img} className="img-responsive" alt="" />{" "}
                </div>
              )}
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>{item.title}</h2>
                  <p>{item.description ? item.description : "loading..."}</p>
                </div>
              </div>
              {index % 2 === 1 && (
                <div className="col-xs-12 col-md-6">
                  {" "}
                  <img src={item.img} className="img-responsive" alt="" />{" "}
                </div>
              )}
            </div>
          ))}
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="rpo-detail-text">
              <h2>Why Choose Arya Groups RPO Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {reasons &&
            reasons.length > 0 &&
            reasons.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 col-xs-12"
                style={{ textAlign: "center" }}
              >
                <div
                  className="rpoDetail-image"
                  style={{ textAlign: "-webkit-center" }}
                >
                  {" "}
                  <img src={item.img} alt="" />{" "}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
        <div className="row">
          {reasons &&
            reasons.length > 0 &&
            reasons.slice(4, 8).map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 col-xs-12"
                style={{ textAlign: "center" }}
              >
                {" "}
                <div
                  className="rpoDetail-image"
                  style={{ textAlign: "-webkit-center" }}
                >
                  {" "}
                  <img src={item.img} alt="" />{" "}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
