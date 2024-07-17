import Banner from "../../sections/common/banner";
import ItodoImage from "../../elements/itodo-img";
import { bannerData } from "../../../globals/banner";
import { NavLink } from "react-router-dom";

function TeamPage() {
  return (
    <>
      <Banner _data={bannerData.team} />

      <div className="section-full p-t110 p-b80 sx-bg-light sx-ourteam-outer">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Our Team</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">Reach Out To Us</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="row sx-our-team-section">
              {/*One block*/}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team-2">
                  <div className="profile-image">
                    <ItodoImage src="images/our-team5/1.png" alt="" />
                    <div className="icons">
                      <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-dribbble" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                  <div className="figcaption">
                    <p>FOUNDER</p>
                    <h4 className="sx-title">
                      <NavLink to="/team">Zohaib Ijaz</NavLink>
                    </h4>
                  </div>
                </div>
              </div>
              {/*One two*/}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team-2">
                  <div className="profile-image">
                    <ItodoImage src="images/our-team5/2.png" alt="" />
                    <div className="icons">
                      <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-dribbble" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-behance" />
                      </a>
                    </div>
                  </div>
                  <div className="figcaption">
                    <p>Chief Executive Officer</p>
                    <h4 className="sx-title">
                      <NavLink to="/team">Mudassir Malik</NavLink>
                    </h4>
                  </div>
                </div>
              </div>
              {/*One three*/}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team-2">
                  <div className="profile-image">
                    <ItodoImage src="images/our-team5/3.png" alt="" />
                    <div className="icons">
                      <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-dribbble" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-behance" />
                      </a>
                    </div>
                  </div>
                  <div className="figcaption">
                    <p>Chief Technology Officer</p>
                    <h4 className="sx-title">
                      <NavLink to="/team">Muhammad Huzaifa Ali</NavLink>
                    </h4>
                  </div>
                </div>
              </div>
              {/*One Four*/}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team-2">
                  <div className="profile-image">
                    <ItodoImage src="images/our-team5/4.png" alt="" />
                    <div className="icons">
                      <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-dribbble" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-behance" />
                      </a>
                    </div>
                  </div>
                  <div className="figcaption">
                    <p>Chief Operations Officer</p>
                    <h4 className="sx-title">
                      <NavLink to="/team">Faiq Ahmed Shiekh</NavLink>
                    </h4>
                  </div>
                </div>
              </div>
              {/*One Five*/}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team-2">
                  <div className="profile-image">
                    <ItodoImage src="images/our-team5/5.png" alt="" />
                    <div className="icons">
                      <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-dribbble" />
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fa fa-behance" />
                      </a>
                    </div>
                  </div>
                  <div className="figcaption">
                    <p>Chief Information Officer</p>
                    <h4 className="sx-title">
                      <NavLink to="/team">Muhammad Bilal</NavLink>
                    </h4>
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

export default TeamPage;
