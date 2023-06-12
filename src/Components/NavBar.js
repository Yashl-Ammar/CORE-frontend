import React from 'react';

function NavBar() {
    return ( 
        <div className='nav-outer-div'>
            <div className='nav-inner-div'>
                <h1>CORE</h1>
                <ul>
                    <li>About Us</li>
                    <li>Our Program</li>
                    <li>Find your school</li>
                    <li>Resources</li>
                    <button>Log in</button>
                    <button>Find Your School</button>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;