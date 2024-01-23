import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaPersonCircleCheck, FaLocationDot, FaClock } from "react-icons/fa6";

const Detail = (props) => {
  const { id, titulo, sede, encargado, avatar, tiempo, descripcion } = props;

  return (
    <Card className="w-full max-w-[48rem] flex-row ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          src={avatar}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="gray"
          className="flex mb-1 uppercase justify-center sm:text-lg text-xs sm:mb-2"
        >
          SIRVE COMO VOLUNTARIO
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2 text-base sm:text-2xl">
          {titulo}
        </Typography>
        <Typography color="gray" className="mb-2 font-normal text-xs sm:text-sm">
          {descripcion.slice(0, 250)}
        </Typography>
        <div className="flex uppercase  text-xs sm:text-sm font-bold ">
          {/* <FaPersonCircleCheck /> */}
          Encargado: {encargado}
        </div>
        <div className="flex justify-center items-center w-full font-bold uppercase mt-4 text-xs sm:text-sm">
          <div className="flex flex-col w-1/2 justify-center items-center">
            <FaLocationDot /> {sede}
          </div>
          <div className="flex flex-col w-1/2 justify-center items-center">
            <FaClock />
            {tiempo}
          </div>
        </div>
        
      </CardBody>
    </Card>
  );
};

export default Detail;
