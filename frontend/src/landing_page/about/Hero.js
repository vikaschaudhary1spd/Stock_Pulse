import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h3 className="fs-2 text-center">
          We revolutionized discount broking in India <br />
          Now, we're setting new benchmarks with cutting-edge technology.
        </h3>
      </div>
      <div className="row p-5 mt-5  border-top text-muted" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
      <div className="col-6 p-5">
          <p className="text-sm">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Stock Pulse , a combination of Zero and "Rodha", the Sanskrit word for
            barrier.</p> <p>Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India.
          </p>
        </div>
        <div className="col-6 p-5">
          <p className="text-sm">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.</p>
            <p>Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets. And yet, we are always up to something new every day. Catch
            up on the latest updates on our blog or see what the media is saying
            about us.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
