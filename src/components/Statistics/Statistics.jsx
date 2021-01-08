import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.List}>
      <li className={s.Item}>Good:{good}</li>
      <li className={s.Item}>Neutral:{neutral}</li>
      <li className={s.Item}>Bad:{bad}</li>
      <li className={s.Item}>Total:{total}</li>
      <li className={s.Item}>Positiv feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
