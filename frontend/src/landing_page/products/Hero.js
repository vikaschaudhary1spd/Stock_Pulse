import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
          <div className='text-center mt-5 mb-5'>
            <h1>Stock Pulse Products</h1>
            <h4 className='small text-muted mt-3 p-2'>Sleek, modern, and intuitive trading platforms</h4>
            <p className='mt-3 mb-5 p-2'>Check out our  <a href="">
            investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a></p>
          </div>
        </div>
     );
}

export default Hero;