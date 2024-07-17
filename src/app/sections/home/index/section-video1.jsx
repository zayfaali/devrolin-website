import { publicUrlFor } from "../../../../globals/constants";

function SectionVideo1() {
  return (
    <>
      <div
        className="section-full sx-video-1-outer  bg-cover"
        style={{
          backgroundImage: `url(${publicUrlFor("images/vid-1-bg.jpg")})`,
        }}
      >
        <div className="sx-bg-overlay" />
        <div className="container">
          <div className="sx-vodeo-section text-center">
            <h2 className="sx-large-title ">
              Inside Our Company: A Video Tour
            </h2>
            <div className="sx-video-btn-wrap">
              <a
                href="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                className="mfp-video circle"
              >
                <i className="flaticon-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionVideo1;
