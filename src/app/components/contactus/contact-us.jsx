import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";

function ContactUsPage() {
  return (
    <>
      <Banner _data={bannerData.contact} />

      {/* Contact us START */}
      <div className="section-full p-t110 p-b80 sx-bg-white sx-ourteam-outer ">
        <div className="container">
          {/* GOOGLE MAP & CONTACT FORM */}
          <div className="section-content">
            {/* CONTACT FORM*/}
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12  m-b30">
                <div className="contact-info">
                  {/* TITLE START */}
                  <div className="section-head left">
                    <div className="sx-head-s-title">Contact Us</div>
                    <div className="sx-head-l-title">
                      <h2 className="sx-title">
                        Got Ideas? Let's Make Tech Magic Happen!
                      </h2>
                    </div>
                  </div>
                  {/* TITLE END */}
                  <div className="row sx-contact-form-icon-bx">
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-telephone" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Phone
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            +971 522 347 966
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-email-2" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Mail
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            support@devrolin.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-map-location" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Location
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            Al Abraj Streets, Business Bay, Dubai
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-clock" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Office Time
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            Mon- Fri: 7.00 - 22.00
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            St-sun: 9.00 - 20.00
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 m-b30">
                <div className="contact-home1-right">
                  <div className="contact-home-1-form sx-bg-light">
                    <h4 className="sx-title">Get In Touch</h4>
                    <form
                      className="cons-contact-form2 form-transparent"
                      method="post"
                    >
                      <div className="input input-animate">
                        <input
                          type="text"
                          name="username"
                          id="name"
                          required
                          placeholder="Your Name"
                        />
                        <span className="spin" />
                      </div>
                      <div className="input input-animate">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder="Your Email"
                        />
                        <span className="spin" />
                      </div>
                      <div className="input input-animate">
                        <input
                          type="text"
                          name="phone"
                          id="Phone"
                          required
                          placeholder="Phone Number"
                        />
                        <span className="spin" />
                      </div>
                      <div className="input textarea input-animate">
                        <textarea
                          name="message"
                          id="message"
                          required
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                        <span className="spin" />
                      </div>
                      <div className="sx-btn-center text-center p-t10">
                        <button
                          type="submit"
                          className="site-button sx-btn-primary icon sx-btn-lg"
                        >
                          <i className="fa  fa-long-arrow-right" />
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us END */}
      <div className="gmap-outline map-grayscle">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.519758642402!2d55.274229899999995!3d25.1856887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682d8a9468f7%3A0x5eb73dd46aa3b4f!2sMarasi%20Dr%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1721295512832!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="itodomap"
        />
      </div>
    </>
  );
}

export default ContactUsPage;
