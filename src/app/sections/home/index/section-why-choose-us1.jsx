import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionWhyChooseUs1() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover"
        style={{
          backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})`,
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Why Choose Us</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">
                Innovative Solutions, Exceptional Results
              </h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-icon-bx-wrap">
              <div className="row">
                {/* Block one */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-icon-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon ">
                        <span className="sx-text-primary">
                          <i className="flaticon-data" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <NavLink to="/services/detail">
                          <h4 className="sx-tilte">Experience and Expertise</h4>
                        </NavLink>
                        <p>
                          Our team comprises seasoned professionals who have
                          successfully delivered many different projects for
                          clients across various sectors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Two */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-icon-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon ">
                        <span className="sx-text-primary">
                          <i className="flaticon-programmer" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <NavLink to="/services/detail">
                          <h4 className="sx-tilte">Tailored Solutions</h4>
                        </NavLink>
                        <p>
                          Whether you're looking to streamline operations,
                          enhance user experiences, or drive growth, we have the
                          tools and expertise to craft solutions that align with
                          your strategic goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Three */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-icon-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon ">
                        <span className="sx-text-primary">
                          <i className="flaticon-positive-review" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <NavLink to="/services/detail">
                          <h4 className="sx-tilte">Innovation at the Core</h4>
                        </NavLink>
                        <p>
                          We stay ahead of the curve by leveraging the latest
                          technologies and best practices to deliver
                          cutting-edge solutions. Our commitment to innovation
                          ensures that your business remains competitive.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Four */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-icon-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon ">
                        <span className="sx-text-primary">
                          <i className="flaticon-profit" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <NavLink to="/services/detail">
                          <h4 className="sx-tilte">Client Centric Approach</h4>
                        </NavLink>
                        <p>
                          From initial consultation to ongoing support, we are
                          dedicated to providing unparalleled service and
                          support every step of the way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Five */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-icon-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon ">
                        <span className="sx-text-primary">
                          <i className="flaticon-chart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <NavLink to="/services/detail">
                          <h4 className="sx-tilte"> Quality</h4>
                        </NavLink>
                        <p>
                          Quality is non-negotiable. We adhere to rigorous
                          quality standards and industry best practices to
                          ensure that our solutions are robust
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block SIx */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-icon-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon ">
                        <span className="sx-text-primary">
                          <i className="flaticon-parking" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <NavLink to="/services/detail">
                          <h4 className="sx-tilte">Trusted Partner</h4>
                        </NavLink>
                        <p>
                          When you choose DevRolin, you're choosing a trusted
                          partner committed to your success. That will hold your
                          hand every step of the way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWhyChooseUs1;
