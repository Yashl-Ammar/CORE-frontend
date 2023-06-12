import React from 'react';
import ButtonType3 from './ButtonType3';
import headerimg from '../img/header.jpg'
import ValueContainer from './ValueContainer';

function Curriculum() {
    return ( <div className='head-content'>
        <div className='head-content-inner-div'>
            <div className='curriculum-content-col-divs'>
                <h1 className='curriculum-content-title'>Comprehensive Middle School Curriculum</h1>
                <p className='curriculum-content-sub-title'>
The aim of a comprehensive middle school curriculum is to provide a well-rounded education that nurtures the intellectual, social, emotional, and physical development of students during the crucial transition from childhood to adolescence. The curriculum is designed to offer a balanced blend of core academic subjects, elective courses, and extracurricular activities to foster holistic growth.</p>
                <ButtonType3 text='Learn More' color="white" backgroundColor="#4C16A2" />
            </div>
        </div>
        <div className='head-content-inner-div'>
            <div className='curriculum-grid'>
                <div className='curriculum-grid-div'>
                    <h1 style={{color:'#4C16A2'}}>Humanities - Study of Human Culture</h1>
                    <p>Humanities refers to the academic discipline that encompasses the study of human culture, society, history, literature, philosophy, and the arts. It is a broad field that explores the human experience, values, ideas, and expressions throughout history and across different cultures.</p>
                </div>
                <div className='curriculum-grid-div'>
                    <h1 style={{color:'#4C16A2'}}>Science Classes - Learning The Mechanisms of World</h1>
                    <p>Sciences refer to a broad range of academic disciplines that systematically study the natural world, its phenomena, and the underlying principles that govern them. The scientific disciplines are based on empirical evidence, observation, experimentation, and logical reasoning to understand and explain the workings of the universe.</p>    
                </div>
                <div className='curriculum-grid-div'>
                    <h1 style={{color:'#4C16A2'}}>English Classes - Learning Language</h1>
                    <p>English is a widely spoken language and a prominent academic discipline that encompasses the study of its structure, literature, and communication. It is the language of international communication, business, diplomacy, and a significant medium of instruction in many countries.</p>
                </div>
                <div className='curriculum-grid-div'>
                    <h1 style={{color:'#4C16A2'}}>Mathematic - Essential for Logic and Understanding</h1>
                    <p>Mathematics is a fundamental academic discipline that deals with the study of numbers, quantities, shapes, structures, patterns, and their relationships. It is a field of knowledge that utilizes logical reasoning, abstraction, and rigorous methods to understand and explain various mathematical concepts and phenomena.</p>
                </div>
                
            </div>

        </div>
    </div> );
}

export default Curriculum;