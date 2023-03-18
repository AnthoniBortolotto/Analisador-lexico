//const expression = "(D+O (((SOD+OD+, SOD+)SC), (D+OD+ || D+) ))"

const expression = "(D+,A,F,O,S)+";

interface IToken {
  tokens: string[];
  expressionToken: string;
};

const bracketOpener = {
  tokens: ["("],
  expressionToken: "A",
};
const bracketCloser = {
  tokens: [")"],
  expressionToken: "F",
};

const numbers = {
  tokens: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  expressionToken: "D",
};
const operators = {
  tokens: ["+", "-", "*", "/"],
  expressionToken: "O",
};
const spaces = {
  tokens: [" "],
  expressionToken: "S",
};

const combinedTokens = [
  bracketOpener,
  bracketCloser,
  numbers,
  operators,
  spaces,
];
const examplePassInput = "(5 + 5) * 5";
const exampleFailInput = "5 + a";

//const alphabet = ["(", ")", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", " "]

export function automato(userInput: string, alphabet: string[]) {
    let inputLength = userInput.length;
    let inputIndex = 0;
    while (inputIndex < inputLength) {
        const foundCharacter = alphabet.find((char) => char === userInput[inputIndex]);
        if(!foundCharacter) return false;
        inputIndex++;
    }
    return true;
}

console.log(examplePassInput, automato(examplePassInput, combinedTokens.map((token) => token.tokens).flat()));
console.log(exampleFailInput, automato(exampleFailInput, combinedTokens.map((token) => token.tokens).flat()));
// Path: main.ts
