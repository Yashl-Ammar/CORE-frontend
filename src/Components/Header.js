import React from 'react';
import ButtonType3 from './ButtonType3';
import headerimg from '../img/header.jpg'
import ValueContainer from './ValueContainer';

function Header() {
    return ( <div className='head-content'>
        <div className='head-content-inner-div'>
            <div className='head-content-col-divs'>
                <h1 className='head-content-title'>The Premier Intelligent<br/> Hub</h1>
                <p className='head-content-sub-title'>Embark on a transformative educational journey without boundaries with our remote educational institute. From the comfort of your own home, seize the opportunity to expand your knowledge, unleash your potential, and embrace a world-class learning experience.</p>
                <ButtonType3 text='Book a demo' color="white" backgroundColor="#4C16A2" />
                <ButtonType3 text='Learn More' color="#4C16A2" backgroundColor="transparent" />
            </div>
            <div className='head-content-col-divs'>
                <img className='header-image' src={headerimg} />
            </div>
        </div>
        <div className='head-content-inner-div'>
            <ValueContainer text="According to a recent study a large portion of parent and satisfied by their children's education" value='97%' emoji='&#127774;' />
            <ValueContainer text="Schools with our educational programs across multiple states" value='83' emoji='&#127979;' />
            <ValueContainer text="Pupils who meet the academic requirement and pass the entrance exams" value='95%' emoji='&#128211;' />
            <ValueContainer text="Student run start ups backed after education and businesses" value='470+' emoji='&#128640;' />

        </div>
    </div> );
}

export default Header;