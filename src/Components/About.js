import React from 'react';
import ButtonType1 from './ButtonType1';

function About() {
    return ( <div className='about-outer-div'>
        <div className='about-inner-div'>
            <h1>
                Welcome to our remote education institute, where learning knows no boundaries. With our flexible and immersive virtual classrooms, you can access high-quality education from anywhere in the world. Our experienced instructors and diverse curriculum empower you to reach your full potential. Join our inclusive learning community and embrace the convenience and enriching experience of remote education. Unlock endless possibilities with us.
            </h1>
            <button style={{backgroundColor:'transparent', color:'white', border:'1px solid white', padding:'2%', borderRadius:'30px',margin:'20px 0px'}} >Learn more about courses</button>
        </div>
        
        
    </div> );
}

export default About;