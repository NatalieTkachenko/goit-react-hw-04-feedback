import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/Feedbackoptions';
import NotificationMessage from "./NotificationMessage/NotificationMessage";
import { AppArea, SectionName } from './App.styled';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handlePositiveFeedback = (event) => {
		const keyToUpdate = event.target.innerText.toLowerCase();
		this.addFeedback(keyToUpdate);
	};

	addFeedback = (item) => {
		this.setState((prevState) => ({
			[item]: prevState[item] + 1,
		}));
	};

	handleTotal = (state) => {
		let sum = 0;
		for (const key in this.state) {
			sum = sum + this.state[key];
		}
		return sum;
	};

	handlePositive = (state) => {
		if (this.handleTotal() === 0) {
			return 0;
		} else {
			let result = 0;
			result = Math.round(((this.state.good + this.state.neutral) / this.handleTotal()) * 100);

			return result;
		}
	};

	render() {
		return (
			<AppArea>
				<SectionName>Please live feedback (don't forget to be positive 😎 )</SectionName>
				<FeedbackOptions
					options={this.state}
					onLeaveFeedback={this.handlePositiveFeedback}
				/>
				<SectionName>Statistics 🖥</SectionName>
				{!this.handleTotal() ? <NotificationMessage/> : <Statistics
					good={this.state.good}
					bad={this.state.bad}
					neutral={this.state.neutral}
					total={this.handleTotal()}
					positivePercetage={this.handlePositive()}
				/>}				
			</AppArea>
		);
	}
}

export default App;
