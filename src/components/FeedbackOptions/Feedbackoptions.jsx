import PropTypes from 'prop-types';
import { Btnarea, Button } from 'components/FeedbackOptions/FeedbackOptions.styled.js';



export default function FeedbackOptions({options, onLeaveFeedback }) {
	return (
		<Btnarea>
			{Object.keys(options).map((option, i) => (
				<Button
					key={option}
					type='button'
					onClick={onLeaveFeedback}
				>
					{options[i]}
				</Button>
			))}
		</Btnarea>
	);
}

FeedbackOptions.propTypes = {
	options: PropTypes.array,
	onLeaveFeedback: PropTypes.func,
};
