import React from 'react';
import './Feedback/Feedback.css';
import Section from './Feedback/Section';
import Statistic from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(PrevState => ({ [name]: PrevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => (
    Math.round((this.state.good / this.countTotalFeedback()) * 100
    ));

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const keyObj = Object.keys(this.state);

    return (
      <>
        <Section titel="Please leave feedback">
          <FeedbackOptions
            options={keyObj}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            ></Statistic>
          )}
        </Section>
      </>
    );
  }
}
