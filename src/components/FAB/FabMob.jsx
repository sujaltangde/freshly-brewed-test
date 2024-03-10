import React, { useState } from "react";

export const FabMob = () => {
  const [toggle, setToggle] = useState(false);
  const [navToggle, setNavToggle] = useState({
    reportAnIssue: false,
    shareFeedback: false,
    giveSuggestion: false,
    contactUs: false,
  });

  const fabClose = () => {
    setToggle(false);
    setNavToggle({
      reportAnIssue: false,
      shareFeedback: false,
      giveSuggestion: false,
      contactUs: false,
    });
  };

  const setNavTrue = (name) => {
    setNavToggle({
      ...navToggle,
      [name]: true,
    });
  };

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
      {toggle && (
        <div className="bg-black w-full fixed top-0 opacity-75 min-h-screen"></div>
      )}

      <div className="md:hidden flex">
        {toggle && isAnyNavTrue() && (
          <>
            <div className="fixed bottom-96 right-3 flex gap-1 items-center justify-center  ">
              {navToggle.reportAnIssue ? (
                <>
                  <div>
                    <img
                      className="w-16 "
                      src="/images/reportIssueSelected.png"
                      alt=""
                    />

                    <div className="bg-white w-full right-0 rounded-3xl min-h-full fixed">
                      <p className="py-4 px-4 text-center border-b border-gray-300 mx-4">
                        Let us know about the issue you are facing right now!
                      </p>

                      <div></div>
                    </div>
                  </div>
                </>
              ) : (
                <img
                  onClick={() => selectForm("reportAnIssue")}
                  className="w-14 "
                  src="/images/reportIssue2nd.png"
                  alt=""
                />
              )}

              {navToggle.shareFeedback ? (
                <div>
                  <img
                    className="w-16"
                    src="/images/feedbackSelected.png"
                    alt=""
                  />
                  <div className="bg-white w-full right-0 rounded-3xl min-h-full fixed">
                    <p className="py-4 px-4 text-center border-b border-gray-300 mx-4">
                      Let us know your Feedback about us!
                    </p>

                    <div></div>
                  </div>
                </div>
              ) : (
                <img
                  onClick={() => selectForm("shareFeedback")}
                  className="w-14"
                  src="/images/feedback2nd.png"
                  alt=""
                />
              )}
              {navToggle.giveSuggestion ? (
                <div>
                  <img
                    className="w-16"
                    src="/images/suggestionSelected.png"
                    alt=""
                  />

                  <div className="bg-white w-full right-0 rounded-3xl min-h-full fixed">
                    <p className="py-4 px-4 text-center border-b border-gray-300 mx-4">
                      Share your suggestions with us for a chance to earn
                      rewards!
                    </p>

                    <div></div>
                  </div>
                </div>
              ) : (
                <img
                  className="w-14"
                  onClick={() => selectForm("giveSuggestion")}
                  src="/images/suggestion2nd.png"
                  alt=""
                />
              )}
              {navToggle.contactUs ? (
                <div>
                     <img
                  className="w-16 "
                  src="/images/contactUsSelected.png"
                  alt=""
                />
                    <div className="bg-white w-full right-0 rounded-3xl min-h-full fixed">
                    <p className="py-4 px-4 text-center border-b border-gray-300 mx-4">
                      Let us know what your queries are!
                    </p>

                    <div></div>
                  </div>
                </div>
               
              ) : (
                <img
                  className="w-14"
                  onClick={() => selectForm("contactUs")}
                  src="/images/contactUs2nd.png"
                  alt=""
                />
              )}
              <img
                src="/images/fabClose1.png"
                onClick={() => fabClose()}
                className="w-14 "
                alt=""
              />
            </div>
          </>
        )}

        {toggle ? (
          <>
            {!isAnyNavTrue() && (
              <div className="fixed bottom-24 right-4 flex gap-3 items-end justify-center flex-col mr-1">
                <img
                  onClick={() => setNavTrue("reportAnIssue")}
                  className="w-52"
                  src="/images/reportAnIssue1.png"
                  alt=""
                />
                <img
                  onClick={() => setNavTrue("shareFeedback")}
                  className="w-52"
                  src="/images/shareFeedback1.png"
                  alt=""
                />
                <img
                  onClick={() => setNavTrue("giveSuggestion")}
                  className="w-52 "
                  src="/images/giveSuggestion1.png"
                  alt=""
                />
                <img
                  onClick={() => setNavTrue("contactUs")}
                  className="w-44"
                  src="/images/contactUs1.png"
                  alt=""
                />
              </div>
            )}
            {!isAnyNavTrue() && (
              <img
                src="/images/fabClose1.png"
                onClick={() => fabClose()}
                className="w-16 right-4 cursor-pointer bottom-7 fixed"
                alt=""
              />
            )}
          </>
        ) : (
          <>
            <img
              src="/images/mobOpen.png"
              onClick={() => setToggle(!toggle)}
              className="w-16 right-4 cursor-pointer bottom-7 fixed"
              alt=""
            />
          </>
        )}
      </div>
    </>
  );
};
