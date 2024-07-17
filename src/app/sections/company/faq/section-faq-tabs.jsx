export default function SectionFAQTabs() {
  return (
    <>
      <ul className="nav nav-pills sx-tab-style-1" role="tablist">
        <li className="nav-item">
          <div
            className="nav-link active"
            data-bs-toggle="pill"
            data-bs-target="#day_1"
          >
            <h5 className="tb-title">General FAQ</h5>
          </div>
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#day_2"
          >
            <h5 className="tb-title">Technical FAQ</h5>
          </div>
        </li>
      </ul>
    </>
  );
}
