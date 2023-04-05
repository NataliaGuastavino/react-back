import React from "react";
import './ItemListContainer.css';

export const ItemListContainer = (props) => {
  return (
    <div>
      <h2>{props.greeting}</h2>
    </div>
  );
};