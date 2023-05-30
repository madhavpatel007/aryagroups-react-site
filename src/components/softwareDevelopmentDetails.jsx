import React, { useEffect, useState } from "react";

export const SoftwareDevelopmentDetails = (props) => {
  const [services, setServices] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [partnerWithUs, setPartnerWithUs] = useState([]);

  useEffect(() => {
    if (props?.data && props?.data?.services) {
      setServices(props?.data?.services);
    }
    if (props?.data && props?.data?.reasons) {
      setReasons(props?.data?.reasons);
    }
    if (props?.data && props?.data?.reasons) {
      setPartnerWithUs(props?.data?.whyPartnerWithUs);
    }
  }, [props?.data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="softwareDevelopmentDetail">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="rpo-detail-text">
              <h2>Software Development</h2>
              <p>{props.data ? props.data.intro : "loading..."}</p>
            </div>
          </div>
        </div>
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
            reasons.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-sm-6 col-xs-12"
                style={{ textAlign: "center" }}
              >
                {" "}
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="software-detail-text">
              <h2>Services We Offer</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="list-style">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                {services
                  ? services.map((item, index) => (
                      <li key={`${item}-${index}`}>{item}</li>
                    ))
                  : "loading"}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="rpo-detail-text">
              <h2>Why Partner With Us?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {partnerWithUs &&
            partnerWithUs.length > 0 &&
            partnerWithUs.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-sm-6 col-xs-12"
                style={{ textAlign: "center" }}
              >
                {" "}
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="rpo-detail-text">
              <h2>Here We Go!</h2>
              <p>{props.data ? props.data.hereWeGo : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
