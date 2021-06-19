import React, { useState } from "react";
import { defaultCardHolder } from "../Card/CreditCard";
import { applyRegexIn, getLastChar } from "../../common/Utils";

export interface FormCardHolderProps {
	onValueChanged: React.Dispatch<React.SetStateAction<string>>;
}

export const FormCardHolder = ({ onValueChanged }: FormCardHolderProps) => {
	const [inputValue, setInputValue] = useState("");

	const updateFieldValues = (value: string) => {
		if (!value) {
			onValueChanged(defaultCardHolder);
		} else {
			onValueChanged(value.toUpperCase());
		}
		setInputValue(value);
	};

	const handleInputChange = (input: HTMLInputElement) => {
		const onlyLettersAndSpaceRegex = /([a-zA-Z ])/g;
		if (
			applyRegexIn(getLastChar(input.value), onlyLettersAndSpaceRegex) ||
			!input.value
		) {
			updateFieldValues(input.value);
		}
	};

	return (
		<div id="form-card">
			<label>Card Holders</label>
			<input
				type="text"
				value={inputValue}
				maxLength={25}
				onChange={(e) => handleInputChange(e.target)}
				id="input-credit-card-holders"
			/>
		</div>
	);
};
