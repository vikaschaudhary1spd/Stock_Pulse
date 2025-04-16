import React from 'react';

function RightSection({
    productname,
    productdescription,
    learnmore,
    imageURL,

}) {
    return ( 
       <div className='container bottom-top mt-5'>
        <div className='row '>
        <div className="col-5 p-5 mt-5">
            <h2>{productname}</h2>
            <p>{productdescription}</p>
            <a href={learnmore}>learnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
             <div className= "col-6 "  >
              <img src={imageURL}/>
        </div>
        </div>
       </div>
     );
}

export default RightSection;