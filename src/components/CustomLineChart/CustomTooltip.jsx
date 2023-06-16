import React from 'react';
import './CustomTooltip.scss';
import PropTypes from 'prop-types';

/**
 * CustomTooltip Component
 * 
 * @component
 * @param {Object} props
 * @param {boolean} props.active - Tooltip active state
 * @param {Object[]} props.payload - Array of data objects
 * @returns {ReactElement|null} JSX element or null
 */
const CustomTooltip = ({ active, payload }) => {
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

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      payload: PropTypes.shape({
        sessionLength: PropTypes.number,
      }),
    })
  ),
};

export default CustomTooltip;
