import React from "react";
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
import "./Typewritter.css";

const MagicOcean = [
  "HTML5, CSS3, JS(ES6+)",
  "React, Redux, React-router",
  "Node.js, Express, GraphQL, MongoDB",
  "Git flow",
];
let index = 0;

function Typewritter() {
  const [ magicName, setMagicName ] = useState(`Familier with these skills`);
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 2 ? 0 : ++index;
        setMagicName(MagicOcean[index]);
      }, 5000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [magicName]
  );
  return (
    <div className="App">
      <p className="cursor">/ {name} /</p>
    </div>
  );
}

export default Typewritter
