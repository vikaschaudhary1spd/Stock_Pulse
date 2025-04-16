import React from "react";

function Universe() {
  return (
    <div className="container bottom-top mt-5">
      <div className="row text-center">
        <h1>The Stock Pulse Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
    
      <div className="col-4 p-3 mt-5 ">
        <img src="media\smallcaseLogo.png" />
        <p className="text-small text-muted">
          Thematic investing platform that helps you invest in diversified
          baskets of stocks on ETFs.
        </p>
      </div>
      <div className="col-4 p-3 mt-5 ">
        <img src="media\streakLogo.png" style={{width:"25%"}}/>
        <p className="text-small text-muted">
          Systematic trading platform that allows you to create and backtest
          strategies without coding.</p>
        
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media\dittoLogo.png" style={{width:"25%"}}/>
        <p className="text-small text-muted">
          Personalized advice on life and health insurance. No spam and no
          mis-selling. Sign up for free
          </p>
      </div>
    </div>
    </div>
  );
}

export default Universe;
