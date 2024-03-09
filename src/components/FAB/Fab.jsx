import React, { useEffect } from "react";
import "./Fab.css";
import { useState } from "react";

export const Fab = () => {
  let isLogin = false;

  const [toggle, setToggle] = useState(false);
  const [navToggle, setNavToggle] = useState({
    reportAnIssue: false,
    shareFeedback: false,
    giveSuggestion: false,
    contactUs: false,
  });

  const [reportAnIssueData, setReportAnIssue] = useState({}) ;
  const [reportAnIssueDataSubmit, setReportAnIssueSubmit] = useState(false) ;


  useEffect(()=>{
    setTimeout(()=>{
      setReportAnIssueSubmit(false)
    },2000)
  },[reportAnIssueDataSubmit])


  const handleReportAnIssueSubmit = (e)=>{
    e.preventDefault() ;
    
    console.log(reportAnIssueData)

    setToggle(false)
    
    setNavToggle({
      reportAnIssue: false,
      shareFeedback: false,
      giveSuggestion: false,
      contactUs: false,
    })
    setReportAnIssueSubmit(true)
    
  }


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
          {/* Issue */}
          {navToggle.reportAnIssue && (
            <div className="formDiv">
              <div className="formDiv-title">
                Let us know about the <span className="font-bold">Issue</span>{" "}
                you are facing right now!
              </div>
              <div className="divider"></div>

              <form onSubmit={handleReportAnIssueSubmit} className="formDiv-mainForm">
                <div className="formDiv-mainForm-div1">
                  <p className="dropdown-label">Choose a section</p>
                  {/* <img
                  src="/images/dropdownArrow.png"
                  className="dropdownArrow"
                  alt=""
                // /> */}
                  {/** <select className="dropdown" name="" id="">
                   <option value="">He</option>
                 </select> **/}

                  <select onChange={(e)=>{
                    setReportAnIssue({
                      ...reportAnIssueData,
                      selectValue: e.target.value
                    })
                  }} name="cars" className="dropdown" id="cars">
                    <option value="Interview Questions">
                      Interview Questions
                    </option>
                    <option value="Concept Cards">Concept Cards</option>
                    <option value="Practice Questions">
                      Practice Questions
                    </option>
                    <option value="Quizzes">Quizzes</option>
                  </select>
                </div>

                <div className="formDiv-mainForm-div2">
                  <p className="dropdown-label">
                    Describe the issue in detail{" "}
                    <span className="text-red-500">*</span>{" "}
                  </p>

                  <div className="textareaDiv">
                    <textarea
                      required
                      onChange={(e)=>{
                        setReportAnIssue({
                          ...reportAnIssueData,
                          message: e.target.value
                        })
                      }}
                      className="textArea"
                      placeholder="Write here..."
                    ></textarea>
                    <button className="attachBtn">
                      <img src="/images/clip.png" className="clip" alt="" />
                      Attach
                    </button>
                  </div>
                  {isLogin && (
                    <div className="email-div">
                      <p className="dropdown-label">
                        Enter your email to receive an update
                      </p>
                      <div>
                        <input
                        onChange={(e)=>{
                        
                          setReportAnIssue({
                            ...reportAnIssueData,
                            message: e.target.value
                          })
                        }}
                          type="text"
                          placeholder="Enter your Email"
                          className="email"
                        />
                      </div>
                    </div>
                  )}

                  <div type="submit" className="submitButtonDiv">
                    <button className="submitButton"  >Submit</button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Feedback */}
          {navToggle.shareFeedback && (
            <div className="formDiv">
              <div className="formDiv-title">
                Let us know your <span className="font-bold">Feedback</span>{" "}
                about us!
              </div>
              <div className="divider"></div>

              <div className="formDiv-mainForm">
                <div className="formDiv-mainForm-div2">
                  <div className="textareaDiv">
                    <textarea
                      required
                      className="textArea"
                      placeholder="Write here..."
                    ></textarea>
                    <button className="attachBtn">
                      <img src="/images/clip.png" className="clip" alt="" />
                      Attach
                    </button>
                  </div>
                  {isLogin && (
                    <div className="email-div">
                      <p className="dropdown-label">
                        Enter your email to receive an update
                      </p>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter your Email"
                          className="email"
                        />
                      </div>
                    </div>
                  )}

                  <div className="submitButtonDiv">
                    <button className="submitButton">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggestion */}
          {navToggle.giveSuggestion && (
            <div className="formDiv">
              <div className="formDiv-title">
                Share your <span className="font-bold">Suggestions</span> with
                us for a chance to earn rewards!
              </div>
              <div className="divider"></div>

              <div className="formDiv-mainForm">
                <div className="formDiv-mainForm-div1">
                  <p className="dropdown-label">Choose a section</p>
                  {/* <img
                 src="/images/dropdownArrow.png"
                 className="dropdownArrow"
                 alt=""
               // /> */}
                  {/** <select className="dropdown" name="" id="">
                  <option value="">He</option>
                </select> **/}

                  <select name="cars" className="dropdown" id="cars">
                    <option value="Interview Questions">
                      Interview Questions
                    </option>
                    <option value="Concept Cards">Concept Cards</option>
                    <option value="Practice Questions">
                      Practice Questions
                    </option>
                    <option value="Quizzes">Quizzes</option>
                  </select>
                </div>

                <div className="formDiv-mainForm-div2">
                  <p className="dropdown-label">
                    Describe the suggestion in detail{" "}
                    <span className="text-red-500">*</span>{" "}
                  </p>

                  <div className="textareaDiv">
                    <textarea
                      required
                      className="textArea"
                      placeholder="Write here..."
                    ></textarea>
                    <button className="attachBtn">
                      <img src="/images/clip.png" className="clip" alt="" />
                      Attach
                    </button>
                  </div>
                  {isLogin && (
                    <div className="email-div">
                      <p className="dropdown-label">
                        Enter your email to receive an update
                      </p>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter your Email"
                          className="email"
                        />
                      </div>
                    </div>
                  )}

                  <div className="submitButtonDiv">
                    <button className="submitButton">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Contact Us */}
          {navToggle.contactUs && (
            <div className="formDiv">
              <div className="formDiv-title">
                Let us know what your <span className="font-bold">queries</span>{" "}
                with us for are
              </div>
              <div className="divider"></div>

              <div className="formDiv-mainForm">
                <div className="formDiv-mainForm-div1">
                  <div className="">
                    <p className="dropdown-label">Your Name</p>
                    <input
                      type="text"
                      className="inputField"
                      placeholder="Enter your name"
                    />
                  </div>
                  {isLogin && (
                    <>
                      <div className="mt-4">
                        <p className="dropdown-label">Your Email</p>
                        <input
                          type="text"
                          className="inputField"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mt-4">
                        <p className="dropdown-label">Your Mobile number</p>
                        <input
                          type="text"
                          className="inputField"
                          placeholder="Enter your number"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="formDiv-mainForm-div2">
                  <p className="dropdown-label">
                    What would you like to ask?{" "}
                    <span className="text-red-500">*</span>{" "}
                  </p>

                  <div className="textareaDiv">
                    <textarea
                      required
                      className="textArea1"
                      placeholder="Write here..."
                    ></textarea>
                    <button className="attachBtn">
                      <img src="/images/clip.png" className="clip" alt="" />
                      Attach
                    </button>
                  </div>

                  <div className="submitButtonDiv1">
                    <button className="submitButton">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <>
            {navToggle.contactUs ? (
              <button>
                <img
                  src="/images/contactUsSelected.png"
                  className="fabNav1Selected "
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
                  className="fabNav1Selected"
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
                  className="fabNav1Selected"
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
                  className="fabNav1Selected"
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
{reportAnIssueDataSubmit && 

  <img src="/images/hoverMsg1.png" className="hoverMsg1" alt="" />
}

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
