import React, {useState} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

const Palette = (props) => {
    const [level, setLevel] = useState(500);

    const changeLevel = (level) => setLevel(level);

    const colorboxes = props.palette.colors[level].map(color => (
        <ColorBox bg={color.hex} name={color.name} />
    ))
    return (
        <>
        <Navbar level={level} changeLevel={changeLevel}/>
        <div className="Palette">
            <div className="Palette-colors">
                {colorboxes}
            </div>
        </div>
        </>
    )
}

export default Palette;
