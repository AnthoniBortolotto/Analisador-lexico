//const expression = "(D+O (((SOD+OD+, SOD+)SC), (D+OD+ || D+) ))"

const expression = "(D+,A,F,O,S)+";

interface IChar {
  name: string;
  lexema: string[];
  token: string;
};

const bracketOpener = {
  name: "Abre parênteses",
  lexema: ["("],
  token: "A",
};
const bracketCloser = {
  name: "Fecha parênteses",
  lexema: [")"],
  token: "F",
};

const numbers = {
  name: "Dígitos",
  lexema: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  token: "D",
};
const operators = {
  name: "Operadores aritméticos",
  lexema: ["+", "-", "*", "/"],
  token: "O",
};
const spaces = {
  name: "Espaços",
  lexema: [" "],
  token: "S",
};

export const combinedTokens = [
  bracketOpener,
  bracketCloser,
  numbers,
  operators,
  spaces,
];


//const alphabet = ["(", ")", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", " "]

export function automato(userInput: string, acceptedChars: IChar[]) {
    let inputLength = userInput.length;
    let inputIndex = 0;
    const table: IChar[] = []; // Tabela de símbolos
    while (inputIndex < inputLength) { // Percorre a string de entrada
        const foundCharacter = acceptedChars.find((char) => char.lexema.includes(userInput[inputIndex])); // Verifica se o caractere atual está nos caracteres aceitos
        if(!foundCharacter) throw new Error(`Lexema ${userInput[inputIndex]} inválido encontrado na posição ${inputIndex}`); // Se não estiver, lança um erro
        const charInTableIndex = table.findIndex((char) => char.name === foundCharacter.name) // Verifica se o caractere encontrado já está na tabela de símbolos
        if(charInTableIndex !== -1) { // Se estiver, verifica se o lexema já está na tabela
           if(!table[charInTableIndex].lexema.includes(userInput[inputIndex])){ // Checa se o lexema já está na tabela
                table[charInTableIndex].lexema.push(userInput[inputIndex]); // Se não, adiciona o lexema na tabela
           } 
        }
        else {
           table.push({ //Se não, adiciona o caractere encontrado na tabela de símbolos
                name: foundCharacter.name,
                lexema: [userInput[inputIndex]],
                token: foundCharacter.token
           }); 
        }
        inputIndex++; // Incrementa o índice da string de entrada
    }
    return table;
}

