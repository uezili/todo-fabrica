import { useState } from 'react';
import './styles.css';

export const Select = ({ options, value, onChange, label }) => {
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);
	const [currentValue, setCurrentValue] = useState(value);

	const handleOptionClick = (option) => {
		onChange(option);
		setIsOptionsVisible(false);
		setCurrentValue(option);
	};

	const toggleOptions = () => {
		setIsOptionsVisible(!isOptionsVisible);
	};

	return (
		<div className="select">
			<div className="selected-option" onClick={toggleOptions}>
				{currentValue || label}
			</div>
			{isOptionsVisible && (
				<div className="options">
					{options.map((option, index) => (
						<div
							key={index}
							className="option"
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
