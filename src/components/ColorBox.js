import React from 'react';
import './ColorBox.css';
import './Palette.css';

const ColorBox = (props) => {
    return (
        <div style={{background: props.bg}} className="ColorBox">
            <span>MORE</span>
        </div>
    )
}

export default ColorBox;
