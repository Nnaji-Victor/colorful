import React, {useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = ({level, changeLevel, handleChange}) => {
    const [format, setFormat] = useState("hex");
    const [open, setOpen] = React.useState(false);

    const handleChanger = (e) => {
        setFormat(e.target.value);
        handleChange(e.target.value);
        setOpen(true);
    }

    let snackbarLetter = format.toUpperCase();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen(false);
        }
    
        setOpen(false);
      };

    return (
        <header className="Navbar">
            <div className="logo">
                <Link to ="/" >ColorFul</Link>
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
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }} 
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Format Changed to {snackbarLetter}</span>}
                action={[<IconButton key="close"
                aria-label="close"
                color="inherit"
                onClick={handleClose} >
                    <CloseIcon />
                </IconButton>]}
        />
        </header>
    )
}

export default Navbar;
