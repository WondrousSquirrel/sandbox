import React from 'react';

interface Button {
    text: string;
    backgroundColor: string;
    className?: string
};

const Button = (props: Button) => {
    return <div className={'button ' + props.className} style={{backgroundColor: props.backgroundColor }}>
        <p className='text'>{props.text}</p>
    </div>;
};

export default Button;