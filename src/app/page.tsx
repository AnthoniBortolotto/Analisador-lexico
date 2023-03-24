"use client";
import { automato, combinedTokens } from "@/helpers/syntaxAnaliser";
import { useEffect, useState } from "react";

export default function Home() {
  const [table, setTable] = useState(automato("(5 + 2.23) * 4", combinedTokens));



  return (
    <main>
      <h1>Expressão: {"(D,A,F,O,S,P,R)+"}</h1>
      <h2>Entrada: {"(5 + 2.23) * 4"}</h2>
      <table>
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
        </tbody>
      </table>
    </main>
  );
}
