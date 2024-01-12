import React from 'react'

const createEventos = () => {
  return (
    <div >
        <form action=""className="flex-col m-2 p-4">
            <label htmlFor="title">Titulo</label>
            <input type="text" />
            <label htmlFor="place">Lugar</label>
            <input type="text" />
            <label htmlFor="dateEvent">Fecha</label>
            <input type="date" />
        </form>
    </div>
  )
}

export default createEventos