import React, { FunctionComponent } from 'react';

interface Button {
    text: string;
    backgroundColor: string;
    className?: string;
    onClick: () => void;
};

const Button: FunctionComponent<Button> = ({className, backgroundColor, onClick, text}) => {
    return <div className={'button ' + className} style={{backgroundColor: backgroundColor }} onClick={onClick}>
        <p className='text'>{text}</p>
    </div>;
};

export default Button;