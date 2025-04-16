import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src ='media/nifty50.png' alt='Hero Image'/>
            <h1 className='mt-5'>Invest in Everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button  className='p-2 btn btn-primary f-5' style={{width:"15%",margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;
