import React, { createContext, useState } from "react";
import "./Gradpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Has Money: {money}</p>
      <section className="flex">
        <MoneyContext.Provider value={[money, setMoney]}>
          <RingContext.Provider value="golden ring">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </RingContext.Provider>
        </MoneyContext.Provider>
      </section>
    </div>
  );
};

export default Grandpa;

/***
 * 1. create context & export it
 * 2. create a provider and pass a value
 * 3. use useContext to receive
 */
