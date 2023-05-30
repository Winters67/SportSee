import React from 'react';
import './CustomTooltip.scss';


const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length) {
    const { sessionLength } = payload[0].payload;

    const tooltipClasses = `custom-tooltip ${active ? 'active' : ''}`;

    return (
      <div className='ContainerTime'>

        <div className={tooltipClasses}>
          <p className="label"> {sessionLength} min</p>


        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
