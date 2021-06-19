import React, { useState } from "react";
import {
	applyRegexIn,
	getLastChar,
	verifyValueLength,
} from "../../common/Utils";
import { defaultCardNumber } from "../Card/CreditCard";

export interface FormCardNumberProps {
	onValueChanged: React.Dispatch<React.SetStateAction<string>>;
}

const applyCardNumberMask = (value: string) =>
	(value + defaultCardNumber).slice(0, defaultCardNumber.length);

export const FormCardNumber = ({ onValueChanged }: FormCardNumberProps) => {
	const [inputValue, setInputValue] = useState("");

	const updateFieldValues = (value: string) => {
		onValueChanged(applyCardNumberMask(value));
		setInputValue(value);
	};

	const handleInputChange = ({ target }: any) => {
		const onlyNumbers = /([0-9])/g;
		if (
			applyRegexIn(getLastChar(target.value), onlyNumbers) ||
			!target.value
		) {
			if (verifyValueLength(target.value, defaultCardNumber.length)) {
				updateFieldValues(target.value);
			}
		}
	};

	return (
		<div id="form-card">
			<label>Card Number</label>
			<input
				type="number"
				value={inputValue}
				onChange={handleInputChange}
				id="input-credit-card-number"
			/>
		</div>
	);
};
