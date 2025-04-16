import React from 'react';

function LeftSection(
    {imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googleplay,
    appstore,}
) {
    return ( 
        <div className='container border-top '>
            <div className='row mt-5'>
                <div className= "col-6 "  >
                    <img src={imageURL}/>
                </div>
                
                <div className="col-5 p-5 mt-5 mb-5">
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div className='mt-4'>
                    <a href={tryDemo}>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-5'>
                    <a href={googleplay}><img src='media/googlePlayBadge.svg'/></a>
                    <a href={appstore} style={{marginLeft:"50px"}}><img src='media/appstoreBadge.svg'/></a>
                    </div>

                </div>
                
            </div>
        </div>
     );
}

export default LeftSection;