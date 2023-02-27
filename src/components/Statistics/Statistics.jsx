import PropTypes from 'prop-types';
import { BadReviews, GoodReviews, NeutralReviews } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <GoodReviews>Good: {good}</GoodReviews>
      <NeutralReviews>Neutral: {neutral}</NeutralReviews>
      <BadReviews>Bad: {bad}</BadReviews>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage ? positivePercentage : 0}%</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
