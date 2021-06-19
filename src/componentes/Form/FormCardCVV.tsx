import React, { useState } from "react";
import {
	applyRegexIn,
	getLastChar,
	verifyValueLength,
} from "../../common/Utils";
import { hideCharacteres } from "../../common/Utils";

const maxLenthCVV = 4;

export interface FormCardCVVProps {
	setCardCVV: React.Dispatch<React.SetStateAction<string>>;
	setIsOnFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormCardCVV = ({ setCardCVV, setIsOnFocus }: FormCardCVVProps) => {
	const [inputValue, setInputValue] = useState("");

	const updateFieldValues = (value: string) => {
		setCardCVV(hideCharacteres(value));
		setInputValue(value);
	};

	const handleInputChange = ({ value }: HTMLInputElement) => {
		const onlyNumbersRegex = /[0-9]/;
		if (applyRegexIn(getLastChar(value), onlyNumbersRegex) || !value) {
			if (verifyValueLength(value, maxLenthCVV)) {
				updateFieldValues(value);
			}
		}
	};

	return (
		<div id="cvv">
			<label>CVV</label>
			<input
				onBlur={(e) => setIsOnFocus(true)}
				onFocus={(e) => setIsOnFocus(false)}
				value={inputValue}
				onChange={({ target }) => handleInputChange(target)}
				id="input-credit-card-cvv"
			></input>
		</div>
	);
};
