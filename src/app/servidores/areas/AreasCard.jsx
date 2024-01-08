import React from "react";
// import Image from 'next/image'

const AreasCard = ({titulo, sede, descripcion, avatar, encargado, tiempo, horario}) => {
  return (
    <div className="rounded-lg max-w-sm w-full lg:max-w-full lg:flex hover:scale-110 cursor-pointer">
      <div
        className="h-50 lg:h-auto lg:w-50 flex-none bg-cover rounded-s lg:rounded-t-none lg:rounded-lg text-center overflow-hidden"
        ////style="`background-image: url('/img/card-left.jpg')`"
        style={{ backgroundImage: `url('${avatar}')` }}
        title={encargado}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
            {sede}
          </p>
          <div className="text-gray-900 font-bold text-md mb-2">
            {titulo}
          </div>
          <p className="text-gray-700 text-xs">
            {descripcion}
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
           // src={`/peniel-web/src/img/${avatar}`}
            src={avatar}
            alt="logo del ministerio"
          />
          
          <div className="text-sm">
            {/* <p className="text-gray-900 leading-none text-sm font-bold">{encargado} </p> */}
            <p className="text-gray-600 text-xs">{tiempo}</p>
            <p className="text-gray-600 text-xs">{horario}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasCard;
