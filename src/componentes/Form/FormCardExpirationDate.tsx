import React from "react";
import {
	defaultCardExpiresMonth,
	defaultCardExpiresYear,
} from "../Card/CreditCard";

const setArrayOptions = (
	optionsArray: number[],
	initialValue: number,
	finalValue: number
): void => {
	for (
		let i = 0, contentValue = initialValue;
		contentValue <= finalValue;
		i++, contentValue++
	) {
		optionsArray[i] = contentValue;
	}
};

const monthOptions: number[] = [];
const yearOptions: number[] = [];

setArrayOptions(monthOptions, 1, 12);
setArrayOptions(yearOptions, 2021, 2032);

export interface FormCardExpirationProps {
	cardExpirationYearDisabled: boolean;
	cardExpirationMonthDisabled: boolean;
	setCardExpirationMonth: React.Dispatch<React.SetStateAction<string>>;
	setCardExpirationYear: React.Dispatch<React.SetStateAction<string>>;
}

const formatNumberToDisplay = (month: number): string => `0${month}`.slice(-2);

export const FormCardExpirationDate = ({
	cardExpirationMonthDisabled,
	cardExpirationYearDisabled,
	setCardExpirationMonth,
	setCardExpirationYear,
}: FormCardExpirationProps) => (
	<div id="expiration-date">
		<label>Expiration Date</label>

		<section id="expiration-date-select">
			<select
				disabled={cardExpirationMonthDisabled}
				onChange={({ target }) =>
					setCardExpirationMonth(
						target.value !== "Month"
							? target.value
							: defaultCardExpiresMonth
					)
				}
			>
				<option>Month</option>
				{monthOptions.map((op) => (
					<option value={formatNumberToDisplay(op)}>
						{formatNumberToDisplay(op)}
					</option>
				))}
			</select>
			<select
				disabled={cardExpirationYearDisabled}
				onChange={({ target }) =>
					setCardExpirationYear(
						target.value !== "Year"
							? target.value.slice(2, 4)
							: defaultCardExpiresYear
					)
				}
			>
				<option>Year</option>
				{yearOptions.map((op) => (
					<option value={op}>{op}</option>
				))}
			</select>
		</section>
	</div>
);
