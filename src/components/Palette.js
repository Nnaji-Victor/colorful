import React, {useState} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");

    const changeLevel = (level) => setLevel(level);
    const changeColor = (value) => setFormat(value);

    const colorboxes = props.palette.colors[level].map(color => (
        <ColorBox bg={color[format]} name={color.name} key={color.id}/>
    ))
    return (
        <div className="palette-holder">
            <Navbar level={level} changeLevel={changeLevel} handleChange={changeColor}/>
            <div className="Palette">
                <div className="Palette-colors">
                    {colorboxes}
                </div>
                <footer className="palette-footer">
                    {props.palette.paletteName}
                    <span className="emoji">
                        {props.palette.emoji}
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default Palette;
