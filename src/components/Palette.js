import React from 'react';
import ColorBox from './ColorBox';

const Palette = (props) => {
    const colorboxes = props.colors.map(color => (
        <ColorBox bg={color.color} name={color.name} />
    ))
    return (
        <div className="Palette">
            <div className="Palette-colors">
                {colorboxes}
            </div>
        </div>
    )
}

export default Palette;
