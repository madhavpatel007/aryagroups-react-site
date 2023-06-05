import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import { getFunctions, httpsCallable } from "firebase/functions";

const initialState = {
  name: "",
  email: "",
  message: "",
  phoneNumber: "",
  designation: "",
  resume: "",
};
export const Career = (props) => {
  const [{ name, email, message, phoneNumber, designation, resume }, setState] =
    useState(initialState);
  const [errors, setErrors] = useState("");
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    if (e.target.files[0]?.type !== "application/pdf") {
      setErrors("Only PDF files are allowed");
      toast.error("Only PDF files are allowed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (e.target.files[0]?.size > 2 * 1024 * 1024) {
      setErrors("File size exceeds the limit of 2MB");
      toast.error("File size exceeds the limit of 2MB", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setState((prevState) => ({ ...prevState, resume: e.target.files[0] }));
    }
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors) {
      console.log(name, email, phoneNumber, designation, message, resume);
    }
    const functions = getFunctions();
    const userResponseSubmitEmail = httpsCallable(
      functions,
      "sendEmail"
    )({
      from: process.env.REACT_APP_SMTP_EMAIL,
      to: process.env.REACT_APP_SMTP_EMAIL,
      subject: `Career Email from ${email}`,
      text: message,
      attachments: [
        {
          filename: file.name,
          path: file.webkitRelativePath,
        },
      ],
    });
    userResponseSubmitEmail()
      .then((result) => {
        console.log(result.data.output);
      })
      .catch((error) => {
        console.log(`error: ${JSON.stringify(error)}`);
      });

    const userConfirmationSubmitEmail = httpsCallable(
      functions,
      "sendEmail"
    )({
      from: process.env.REACT_APP_SMTP_EMAIL,
      to: email,
      subject: "Message From Arya Groups",
      text: "Your response has been submitted to Arya Groups successfully.",
    });
    userConfirmationSubmitEmail()
      .then((result) => {
        console.log(result.data.output);
      })
      .catch((error) => {
        console.log(`error: ${JSON.stringify(error)}`);
      });
  };

  return (
    <div id="career">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Career</h2>
              <p>Build your career and grow yourself.</p>
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      className="form-control"
                      placeholder="Designation"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      className="form-control"
                      placeholder="Upload Resume"
                      required
                      onChange={handleFileUpload}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
