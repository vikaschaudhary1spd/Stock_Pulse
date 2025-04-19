import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/bestbroker.png" />
        </div>

        <div className="col-6 p-5 mt-3">
          <h1>Best stock broker in India</h1>
          <p className="mb-5">
            50K Stock Pulse contribute to over 0.10% of all retail order
            volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Option</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stock and IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media\pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
