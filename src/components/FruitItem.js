import React from "react";
import "../styles/FruitItem.css";

const FruitItem = ({ fruitName, fruitEmoji, fruitId }) => (
  <li key={fruitId}>
    {fruitEmoji} {fruitName}
  </li>
);

export default FruitItem;
