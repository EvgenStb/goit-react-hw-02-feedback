import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

const FeedbackOptions = ({options ,onLeaveFeedback}) =>{
  
    return (
      <div className="Feedback__controls">
        {options.map(option => (
          <button
            key={nanoid()}
            type="button"
            className="Feedback__batton"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
}


FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;


