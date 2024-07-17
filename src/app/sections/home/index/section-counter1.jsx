import CountUp from "react-countup";

function SectionCounter1() {
  return (
    <>
      <div className="counter-blocks">
        <div className="row when-item-four">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="sx-count">
              <h2 className="sx-title">
                <span className="sx-cont-before">+</span>
                <span className="counter">
                  <CountUp end={12} duration={10} />
                </span>
                <span className="sx-cont-after"></span>
              </h2>
              <div className="sx-count-info">Our Active Member</div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="sx-count">
              <h2 className="sx-title">
                <span className="sx-cont-before">+</span>
                <span className="counter">
                  <CountUp decimals={0} end={50} duration={5} />
                </span>
                <span className="sx-cont-after"></span>
              </h2>
              <div className="sx-count-info">Our Total Projects</div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="sx-count">
              <h2 className="sx-title">
                <span className="sx-cont-before"></span>
                <span className="counter">
                  <CountUp end={9.8} duration={8} decimal={1} />
                </span>
                <span className="sx-cont-after">/10</span>
              </h2>
              <div className="sx-count-info">Our Client Rating</div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="sx-count">
              <h2 className="sx-title">
                <span className="sx-cont-before"></span>
                <span className="counter">
                  <CountUp end={2} duration={5} />
                </span>
              </h2>
              <div className="sx-count-info">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCounter1;
