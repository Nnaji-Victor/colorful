import React, {useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Navbar = ({level, changeLevel, handleChange}) => {
    const [format, setFormat] = useState("hex");

    const handleChanger = (e) => {
        setFormat(e.target.value);
        handleChange(e.target.value)
    }

    console.log(format);
    
    return (
        <header className="Navbar">
            <div className="logo">
                <a href="#">ColorFul</a>
            </div>
            <span>Value: {level}</span>
            <div className="slider-container">
                <div className="slider">
                    <Slider defaultValue={level}
                    min ={100}
                    max ={900}
                    step={100}
                    onAfterChange = {changeLevel}/>
                </div>
            </div>
            <div className="select-container">
                <Select value={format} onChange={handleChanger}>
                    <MenuItem value="hex">HEX-#ffffff</MenuItem>
                    <MenuItem value="rgb">RGB- rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA- rgba(255,255,255, .3)</MenuItem>
                </Select>
            </div>
        </header>
    )
}

export default Navbar;
