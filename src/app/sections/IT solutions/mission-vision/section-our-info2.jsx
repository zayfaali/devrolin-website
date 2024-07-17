import ItodoImage from "../../../elements/itodo-img";

function SectionOurInfo2() {
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-bg-light sx-our-info-outer ">
        <div className="container">
          <div className="section-content">
            <div className="row sx-our-info-content-wrap">
              {/*One block*/}
              <div className="col-lg-4 col-md-4">
                <div className="sx-our-info-content">
                  <ul>
                    <li>
                      <div className="sx-our-info-content-list left">
                        <span className="sx-sub-title">Innovative</span>
                        <h3 className="sx-bx-title">
                          Cutting-edge mobile applications to drive growth
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sx-our-info-content-list left">
                        <span className="sx-sub-title">Responsive</span>
                        <h3 className="sx-bx-title">
                          Dynamic and responsive web applications for success.
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sx-our-info-content-list left">
                        <span className="sx-sub-title">Insights</span>
                        <h3 className="sx-bx-title">
                          Actionable AI insights to boost efficiency.
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sx-our-info-content-list left">
                        <span className="sx-sub-title">Analytics</span>
                        <h3 className="sx-bx-title">
                          Unlocking data’s full potential for impact.
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*One two*/}
              <div className="col-lg-4 col-md-4">
                <div className="sx-our-info-media-wrap">
                  <div className="sx-our-info-media">
                    <ItodoImage src="images/our-info.jpg" alt="image" />
                  </div>
                </div>
              </div>
              {/*One three*/}
              <div className="col-lg-4 col-md-4">
                <div className="sx-our-info-content">
                  <ul>
                    <li>
                      <div className="sx-our-info-content-list right">
                        <span className="sx-sub-title">Bespoke</span>
                        <h3 className="sx-bx-title">
                          Tailored software solutions for your unique needs.
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sx-our-info-content-list right">
                        <span className="sx-sub-title">Integration</span>
                        <h3 className="sx-bx-title">
                          Effortless integration with existing business systems.
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sx-our-info-content-list right">
                        <span className="sx-sub-title">Visibility</span>
                        <h3 className="sx-bx-title">
                          Strategic marketing to enhance brand visibility.
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sx-our-info-content-list right">
                        <span className="sx-sub-title">Satisfaction</span>
                        <h3 className="sx-bx-title">
                          Customized solutions ensuring client
                          satisfaction and success.
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOurInfo2;
