import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" />
        </div>
        <div className="col-6 p-5">
          <h2>Free and open market education</h2>
          <p className="pt-2">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="">
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="pt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="">
            Trading Q&A{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
