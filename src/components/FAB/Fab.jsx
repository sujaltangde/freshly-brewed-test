import React from "react";
import "./Fab.css";
import { useState } from "react";

export const Fab = () => {
  const [toggle, setToggle] = useState(false);
  const [navToggle, setNavToggle] = useState({
    reportAnIssue: false,
    shareFeedback: false,
    giveSuggestion: false,
    contactUs: false,
  });

  const isAnyNavTrue = () => {
    if (
      navToggle.reportAnIssue ||
      navToggle.shareFeedback ||
      navToggle.giveSuggestion ||
      navToggle.contactUs
    ) {
      return true;
    } else {
      return false;
    }
  };

  const setNavTrue = (name) => {
    setNavToggle({
      ...navToggle,
      [name]: true,
    });
  };

  const fabClose = () => {
    setToggle(false);
    setNavToggle({
      reportAnIssue: false,
      shareFeedback: false,
      giveSuggestion: false,
      contactUs: false,
    });
  };

  const selectForm = (name) => {
    const newNavToggle = {};
    Object.keys(navToggle).forEach((key) => {
      newNavToggle[key] = false;
    });
    newNavToggle[name] = true;
    setNavToggle(newNavToggle);
  };

  return (
    <>
      <div className="fabDiv">
        {toggle && !isAnyNavTrue() && (
          <div className="fabDivInner">
            <button>
              <img
                src="/images/reportAnIssue1.png"
                onClick={() => setNavTrue("reportAnIssue")}
                className="fabNav1"
                alt=""
              />
            </button>
            <button>
              <img
                src="/images/shareFeedback1.png"
                onClick={() => setNavTrue("shareFeedback")}
                className="fabNav1"
                alt=""
              />
            </button>
            <button>
              <img
                src="/images/giveSuggestion1.png"
                onClick={() => setNavTrue("giveSuggestion")}
                className="fabNav1"
                alt=""
              />
            </button>
            <button>
              <img
                src="/images/contactUs1.png"
                onClick={() => setNavTrue("contactUs")}
                className="fabNav1 "
                alt=""
              />
            </button>
          </div>
        )}
      </div>

      {toggle && isAnyNavTrue() && (
        <div className="fabFormsDiv">
          <div className="bg-white fixed right-12 bottom-32 w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aperiam facere voluptates distinctio aut voluptatum quos cumque.
            Nesciunt ipsum inventore eaque saepe impedit? Ad deserunt eaque
            deleniti nesciunt hic itaque.
          </div>
          <>
            {navToggle.contactUs ? (
              <button>
                <img
                  src="/images/contactUsSelected.png"
                  className="fabNav1 "
                  alt=""
                />
              </button>
            ) : (
              <button onClick={() => selectForm("contactUs")}>
                <img
                  src="/images/contactUs2nd.png"
                  className="fabNav1 "
                  alt=""
                />
              </button>
            )}
          </>

          <>
            {navToggle.giveSuggestion ? (
              <button>
                <img
                  src="/images/suggestionSelected.png"
                  className="fabNav1"
                  alt=""
                />
              </button>
            ) : (
              <button onClick={() => selectForm("giveSuggestion")}>
                <img
                  src="/images/suggestion2nd.png"
                  className="fabNav1"
                  alt=""
                />
              </button>
            )}
          </>
          <>
            {navToggle.shareFeedback ? (
              <button>
                <img
                  src="/images/feedbackSelected.png"
                  className="fabNav1"
                  alt=""
                />
              </button>
            ) : (
              <button onClick={() => selectForm("shareFeedback")}>
                <img src="/images/feedback2nd.png" className="fabNav1" alt="" />
              </button>
            )}
          </>
          <>
            {navToggle.reportAnIssue ? (
              <button>
                <img
                  src="/images/reportIssueSelected.png"
                  className="fabNav1"
                  alt=""
                />
              </button>
            ) : (
              <button onClick={() => selectForm("reportAnIssue")}>
                <img
                  src="/images/reportIssue2nd.png"
                  className="fabNav1"
                  alt=""
                />
              </button>
            )}
          </>
        </div>
      )}

      <button className="fab">
        {toggle ? (
          <>
            <img
              src="/images/fabClose1.png"
              onClick={() => fabClose()}
              className="fabClose1 "
              alt=""
            />
            {/* <img
            src="/images/fabCloseHover.png"
            onClick={() => fabClose()}
            className="fabClose1 "
            alt=""
          /> */}
          </>
        ) : (
          <>
            <img
              src="/images/fabOpen1.png"
              onClick={() => setToggle(true)}
              className="fabOpen1"
              alt=""
            />
            {/* <img
            src="/images/fabOpenHover.png"
            onClick={() => setToggle(true)}
            className="fabOpen1"
            alt=""
            /> */}
          </>
        )}
      </button>
    </>
  );
};
