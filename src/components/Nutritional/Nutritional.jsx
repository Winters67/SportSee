import React from 'react';

const Nutritional = ({ logo, title, value, unit }) => {
    return (
        <div className='InfoNutritional'>
            <img src={logo} alt="imageLogo" />
            <div className='uniteContainer'>

            <p className='title'>{title}</p>
            <p className='value'>{value}{unit}</p>
            </div>
        </div>
    );
};

export default Nutritional;