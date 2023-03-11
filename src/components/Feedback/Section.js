import React from "react";
import PropTypes from 'prop-types';

const Section = ({titel, children}) => {
    return (
      <div className="Feedback__container">
        <h2 className="Feedback__title">{titel}</h2>
        {children}
      </div>
    );
}

Section.prototype = {
    titel: PropTypes.string.isRequired,
}

export default Section