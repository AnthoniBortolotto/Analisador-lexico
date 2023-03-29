"use client";
import { automato, combinedTokens, IChar } from "@/helpers/syntaxAnaliser";
import { useState } from "react";
import "./css/style.css";

export default function Home() {
	const [inputString, setInputString] = useState("(4 + 2.23) * 5"); // estado para a string de entrada
	//usestate de table vazio mas sem erros
	const [table, setTable] = useState<IChar[]>([]); // estado para a tabela
	const [defaultString, setDefaultString] = useState("(4 + 2.23) * 5"); // estado para a string de entrada padrão
	const [showTable, setShowTable] = useState(false); // adicionando um estado para controlar se a tabela deve ser exibida ou não
	const [errorMsgs, setErrorMsgs] = useState<string[]>([]);

	const handleInputChange = (event: { target: { value: any } }) => {
		const inputValue = event.target.value;

		setInputString(inputValue);

		//se o valor for vazio, a tabela não deve ser exibida
		if (inputValue === "") {
			setShowTable(false);
		}
	};

	const handleButtonClick = () => {
		const [tableData, errors] = automato(inputString, combinedTokens);
		setTable(tableData);
		setDefaultString(inputString);
		setShowTable(true); // mudando o estado para exibir a tabela
		setErrorMsgs([...errors]);
	};

	return (
		<main className="container">
			<h1>Expressão: {"(D,A,F,O,S,P,N)+"}</h1>
			<label htmlFor="inputString">Digite a string de entrada:</label>
			<input type="text" id="inputString" placeholder="Ex. (4 + 2.23) * 5" value={inputString} onChange={handleInputChange} />
			<button onClick={handleButtonClick}>Analisar</button>
			{errorMsgs.length > 0 &&
				errorMsgs.map((msg, i) => (
					<p key={i} className="error">
						{msg}
					</p>
				))}
			{showTable && (
				<div className="table-container">
					<h2>Entrada: {defaultString}</h2>
					<table className="animated-table">
						<thead>
							<tr>
								<td>Nome</td>
								<td>Lexemas</td>
								<td>Símbolo</td>
							</tr>
						</thead>
						<tbody>
							{table.map((item, index) => (
								<tr key={index}>
									<td>{item.name}</td>
									<td>
										{item.lexema.map((lex, i) => {
											return <span key={i}>{lex} </span>;
										})}
									</td>
									<td>{item.token}</td>
								</tr>
							))}
							{errorMsgs.length > 0 && (
								<tr>
									<td>Caracteres inválidos</td>
									<td>
										{errorMsgs.map((msg, i) => {
											return <span key={i}>{msg[7]} </span>;
										})}
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			)}
		</main>
	);
}
