import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h3 className="fs-2 text-center">People</h3>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-1"></div>
        <div className="col-4">
        <img src="media/vikas2.png"style={{ width: "90%", borderRadius: "5%" }}alt="Vikas"/>
        <h3 className="text-center mt-5 text-muted">Vikas Chaudhary</h3>
        <br/>
        <p className="text-muted text-center">Founder</p>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <p>Vikas Chaudhary was born on May 17,2001 in Basti, Uttar Pradesh. He is an experienced investor , Certify in SEBI registered-investor certification and holds master's degree in MCA. Stock Pulse was founded by Vikas Chaudhary in 2020 </p>
        <img src='media/certi.png' style={{width:"105%" ,}}/>
        <p className="text-bold">Contact</p> 
        < a href="https://mail.google.com/mail/u/0/">Gmail</a>
        <a href="https://www.linkedin.com/in/vikas-chaudhary-a0a1b4150/" style={{margin:"10%"}}>Linkedin</a>
        
        <a href="https://www.instagram.com/vikas_chaudhary170?utm_source=qr&igsh=d3ZkaGJydWdpYTM2 ">Instagram</a>
        </div>
        {/* <div className="col-2"></div> */}
        </div> 
      {/* <div className="row p-5  ">
        <div className="col-6 p-5">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", 
            }}
          >
            <img
              src="media/vikas2.png"
              style={{ width: "60%", borderRadius: "5%" }}
              alt="Vikas"
            />
          </div>

          
          <p className="text-center">
            {" "}
            Vikas Chaudhary
            <br />
            founder
          </p>
        </div>
        <div className="col-6">
          <p className="text-sm"></p>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Team;
