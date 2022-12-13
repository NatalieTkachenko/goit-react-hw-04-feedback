import React from 'react';
import PropTypes from 'prop-types';
import { Reply } from './Statistics.styled.js';

export default function Statistics({ good, neutral, bad, total, positivePercetage }) {
	return (
		<div>
			<Reply>Good: {good}</Reply>
			<Reply>Neutral: {neutral}</Reply>
			<Reply>Bad: {bad}</Reply>
			<Reply>Total: {total}</Reply>
			<Reply>Positive feedbacks: {positivePercetage}%</Reply>
		</div>
	);
}

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercetage: PropTypes.number.isRequired,
};
