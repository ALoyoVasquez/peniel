import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { CREATE_EVENTOS } from "@/app/server/index.js";
import CreateEventImg from "./CreateEventImg";

const createEventos = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const clearForm = () => {
    reset();
  };

  const onSubmit = handleSubmit(async (data) => {
    const date = new Date(data.dateEvent);
    const formattedDateTime = date.toISOString();

    const res = await fetch(CREATE_EVENTOS, {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        dateEvent: formattedDateTime,
        place: data.place,
        status: data.status,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      Swal.fire({
        title: "Evento Creado con Éxito!",
        text: "Buen Trabajo!",
        icon: "success",
      });

      clearForm();
      router.push("/dashboard");
    }
  });

  return (
    <div className="m-2 flex-col justify-center items-center  inline-flex">
      <div>
        <Card
          color="transparent"
          shadow={false}
          className="justify-center items-center p-4  border-4 inline-flex"
        >
          <Typography variant="h4" color="blue-gray" className="m-4">
            Agrega un Evento
          </Typography>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={onSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Titulo del Evento
              </Typography>
              <Input
                size="lg"
                placeholder="24 Horas de Adoracion"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("title", {
                  required: {
                    value: true,
                    message: "El Nombre del Evento es requerido",
                  },
                })}
              />
              {errors.title && (
                <span className="text-red-500 text-xs">
                  {errors.title.message}{" "}
                </span>
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Lugar del Evento
              </Typography>
              <Input
                size="lg"
                placeholder="Sede Peniel"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
                {...register("place", {
                  required: {
                    value: true,
                    message: "El Lugar del Evento es requerido",
                  },
                })}
              />
              {errors.place && (
                <span className="text-red-500 text-xs">
                  {errors.place.message}{" "}
                </span>
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Fecha y Hora del Evento
              </Typography>
              <Input
                type="datetime-local"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                required
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("dateEvent", {
                  required: {
                    value: true,
                    message: "La Fecha y la Hora son requeridos",
                  },
                })}
              />
              {errors.dateEvent && (
                <span className="text-red-500 text-xs">
                  {errors.dateEvent.message}{" "}
                </span>
              )}
            </div>
            <button className=" justify-center font-semibold bg-dark-text rounded w-full h-9 text-white hover:opacity-75">
              Agregar
            </button>
          </form>
        </Card>
      </div>
      <div className="m-2">
        <CreateEventImg />
      </div>
    </div>
  );
};

export default createEventos;
