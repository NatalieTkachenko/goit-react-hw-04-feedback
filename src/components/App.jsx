import React from 'react';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/Feedbackoptions';
import NotificationMessage from "./NotificationMessage/NotificationMessage";
import { AppArea, SectionName } from './App.styled';


const App = () => {
	const [ good, setGood ] = useState( 0 );
	const [ neutral, setNeutral ] = useState( 0 );
	const [ bad, setBad ] = useState( 0 );

	const options = ['good', 'neutral', 'bad']

	const handlePositiveFeedback = (event) => {
		const keyToUpdate = event.target.innerText.toLowerCase();
		addFeedback(keyToUpdate);
	};

	const addFeedback = ( item ) =>
	{
		switch ( item )
		{
			case 'good':
				setGood( good + 1 );
				break;
			case 'neutral':
				setNeutral( neutral + 1 );
				break;
			case 'bad':
				setBad( bad + 1 );
				break;
			default:
				return;
		}		
	};

	const handleTotal = () => {
		let sum = good + neutral + bad;
		return sum;
	};

	const handlePositive = () => {
		if (handleTotal() === 0) {
			return 0;
		} else {
			let result = 0;
			result = Math.round(((good + neutral) / handleTotal()) * 100);

			return result;
		}
	};
	
	return(<AppArea>
				<SectionName>Please live feedback (don't forget to be positive 😎 )</SectionName>
				<FeedbackOptions
					options={options}
					onLeaveFeedback={handlePositiveFeedback}
				/>
				<SectionName>Statistics 🖥</SectionName>
				{!handleTotal() ? <NotificationMessage/> : <Statistics
					good={good}
					bad={bad}
					neutral={neutral}
					total={handleTotal()}
					positivePercetage={handlePositive()}
				/>}				
			</AppArea>)

}



export default App;
