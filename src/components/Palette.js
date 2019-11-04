import React, {useState} from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Palette = (props) => {
    const [level, setLevel] = useState(500);

    const changeLevel = (level) => setLevel(level);

    const colorboxes = props.palette.colors[level].map(color => (
        <ColorBox bg={color.hex} name={color.name} />
    ))
    return (
        <div className="Palette">
            <Slider defaultValue={level}
            min ={100}
            max ={900}
            step={100}
            onAfterChange = {changeLevel}/>
            <div className="Palette-colors">
                {colorboxes}
            </div>
        </div>
    )
}

export default Palette;
