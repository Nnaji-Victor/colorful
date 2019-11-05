import React from 'react';
import {Link} from 'react-router-dom';

const PaletteList = ({palettes}) => {
    return (
        <div>
            {palettes.map( palette => (
                <Link to={`/palette/${palette.id}`}>
                    <div>{palette.paletteName}</div>
                </Link>
            ))}
        </div>
    );
}

export default PaletteList;
