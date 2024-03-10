import React from "react";
import "./Main.css";
import { Fab } from "../FAB/Fab";
import { FabMob } from "../FAB/FabMob";

export const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-inner-1">
          <div className="main-inner-1-div">
            <span>
              <img
                className="main-inner-1-arrow-image"
                src="/images/arrow-main.png"
                alt=""
              />
            </span>

            <span className="main-inner-1-text">Back to Questions</span>
          </div>
        </div>

        <div className="main-inner-2">
          <div className="main-inner-2-div">
            <div className="main-inner-2-box-1">
              <div className="box-div-1">
                <div className="box-div-1-item">
                  <div className="box-div-1-text">Design</div>
                  <div className="box-div-1-text">Technology</div>
                </div>

                <div className="box-1-image-1-div">
                  <img
                    className="box-1-image-1"
                    src="/images/startup.png"
                    alt=""
                  />
                  <span className="box-1-side-text">Startup</span>
                </div>
              </div>

              <div className="box-div-2">
                <div className="box-div-2-para-div">
                  <p className="box1-para-1">
                    A travel startup wants Amazon to pre-install their personal
                    travel agent bot on existing Amazon Echos. What is the value
                    of the partnership to the travel startup?{" "}
                  </p>
                  <p className="box1-para-2">
                    Lorem ipsum dolor sit amet consectetur. Orci elementum
                    aliquet nec viverra tincidunt ? Amet ullamcorper velit
                    tristique scelerisque donec sed viverra arcu. Amet arcu
                    vitae sit scelerisque ultrices magna cursus se?{" "}
                  </p>
                </div>
              </div>

              <div className="box-div-3">
                <div className="box-div-3-box-1">
                  <img
                    src="/images/eye.png"
                    className="box-div-3-box-1-image"
                    alt=""
                  />
                  <span>100 Views</span>
                </div>
                <div className="box-div-3-box-2">
                  <img
                    src="/images/info.png"
                    className="box-div-3-box-2-image"
                    alt=""
                  />
                  <span>How should you word your answer?</span>
                </div>
              </div>
            </div>

            <div className="answer-box">
              <div className="answers-text">Answers (23)</div>

              <div className="answerbox-right">
                <span className="sortby-text">Sort By:</span>
                <button className="dropdown-btn">
                  <span>Popular</span>{" "}
                  <img
                    className="dropdown-btn-img"
                    src="/images/dropdown.png"
                    alt=""
                  />{" "}
                </button>
              </div>
            </div>
            <div className="main-inner-2-box-2">
              <div className="inner-2-box-1">
                <div className="inner-2-box-1-left">
                  <img
                    className="inner-2-img-1"
                    src="/images/nav-profile.png"
                    alt=""
                  />

                  <div className="inner-2-box-1-div-1 ">
                    <p className="inner-2-box-1-div-1-text1">
                      <span className="inner-2-box-1-div-1-text-span">
                        Neha Bhat
                      </span>
                      (You)
                    </p>
                    <p className="inner-2-box-1-div-1-text2">Jun 27, 2023</p>
                  </div>
                </div>

                <div className="inner-2-box-1-right">
                  <img
                    className="inner-2-box-1-right-img"
                    src="/images/edit.png"
                    alt=""
                  />
                  <span className="inner-2-box-1-right-text">Edit</span>
                </div>
              </div>

              <div className="inner-2-box-2">
                Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum
                enim ornare feugi vitae. Eget proin aliquam blandit eget vitae
                erat fermentum lacus. Dignissim done mi vel fermentum. Id
                ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio
                egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam
                ridiculus ipsum interdum ut velit quam. Bibendum amet mi....
                Show more
              </div>

              <div className="inner-2-box-3">
                <div className="inner-2-box-3-item1">
                  <img
                    className="inner-2-box-3-item1-img"
                    src="/images/like.png"
                    alt=""
                  />
                  <span>Like</span>
                </div>

                <div className="inner-2-box-3-item2">
                  <img
                    src="/images/msg.png"
                    className="inner-2-box-3-item2-img"
                    alt=""
                  />

                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="inner-2-box-3-item2-input1"
                  />
                  <div className="inner-2-box-3-item2-input2">Post</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-mob md:hidden">
        <div className="main-mob-div1">Practice Interview Questions</div>
        <div className="main-mob-div2">
          <div className="main-mob-div2-text">
            Embark on an Exploration: 800 Questions Await!
          </div>

          <button className="filter-btn">
            <img src="/images/filter.png" className="filters-img" alt="" />
            <span>FILTERS</span>
          </button>
        </div>

        <div className="main-mob-div3">
          <div className="mob-filter-box1">
            <div></div>

            <div className="mob-filter-box1-div">
              <img src="/images/popularImg.png" className="popularImg" alt="" />
              <span className="mr-6">Popular</span>
            </div>

            <div>
              <img src="/images/dropdown.png" className="dropdown-mob" alt="" />
            </div>
          </div>
          <div className="mob-filter-box1">
            <div></div>

            <div className="mob-filter-box1-div">
              <div></div>
              <span>Complexity</span>
            </div>

            <div>
              <img src="/images/dropdown.png" className="dropdown-mob" alt="" />
            </div>
          </div>
          <div className="mob-filter-box1">
            <div></div>

            <div className="mob-filter-box1-div">
              <div></div>
              <span>Indutry Type</span>
            </div>

            <div>
              <img src="/images/dropdown.png" className="dropdown-mob" alt="" />
            </div>
          </div>
          <div className="mob-filter-box1">
            <div></div>

            <div className="mob-filter-box1-div">
              <div></div>
              <span>Indutry</span>
            </div>

            <div>
              <img src="/images/dropdown.png" className="dropdown-mob" alt="" />
            </div>
          </div>
          <div className="mob-filter-box1">
            <div></div>

            <div className="mob-filter-box1-div">
              <div></div>
              <span>Company Type </span>
            </div>

            <div>
              <img src="/images/dropdown.png" className="dropdown-mob" alt="" />
            </div>
          </div>
        </div>

        <div className="white-border"></div>

        <div className="post-box">
          <div className="post-box-div1">
            <div className="side-text-div1">Posted on 28 Jun 2023</div>

            <div className="side-mid-div1">
              <img src="/images/startup.png" className="side-img-div1" alt="" />
              <span>Startup</span>
            </div>
          </div>
          <div className="post-box-div2">
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup? A travel startup wants Amazon to
            pre-install their personal travel agent bot on existing Amazon
            Echos. What is the value of the partnership to the travel startup?
          </div>

          <div className="post-box-div-3">
            <div className="post-box-div-3-div">
              <div className="post-box-btn-blue">Design</div>
              <div className="post-box-btn-blue">UX</div>
            </div>

            <div className="post-box-btn-green">EASY</div>
          </div>
          <div className="post-box-div-4">
            <div className="post-box-div-4-greentext">
              <img src="/images/green-msg.png" className="post-box-div-4-msgimg" alt="" />
              <span>23 Answers</span>
            </div>

            <div className="post-box-div-4-text">
              <img
                src="/images/eye.png"
                className="post-box-div-4-img"
                alt=""
              />
              <span>100 Views</span>
            </div>
          </div>
        </div>
        <div className="post-box">
          <div className="post-box-div1">
            <div className="side-text-div1">Posted on 28 Jun 2023</div>

            <div className="side-mid-div1">
              <img src="/images/startup.png" className="side-img-div1" alt="" />
              <span>Startup</span>
            </div>
          </div>
          <div className="post-box-div2">
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup? A travel startup wants Amazon to
            pre-install their personal travel agent bot on existing Amazon
            Echos. What is the value of the partnership to the travel startup?
          </div>

          <div className="post-box-div-3">
            <div className="post-box-div-3-div">
              <div className="post-box-btn-blue">Design</div>
              <div className="post-box-btn-blue">UX</div>
            </div>

            <div className="post-box-btn-green">EASY</div>
          </div>
          <div className="post-box-div-4">
            <div className="post-box-div-4-greentext">
              <img src="/images/green-msg.png" className="post-box-div-4-msgimg" alt="" />
              <span>23 Answers</span>
            </div>

            <div className="post-box-div-4-text">
              <img
                src="/images/eye.png"
                className="post-box-div-4-img"
                alt=""
              />
              <span>100 Views</span>
            </div>
          </div>
        </div>
        <div className="post-box">
          <div className="post-box-div1">
            <div className="side-text-div1">Posted on 28 Jun 2023</div>

            <div className="side-mid-div1">
              <img src="/images/startup.png" className="side-img-div1" alt="" />
              <span>Startup</span>
            </div>
          </div>
          <div className="post-box-div2">
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup? A travel startup wants Amazon to
            pre-install their personal travel agent bot on existing Amazon
            Echos. What is the value of the partnership to the travel startup?
          </div>

          <div className="post-box-div-3">
            <div className="post-box-div-3-div">
              <div className="post-box-btn-blue">Design</div>
              <div className="post-box-btn-blue">UX</div>
            </div>

            <div className="post-box-btn-green">EASY</div>
          </div>
          <div className="post-box-div-4">
            <div className="post-box-div-4-greentext">
              <img src="/images/green-msg.png" className="post-box-div-4-msgimg" alt="" />
              <span>23 Answers</span>
            </div>

            <div className="post-box-div-4-text">
              <img
                src="/images/eye.png"
                className="post-box-div-4-img"
                alt=""
              />
              <span>100 Views</span>
            </div>
          </div>
        </div>



      </div>


      <div>

        <Fab/>
        <FabMob/>
      </div>
    </>
  );
};
