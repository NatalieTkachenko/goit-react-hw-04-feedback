import PropTypes from 'prop-types';
import { Btnarea, Button } from 'components/FeedbackOptions/FeedbackOptions.styled.js';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
	return (
		<Btnarea>
			{Object.keys(options).map((option) => (
				<Button
					key={option}
					type='button'
					onClick={onLeaveFeedback}
				>
					{option}
				</Button>
			))}
		</Btnarea>
	);
}

FeedbackOptions.propTypes = {
	options: PropTypes.object,
	onLeaveFeedback: PropTypes.func,
};
