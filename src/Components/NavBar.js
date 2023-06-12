import React from 'react';
import ButtonType1 from './ButtonType1';
import ButtonType2 from './ButtonType2';

function NavBar() {
    return ( 
        <div className='nav-outer-div'>
            <div className='nav-inner-div'>
                <h1>CORE</h1>
                <ul className='nav-list-elements'>
                    <li><a className='nav-links' href=''>About Us</a></li>
                    <li><a className='nav-links' href=''>Our Program</a></li>
                    <li><a className='nav-links' href=''>Find your school</a></li>
                    <li><a className='nav-links' href=''>Resources</a></li>
                    
                </ul>
                <div>
                    <ButtonType1 text='Log in' />
                    <ButtonType2 text='Find Your School' />
                </div>
                
            </div>
        </div>
    );
}

export default NavBar;