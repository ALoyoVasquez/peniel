"use client";
import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  Button,
  Dialog,
  Card,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import Detail from "./Detail";

const AreasCard = ({
  id,
  titulo,
  sede,
  descripcion,
  avatar,
  encargado,
  tiempo,
  horario,
}) => {
  /* const [showDetailModal, setShowDetailModal] = useState(false); */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  let descripcionN = descripcion.slice(0,100);
  /* const handleCardClick = () => {
    setShowDetailModal(true);
  }; */

  return (
    <div className="rounded-lg max-w-sm w-full lg:max-w-full lg:flex hover:scale-110 cursor-pointer">
      <div onClick={handleOpen}>
        <div
          className="h-50 lg:h-auto lg:w-50 flex-none bg-cover rounded-s lg:rounded-t-none lg:rounded-lg text-center overflow-hidden"
          style={{ backgroundImage: `url('${avatar}')` }}
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <FaLocationDot />
              {sede}
            </p>
            <div className="text-gray-900 font-bold text-md mb-2">{titulo}</div>
            <span className="text-gray-700 text-xs leading-3 h-96">{descripcionN}...</span>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={avatar}
              alt="logo del ministerio"
            />

            <div className="text-sm">
              <p className="text-gray-900 leading-none text-sm font-bold">
                {encargado}{" "}
              </p>
              <p className="text-gray-600 text-xs">{tiempo}</p>
              <p className="text-gray-600 text-xs">{horario}</p>
            </div>
          </div>
        </div>
       {/*  <Button onClick={handleOpen}  className="flex justify-center items-center font-bold bg-dark-text rounded w-28 sm:w-40 h-10 text-white hover:opacity-75">
          B
          </Button> */}
      </div>
    
      <>
        <Dialog
          open={open}
          handler={handleOpen}
          className=" bg-white p-2 m-2 w-4/5 sm:w-3/4"
        >
          <Detail
          key={id}
            id={id}
            titulo={titulo}
            sede={sede}
            encargado={encargado}
            avatar={avatar}
            tiempo={tiempo}
            descripcion={descripcion}
           
            /* show={showDetailModal}
            onHide={() => setShowDetailModal(false)} */
          />

          <DialogFooter className="space-x-2">
            <Button
              variant="gradient"
              onClick={handleOpen}
              className="bg-light-text hover:bg-gray-100 text-white font-semibold  border border-light-bg rounded shadow"
            >
              Cancelar
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    </div>
  );
};

export default AreasCard;
