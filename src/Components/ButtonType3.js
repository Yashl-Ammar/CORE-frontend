import React from 'react';

function ButtonType3(props) {
    return ( <button style={{backgroundColor: props.backgroundColor, color:props.color}} className='btn-t-3'>
        {props.text}
    </button> );
}

export default ButtonType3;