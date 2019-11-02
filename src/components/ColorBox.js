import React, { useState } from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';
import './Palette.css';

const ColorBox = (props) => {
    const {name, bg} = props;
    const [copied, setCopied] = useState(false);

    const changeCopyState = () =>{
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }

    return (
        <CopyToClipboard text={bg} onCopy={changeCopyState}>
            <div style={{background: bg}} className="ColorBox">
            <div style={{background: bg}} className={`copy-overlay ${copied && "show"}`} />
            <div className={`copy-message ${copied && "show"}`}>
                <h1>copied!</h1>
                <p>{props.bg}</p>

            </div>
                <div className="copy-container">
                    <div className="box-container">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className="see-more">more</span>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox;
