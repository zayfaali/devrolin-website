import ItodoImage from "../../../elements/itodo-img";

function GeneralFAQContent() {
  return (
    <>
      <div className="aon-faq-content">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="sx-acdn-style-1-section">
              <div className="accordion sx-acdn-style-1" id="sf-faq-accordion">
                {/*One*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ1"
                    aria-expanded="false"
                  >
                    What services does DevRolin offer?
                  </button>
                  <div
                    id="FAQ1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion"
                  >
                    <div className="accordion-body">
                      At DevRolin, we offer a comprehensive range of IT services
                      including custom software development, mobile app
                      development, web development, cloud solutions, IT
                      consulting, and technical support. We cater to businesses
                      of all sizes and industries, providing tailored solutions
                      to meet your unique needs.
                    </div>
                  </div>
                </div>
                {/*Two*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ2"
                    aria-expanded="true"
                  >
                    Who are your typical clients?
                  </button>
                  <div
                    id="FAQ2"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#sf-faq-accordion"
                  >
                    <div className="accordion-body">
                      Our clients range from startups and small businesses to
                      large enterprises across various industries, including
                      finance, healthcare, education, retail, and more. We are
                      dedicated to helping businesses of all sizes achieve their
                      goals through innovative technology solutions.
                    </div>
                  </div>
                </div>
                {/*Three*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ3"
                    aria-expanded="false"
                  >
                    How can I contact customer support?
                  </button>
                  <div
                    id="FAQ3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion"
                  >
                    <div className="accordion-body">
                      You can reach our customer support team through multiple
                      channels. You can email us at support@devrolin.com, or use
                      the live chat feature on our website. Our support team is
                      available 24/7 to assist you with any inquiries or issues.
                    </div>
                  </div>
                </div>
                {/*Four*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ4"
                    aria-expanded="false"
                  >
                    Where are you located?
                  </button>
                  <div
                    id="FAQ4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion"
                  >
                    <div className="accordion-body">
                      Our headquarters are located at Houston, Texas, USA. Feel
                      free to visit our contact page for more detailed
                      information on our locations and how to reach us.
                    </div>
                  </div>
                </div>
                {/*Five*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ5"
                    aria-expanded="false"
                  >
                    What is your pricing model?
                  </button>
                  <div
                    id="FAQ5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion"
                  >
                    <div className="accordion-body">
                      Our pricing model is flexible and tailored to the specific
                      needs of each project. We offer competitive rates for
                      fixed-price projects, hourly billing, and retainer
                      agreements for ongoing support. Contact us for a
                      personalized quote based on your project requirements.
                    </div>
                  </div>
                </div>
                {/*Six*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ6"
                    aria-expanded="false"
                  >
                    What sets DevRolin apart from other IT service providers?
                  </button>
                  <div
                    id="FAQ6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion"
                  >
                    <div className="accordion-body">
                      At DevRolin, we distinguish ourselves through our
                      commitment to innovation, personalized solutions, and
                      exceptional customer service. Our team of experts
                      collaborates closely with clients to understand their
                      unique challenges and deliver tailored solutions that
                      drive business growth. We pride ourselves on our
                      transparency, integrity, and a proven track record of
                      success across diverse industries. Our client-centric
                      approach ensures that we not only meet but exceed your
                      expectations, making us a trusted partner in your digital
                      transformation journey.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="aon-faq-1-media">
              <ItodoImage src="images/faq-img-1.jpg" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HelpFAQContent() {
  return (
    <>
      <div className="aon-faq-content">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="sx-acdn-style-1-section">
              <div
                className="accordion sx-acdn-style-1"
                id="sf-faq-accordion-1"
              >
                {/*One*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ1-1"
                    aria-expanded="false"
                  >
                    How do I install your software?
                  </button>
                  <div
                    id="FAQ1-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion-1"
                  >
                    <div className="accordion-body">
                      Download the installer from our website, run it, and
                      follow the on-screen instructions. Enter your license key
                      when prompted, complete the installation, and restart your
                      system if necessary. For detailed guidance, refer to our
                      installation guide available in the Support section.
                    </div>
                  </div>
                </div>
                {/*Two*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ2-1"
                    aria-expanded="true"
                  >
                    What should I do if I encounter a technical issue?
                  </button>
                  <div
                    id="FAQ2-1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#sf-faq-accordion-1"
                  >
                    <div className="accordion-body">
                      Restart the software or your device, and check our online
                      help center for troubleshooting tips. If the issue
                      persists, contact our technical support team via phone,
                      email, or live chat with details of the problem, including
                      any error messages.
                    </div>
                  </div>
                </div>
                {/*Three*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ3-1"
                    aria-expanded="false"
                  >
                    Are there user guides or tutorials available?
                  </button>
                  <div
                    id="FAQ3-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion-1"
                  >
                    <div className="accordion-body">
                      Yes, comprehensive user guides and tutorials are available
                      on our website under the Support section. We also offer
                      video tutorials and webinars to help you maximize the
                      benefits of our software.
                    </div>
                  </div>
                </div>
                {/*Four*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ4-1"
                    aria-expanded="false"
                  >
                    How do I update my software to the latest version?
                  </button>
                  <div
                    id="FAQ4-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion-1"
                  >
                    <div className="accordion-body">
                      Open the software, go to the Help or Settings menu, and
                      select Check for Updates. Follow the prompts to download
                      and install any available updates, then restart the
                      software to complete the process.
                    </div>
                  </div>
                </div>
                {/*Five*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ5-1"
                    aria-expanded="false"
                  >
                    What are the system requirements for your software?
                  </button>
                  <div
                    id="FAQ5-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion-1"
                  >
                    <div className="accordion-body">
                      System requirements vary by software but generally include
                      a supported OS, a minimum processor speed, adequate RAM,
                      and available storage space. Detailed requirements are
                      listed on the product page of our website.
                    </div>
                  </div>
                </div>
                {/*Six*/}
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FAQ6-1"
                    aria-expanded="false"
                  >
                    How do I back up my data?
                  </button>
                  <div
                    id="FAQ6-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#sf-faq-accordion-1"
                  >
                    <div className="accordion-body">
                      Open the software, navigate to the Settings or Backup
                      menu, and select Backup Data. Choose a location to save
                      the backup file and click Start Backup. Regularly backing
                      up your data is recommended to prevent data loss.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="aon-faq-1-media">
              <ItodoImage src="images/faq-img-2.jpg" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionFAQContent() {
  return (
    <>
      <div className="tab-content">
        {/*1*/}
        <div className="tab-pane fade show active" id="day_1" role="tabpanel">
          <GeneralFAQContent />
        </div>
        {/*2*/}
        <div className="tab-pane fade" id="day_2" role="tabpanel">
          <HelpFAQContent />
        </div>
      </div>
    </>
  );
}

export default SectionFAQContent;
