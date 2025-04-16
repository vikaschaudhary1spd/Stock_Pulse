import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid' id='supporthero'>
            <div className='row p-5  mb-5' id='supportWrapper'>
                <div className='col-1'/>
               <div className='col-6'>
               <h4>Support Portal</h4>
               </div>
               <div className='col-4'>
             <a href='' id='tick'>Track Tickets</a>
             </div>  
            </div>
            <div className='row  mt-5 mb-5'>
            <div className='col-1'/>
            <div className='col-6 my-5 '>
                <h3>Search for an answer or browse help topics to create a Ticket
                </h3>
                <input style={{width:"90%" , borderRadius:"10px" , padding:"2%" , fontSize:"120%"}} placeholder='Eg. How do i activate F&O '/>
                <br/>
                <a href=''id='fea'>Track account opening  </a>
                <span class="mx-2">|</span>
                <a href=''id='fea'>Track segment activation</a>
                <span class="mx-2">|</span>
                <a href=''id='fea'> Intraday margins</a>
                <br/>
                <a href=''id='fea'>Kite user manual</a>
             <div className='col-1'/>   

            </div>
            <div className='col-4 my-5'>
                <h3>Featured</h3>
                <a href='' id='fea'>1.Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a> 
                <br/>
                <a href=''id='fea'>Trading holiday on account of Dr. Baba Saheb Ambedkar Jayanti on April 14, 2025
                </a>
            </div>
            </div>
        </div>
     );
}

export default Hero;