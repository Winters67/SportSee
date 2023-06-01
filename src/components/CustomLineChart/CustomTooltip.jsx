import React from 'react';
import './CustomTooltip.scss';

/**
 * CustomTooltip Component
 * 
 * @component
 * @param {Object} props
 * @param {boolean} props.active - Tooltip active state
 * @param {Object[]} props.payload - Array of data objects
 * @param {Object} props.coordinate - The coordinate for the tooltip
 * @returns {ReactElement|null} JSX element or null
 */
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
