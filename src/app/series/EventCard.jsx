import React from "react";

const EventCard = ({nombre, imagen}) => {

  
  return (
    <div className="container text-white rounded-md">
    {/*   Evento
      <h1>{nombre} </h1>
      <h3>{fecha} </h3>
      <h3>{lugar} </h3> */}
      <img src={imagen} alt={nombre} className="rounded-lg" />

    </div>
  );
};

export default EventCard;
