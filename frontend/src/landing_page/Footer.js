import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250, 250, 250)"}}>
    <div className="container border-top mt-5 "  >
      <div className="row mt-5">
        <div className="col">
          <img src="media/logo0.png" style={{ width: "30%" }} />
          <p>
            &copy; 2024-2025 , Stock Pulse Brokering Ltd. All rights reserved.
          </p>
        </div>
        <div className="col">
          <h5>Company</h5>
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5", }}>About</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Product</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Pricing</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Referral ptogramme</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Carrers</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>stockpulse.tech</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Open source</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Press & media</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>stockpulse cares</a>
        </div>
        <div className="col">
          <h5>Support</h5>
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Contact us</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Support portal</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Z-Connect blog</a>
          <br /> 
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>List of charges</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Download & resources</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Videos</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Market Overview</a>
          <br />
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>How to file a complaint</a>
          <br /> 
          <a href="" style={{ textDecoration:"none",lineHeight:"2.5"}}>Status of your complaints</a>
        </div>
        <div className="col">
          <h5>Account</h5>
          <a href=""style={{ textDecoration:"none",lineHeight:"2.5"}}>Open an account</a>
          <br />
          <a href=""style={{ textDecoration:"none",lineHeight:"2.5"}}>Fund transfer</a>
        </div>
      </div>
      
      <div  style={{fontSize:"xx-small"}} className="mt-5 small text-muted"> 


        <p>
          
          Stock Pulse Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Stock Pulse Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Commodity Trading through Stock Pulse Commodities Pvt. Ltd. MCX:
          46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered
          Address: Stock Pulse Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to <a href=""> complaints@stockpulse.com</a>, for
          DP related to dp@zerodha.com. Please ensure you carefully read the
          Risk Disclosure Document as prescribed by SEBI | ICF{" "}
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>
          <a href="">Smart Online Dispute Resolution </a>|
          <a href=""> Grievances Redressal Mechanism</a>{" "}
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Stock Pulse and offering such services, please{" "}
          <a href="">create a ticket here.</a>
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
