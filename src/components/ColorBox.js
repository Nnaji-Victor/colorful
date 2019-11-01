import React from 'react';
import './ColorBox.css';
import './Palette.css';

const ColorBox = (props) => {
    const {name, bg} = props;
    return (
        <div style={{background: bg}} className="ColorBox">
            <div className="copy-container">
                <div className="box-container">
                    <span>{name}</span>
                </div>
                <button className="copy-button">Copy</button>
            </div>
            <span className="see-more">more</span>
        </div>
    )
}

export default ColorBox;
