import React from "react";

const CardEventos = ({  title, description, image, date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description} </h3>
      <h3>
        <img src={image} alt={title} />
      </h3>
      <h5>{date}</h5>
    </div>
  );
};

export default CardEventos;
