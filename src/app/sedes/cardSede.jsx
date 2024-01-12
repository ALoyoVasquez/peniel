import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const SedesCard = ({ nombre, pastores, direccion, avatar }) => {
  return (
    <Card
      shadow={false}
      className="relative font-montserrat grid w-full h-[22rem] max-w-[14rem] items-end justify-center overflow-hidden text-center border-2 m-3 sm:m-1 "
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{
          backgroundImage: `url(${avatar})`,
        }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h4"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {nombre}
        </Typography>
        <Typography variant="h7" className="mb-4 text-gray-400">
          {direccion}
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white "
          src={avatar}
          /* src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" */
        />
        <Typography variant="h7" className="mb-4 text-white font-semibold">
          {pastores}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default SedesCard;
