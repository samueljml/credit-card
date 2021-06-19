const TEXT = `
What Is a Regular Expression?
A regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations.
1234567890123546`;

// const regexLetters = /([a-zA-Z])/g; // or (\w)
// const regexNumbers = /([0-9])/g
// const regexLettersAndNumbers = /(\w|\d)/g

// b é uma função impura
const b = () => console.log(TEXT);

//b();

// c é uma função pura
const c = (p) => console.log(p);

c("samuel");



export const applyRegexIn = (str, regex) => {
	let found = regex.exec(str);

	while (found) {
		console.log(found[0]);
		found = regex.exec(str);
	}
}

// Letters
applyRegexIn(TEXT, /([a-zA-Z])/g)
// Numbers
applyRegexIn(TEXT, /([0-9])/g)
// Letters and Numbers
applyRegexIn(TEXT, /(\w|\d)/g)