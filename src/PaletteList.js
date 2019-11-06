import React from 'react';
import {Link} from 'react-router-dom';
import MiniPalettes from './components/MiniPalettes';

const PaletteList = ({palettes}) => {
    return (
        <div>
            {palettes.map( palette => (
                <Link to={`/palette/${palette.id}`}>
                     <MiniPalettes {...palette}/>
                </Link>
            ))}
        </div>
    );
}

export default PaletteList;
