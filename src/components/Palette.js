import React, {useState} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");

    const changeLevel = (level) => setLevel(level);
    const changeColor = (value) => setFormat(value);

    const colorboxes = props.palette.colors[level].map(color => (
        <ColorBox bg={color[format]} name={color.name} />
    ))
    return (
        <>
        <Navbar level={level} changeLevel={changeLevel} handleChange={changeColor}/>
        <div className="Palette">
            <div className="Palette-colors">
                {colorboxes}
            </div>
        </div>
        </>
    )
}

export default Palette;
