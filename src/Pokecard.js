import React from "react";
import "./Pokecard.css";

// Shows a single Pokemon, with their name, image, and type.

const Pokecard = ({ card }) => (
  <li className="Pokecard">
    <h3>{card.name}</h3>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
      alt={card.name}
    />
    <p>Type: {card.type}</p>
    <p>EXP: {card.base_experience}</p>
  </li>
);

export default Pokecard;
