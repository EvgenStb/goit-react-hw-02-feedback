import React from "react"
import PropTypes from 'prop-types';



const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (<div className="Statistic">
    <h2>Statistic</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage || 0}%</p>
  </div>);
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
export default Statistic;
