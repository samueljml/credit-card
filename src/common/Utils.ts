import { Verify } from "crypto";

export const trimTextUntil = (value: string, ultil: number) => {
	if (value.length <= ultil) {
		return value;
	}

	return `${value.slice(0, ultil)}...`;
};

/**
 * Hide the characteres, replacing each character with asterisk
 * @param text
 * @returns Obscured Text
 */
export const hideCharacteres = (value: string) => ((value+"****").slice(value.length*-1))

/**
 * Verify text length
 * @param text
 * @param MaxLength
 * @returns true if length is lower
 */
export const verifyValueLength = (value: string, maxLength: number) => {
	if(value.length > maxLength) {
		return false;
	}
	return true;
}

/**
 * Get last char of the string
 * @param text
 * @returns last character
 */
export const getLastChar = (value: string) => value.charAt(value.length - 1);

/**
 * Apply a regex expression in a char
 * @param char
 * @param regexExpression
 * @returns true if the char is valid
 */
export const applyRegexIn = (str: string, regex: RegExp) => {
	if (regex.exec(str)) return true;
	return false;
};