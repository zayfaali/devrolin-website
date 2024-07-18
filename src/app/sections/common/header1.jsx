import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { loadScript } from "../../../globals/constants";
import { useEffect } from "react";

function Header1() {
  const [isActive, setIsActive] = useState(false);

  function toggleNavClass() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    loadScript("js/mobilenav.js");
  });

  return (
    <>
      <header
        className={
          "header-style1 site-header  mobile-sider-drawer-menu " +
          (isActive ? "active" : "")
        }
      >
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container clearfix">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <NavLink to="/index">
                    <ItodoImage
                      src="images/Logo.png"
                      alt=""
                      style={{
                        width: "1000px",
                        height: "auto",
                        transform: "scale(2)",
                        position: "relative",
                        top: "-5px",
                        left: "25px",
                      }}
                    />
                  </NavLink>
                </div>
              </div>
              {/* NAV Toggle Button */}
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                className="navbar-toggler collapsed"
                onClick={toggleNavClass}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>
              {/* EXTRA NAV */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <ul className="list-unstyled social-bx d-flex flex-wrap align-content-center">
                    <li>
                      <a href="https://web.facebook.com/profile.php?id=61561865430556">
                        <i className="feather-facebook" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="feather-twitter" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/devrolin/">
                        <i className="feather-linkedin" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/dev.rolin/?hl=en">
                        <i className="feather-instagram" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* EXTRA Nav */}
              {/* MAIN NAVIGATION */}
              <div className="header-nav navbar-collapse collapse d-flex justify-content-center collapse ">
                <ul className=" nav navbar-nav ">
                  <li className="active">
                    <NavLink to="/index">Home</NavLink>
                    {/* <ul className="sub-menu">
                      <li>
                        <NavLink to="/index">Home-1</NavLink>
                      </li>
                      <li>
                        <NavLink to="/index2">Home-2</NavLink>
                      </li>
                      <li>
                        <NavLink to="/index3">Home-3</NavLink>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <NavLink to="/about-us">Company</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/about-us">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/faq">Faq Page</NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="/gallery">Gallery</NavLink>
                      </li> */}
                      {/* <li>
                        <NavLink to="/icons">Icons</NavLink>
                      </li> */}
                      <li>
                        <NavLink to="/testimonials">Testimonials</NavLink>
                      </li>
                      <li>
                        <NavLink to="/why-choose-us">Why Choose Us</NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                      </li> */}
                      <li>
                        <NavLink to="/team">Team</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/mission">IT Solutions</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/mission">Mission &amp; Vision</NavLink>
                      </li>
                      <li>
                        <NavLink to="/services">Services</NavLink>
                      </li>

                      {/* <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                      </li> */}
                    </ul>
                  </li>

                  <li>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header1;
