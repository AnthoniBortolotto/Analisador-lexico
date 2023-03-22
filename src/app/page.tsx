"use client";
import { automato, combinedTokens } from "@/helpers/syntaxAnaliser";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    console.log("(5 + 5) * 4", automato("(5 + 5) * 4", combinedTokens));
   // console.log("5 + a", automato("5 + a", combinedTokens));
  }, []);

  return <main>Oi</main>;
}
