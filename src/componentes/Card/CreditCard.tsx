import React from "react";
import { trimTextUntil } from "../../common/Utils";

export const defaultCardNumber = "################";
export const defaultCardHolder = "FULL NAME";
export const defaultCardExpiresMonth = "MM";
export const defaultCardExpiresYear = "YY";
export const defaultCardCVV = "";

export interface labelProps {
	cardHolderValue: string;
	cardNumberValue: string;
	cardExpirationMonthValue: string;
	cardExpirationYearValue: string;
}

interface ContainerProps {
	children: JSX.Element;
}

interface GerenicCardProps {
	cardCVV: string;
	showing: boolean;
	cardHolderValue: string;
	cardNumberValue: string;
	cardExpirationMonthValue: string;
	cardExpirationYearValue: string;
}

export const CreditCard = ({
	showing,
	cardCVV,
	cardNumberValue,
	cardHolderValue,
	cardExpirationMonthValue,
	cardExpirationYearValue,
}: GerenicCardProps) => (
	<section id="credit-card" className={showing ? "" : "set-rotate"}>
		<div className="card-front">
			<span id="credit-card-number">{cardNumberValue}</span>
			<div id="credit-card-div" className="flex-row">
				<div id="card-holder" className="flex-column">
					<label>Card Holder</label>
					<p id="lable-credit-card-holder">
						{trimTextUntil(cardHolderValue, 22)}
					</p>
				</div>

				<div id="card-expires" className="flex-column">
					<label>Expires</label>
					<div className="flex-row">
						<p id="expiration-month">{cardExpirationMonthValue}</p>
						<p>/</p>
						<p id="expiration-year">{cardExpirationYearValue}</p>
					</div>
				</div>
			</div>
		</div>
		<div className="card-back">
			<p id="card-cvv">{cardCVV}</p>
		</div>
	</section>
);
