import React from 'react';

function ValueContainer(props) {
    return ( <div style={{width:'20%'}}>
    <h1>{props.emoji}</h1>
    <h1 style={{color:'#4C16A2',fontSize:'3vw'}}>{props.value}</h1>
    <p style={{color:'#1A1A1A',opacity:0.7}}>{props.text}</p>
</div> );
}

export default ValueContainer;