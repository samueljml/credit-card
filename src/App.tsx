import React, { Children, useState } from "react";
import { FormCardNumber } from "./componentes/Form/FormCardNumber";
import { FormCardHolder } from "./componentes/Form/FormCardHolder";
import { FormCardExpirationDate } from "./componentes/Form/FormCardExpirationDate";
import { FormCardCVV } from "./componentes/Form/FormCardCVV";
import { ButtonSubmit } from "./componentes/Button/ButtonSubmit";
import { CreditCard } from "./componentes/Card/CreditCard";
import {
	defaultCardExpiresMonth,
	defaultCardExpiresYear,
	defaultCardHolder,
	defaultCardNumber,
	defaultCardCVV,
} from "./componentes/Card/CreditCard";
import "./App.css";

export const App = () => {
	const [cardHolderText, setCardHolderText] = useState(defaultCardHolder);
	const [cardNumberText, setCardNumberText] = useState(defaultCardNumber);
	const [cardExpirationMonth, setCardExpirationMonth] = useState(
		defaultCardExpiresMonth
	);
	const [cardExpirationYear, setCardExpirationYear] = useState(
		defaultCardExpiresYear
	);
	const [cardCVV, setCardCVV] = useState(defaultCardCVV);
	const [isOnFocus, setIsOnFocus] = useState(true);

	return (
		<div className="container">
			<CreditCard
				cardCVV={cardCVV}
				showing={isOnFocus}
				cardHolderValue={cardHolderText}
				cardNumberValue={cardNumberText}
				cardExpirationMonthValue={cardExpirationMonth}
				cardExpirationYearValue={cardExpirationYear}
			/>

			<div id="form">
				<FormCardNumber onValueChanged={setCardNumberText} />
				<FormCardHolder onValueChanged={setCardHolderText} />
				<section id="security-data">
					<FormCardExpirationDate
						cardExpirationYearDisabled={
							cardExpirationYear !== defaultCardExpiresYear
						}
						cardExpirationMonthDisabled={
							cardExpirationMonth !== defaultCardExpiresMonth
						}
						setCardExpirationMonth={setCardExpirationMonth}
						setCardExpirationYear={setCardExpirationYear}
					/>
					<FormCardCVV
						setCardCVV={setCardCVV}
						setIsOnFocus={setIsOnFocus}
					/>
				</section>
				<ButtonSubmit />
			</div>
		</div>
	);
};

// Card two faces:

// enum CardFaces {
// 	FRONT,
// 	BACK,
// }

// const isFrontFace = (face: CardFaces) => face === CardFaces.FRONT;

// interface ContainerProps {
// 	onClick: () => void;
// 	children: JSX.Element[];
// }

// interface GerenicCardProps {
// 	showing: boolean;
// }

// interface CardFaceProps {
// 	face: CardFaces;
// 	children: JSX.Element | JSX.Element[];
// }

// const Container = ({ children, onClick }: ContainerProps) => (
// 	<div
// 		onClick={onClick}
// 		style={{
// 			display: "flex",
// 			flex: 1,
// 			background: "#ddd",
// 			height: "500px",
// 			flexDirection: "column",
// 			justifyContent: "center",
// 			alignItems: "center",
// 			alignContent: "stretch",
// 			transform:
// 				"perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg)"
// 		}}
// 	>
// 		{children}
// 	</div>
// );

// const GenericCardFace = ({ face, children }: CardFaceProps) => (
// 	<div
// 		style={{
// 			display: "flex",
// 			width: "580px",
// 			height: "400px",
// 			background: isFrontFace(face) ? "#1d1e22" : "#56bcf9",
// 			flexDirection: "column",
// 			justifyContent: "center",
// 			alignItems: "center",
// 			alignContent: "stretch",
// 			borderRadius: "5px",
// 			color: "#fff",
// 			fontSize: 30,
// 			cursor: "pointer",
// 			transform:
// 				"perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg)",
// 		}}
// 	>
// 		{children}
// 	</div>
// );

// const FrontCard = ({ showing }: GerenicCardProps) =>
// 	showing ? (
// 		<GenericCardFace face={CardFaces.FRONT}>
// 			<h2>Frente do cartão</h2>
// 		</GenericCardFace>
// 	) : (
// 		<></>
// 	);

// const BackCard = ({ showing }: GerenicCardProps) =>
// 	showing ? (
// 		<GenericCardFace face={CardFaces.BACK}>
// 			<h2>Verso do cartão</h2>
// 		</GenericCardFace>
// 	) : (
// 		<></>
// 	);

// export const App2 = () => {
// 	const [currentFace, setCurrentFace] = useState(CardFaces.FRONT);

// 	const toggleCurrentFace = () => {
// 		if (isFrontFace(currentFace)) {
// 			setCurrentFace(CardFaces.BACK);
// 		} else {
// 			setCurrentFace(CardFaces.FRONT);
// 		}
// 	};

// 	return (
// 		<Container onClick={toggleCurrentFace}>
// 			<FrontCard showing={isFrontFace(currentFace)} />
// 			<BackCard showing={!isFrontFace(currentFace)} />
// 		</Container>
// 	);
// };

// Person props
/* <Person
	weigth={90}
	heigth={1.85}
	age={30}
	name={"Emeson Demetrio"}
/>

<Person
	weigth={60}
	heigth={1.75}
	age={20}
	name={"Samuel Figueiredo de Andrade"}
/>

<Person
	weigth={70}
	heigth={1.76}
	age={17}
	name={"Micael Figueiredo de Andrade"}
/> */
