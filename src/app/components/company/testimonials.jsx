import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";
import SectionClients2 from "../../sections/home/index2/section-clients2";

function TestimonialsPage() {
  return (
    <>
      <Banner _data={bannerData.testimonials} />

      <div className="section-full p-t100 p-b0 bg-white mobile-page-padding">
        {/* TESTIMONIAL START */}
        <div className="container">
          <div className="section-content">
            {/* TITLE START */}
            <div className="section-head center">
              <div className="sx-head-s-title">Our Testimonials</div>
              <div className="sx-head-l-title">
                <h2 className="sx-title">What Our Clients Say?</h2>
              </div>
            </div>
            {/* TITLE END */}
            <div className="masonry-outer mfp-gallery news-grid clearfix row">
              {/* COLUMNS 1 */}
              <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                <div className="testimonial-3  hover-animation-1 sx-bg-light">
                  <div className="testimonial-detail">
                    <div className="testimonial-user-info">
                      <span className="testimonial-position">
                        CEO Of MerriView
                      </span>
                      <h4 className="testimonial-name">Edward</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      DevRolin turned our app idea into a sleek reality! Their
                      team's expertise and dedication made our project seamless
                      and impressive.
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-quote sx-text-primary">
                      <i className="flaticon-quote" />
                    </div>
                    <ul className="sx-rating-st1">
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                    </ul>
                    <span className="sx-review-count">(5 Stars)</span>
                  </div>
                </div>
              </div>
              {/* COLUMNS 2 */}
              <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                <div className="testimonial-3  hover-animation-1 sx-bg-light">
                  <div className="testimonial-detail">
                    <div className="testimonial-user-info">
                      <span className="testimonial-position">IT Director</span>
                      <h4 className="testimonial-name">John M.</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      DevRolin's AI insights revolutionized our data strategy,
                      boosting efficiency and uncovering new growth
                      opportunities. Exceptional service!
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-quote sx-text-primary">
                      <i className="flaticon-quote" />
                    </div>
                    <ul className="sx-rating-st1">
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                    </ul>
                    <span className="sx-review-count">(5 Stars)</span>
                  </div>
                </div>
              </div>
              {/* COLUMNS 3 */}
              <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                <div className="testimonial-3  hover-animation-1 sx-bg-light">
                  <div className="testimonial-detail">
                    <div className="testimonial-user-info">
                      <span className="testimonial-position">
                        Marketing Manager
                      </span>
                      <h4 className="testimonial-name">Emily Peaches</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Impressed with how DevRolin transformed our outdated
                      systems into a streamlined powerhouse. Highly recommend
                      their tailored solutions!
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-quote sx-text-primary">
                      <i className="flaticon-quote" />
                    </div>
                    <ul className="sx-rating-st1">
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                    </ul>
                    <span className="sx-review-count">(5 Stars)</span>
                  </div>
                </div>
              </div>
              {/* COLUMNS 4 */}
              <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                <div className="testimonial-3  hover-animation-1 sx-bg-light">
                  <div className="testimonial-detail">
                    <div className="testimonial-user-info">
                      <span className="testimonial-position">
                        Business Owner
                      </span>
                      <h4 className="testimonial-name">Delilah Brooklyn</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      From concept to execution, DevRolin delivered a web app
                      that exceeded our expectations. Their attention to detail
                      and support were outstanding.
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-quote sx-text-primary">
                      <i className="flaticon-quote" />
                    </div>
                    <ul className="sx-rating-st1">
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                    </ul>
                    <span className="sx-review-count">(5 Stars)</span>
                  </div>
                </div>
              </div>
              {/* COLUMNS 5 */}
              <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                <div className="testimonial-3  hover-animation-1 sx-bg-light">
                  <div className="testimonial-detail">
                    <div className="testimonial-user-info">
                      <span className="testimonial-position">
                        Director Operations
                      </span>
                      <h4 className="testimonial-name">Lisa Howard</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      DevRolin seamlessly integrated our existing platforms,
                      enhancing our workflow and productivity. Their solutions
                      are truly customized and effective.
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-quote sx-text-primary">
                      <i className="flaticon-quote" />
                    </div>
                    <ul className="sx-rating-st1">
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                    </ul>
                    <span className="sx-review-count">(5 Stars)</span>
                  </div>
                </div>
              </div>
              {/* COLUMNS 6 */}
              <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                <div className="testimonial-3  hover-animation-1 sx-bg-light">
                  <div className="testimonial-detail">
                    <div className="testimonial-user-info">
                      <span className="testimonial-position">COO</span>
                      <h4 className="testimonial-name">Michael Shawn</h4>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Choosing DevRolin was the best decision for our software
                      needs. Their team's proactive approach and responsive
                      support ensured our project's success.
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-quote sx-text-primary">
                      <i className="flaticon-quote" />
                    </div>
                    <ul className="sx-rating-st1">
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-star" />
                        </span>
                      </li>
                    </ul>
                    <span className="sx-review-count">(5 Stars)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TESTIMONIAL END */}
      </div>

      {/* <SectionClients2 /> */}
    </>
  );
}

export default TestimonialsPage;
