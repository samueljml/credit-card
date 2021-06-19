import React, { useEffect, useState } from "react";

interface PersonProps {
	name: string;
	age: number;
	heigth: number;
	weigth: number;
}

/**
 * Returns the square of a number
 * @param n: number
 */
const square = (n: number) => Math.pow(n, 2);

/**
 * Returns the Quotient of the division
 * @param n1 Dividend
 * @param n2 Divisor
 */
const divide = (n1: number, n2: number) => n1 / n2;

/**
 * Converts the String to floating number
 * @param string
 * @returns floating number
 */
const toFloat = (n1: string) => parseFloat(n1);

const fixNumberTo = (n1: number, decimals: number) => n1.toFixed(decimals);

const fixTo2 = (n1: number) => fixNumberTo(n1, 2);

/**
 * Returns the person's IMC
 * @param weigth
 * @param height
 */
const getIIMCFrom = (weigth: number, height: number) => {
	if (!height) {
		return -1;
	}

	return toFloat(fixTo2(divide(weigth, square(height))));
};

export const Person = ({ age, name, heigth, weigth }: PersonProps) => {
	const [IMC, setIMC] = useState(-1);

	useEffect(() => {
		setTimeout(() => {
			setIMC(getIIMCFrom(weigth, heigth));
		}, Math.random() * 1000);
	}, [heigth, weigth]);

	return (
		<div
			style={{
				width: "100%",
				marginBottom: 10,
				border: "solid 2px #003",
				padding: 5,
			}}
		>
			<h1>Person</h1>
			<h2>Nome: {name}</h2>
			<h2>Idade: {age}</h2>
			<h2>Altura: {heigth}</h2>
			<h2>Peso: {weigth}</h2>
			<h2>IMC: {IMC !== -1 ? IMC : "Calculando..."}</h2>
		</div>
	);
};
