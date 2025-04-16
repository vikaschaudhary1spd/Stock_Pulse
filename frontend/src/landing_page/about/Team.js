import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h3 className="fs-2 text-center">People</h3>
      </div>
      <div className="row p-5 mt-5 ">
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

          {/* <img src='media/vikas2.png' style={{width:"70%", borderRadius:"5%"}}/> */}
          <p className="text-center">
            {" "}
            Vikas Chaudhary
            <br />
            founder
          </p>
        </div>
        <div className="col-6">
          <p className="text-sm"></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
