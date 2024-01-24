"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { CREATE_SEDES } from "@/app/server/index.js";

const SedesCreate = () => {
  /* const Swal = require('sweetalert2') */
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
    Swal.showLoading();

    const res = await fetch(CREATE_SEDES, {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        pastores: data.pastores,
        address: data.address,
        email: data.email,
        imagen: data.imagen,
        fotoPastores: data.fotoPastores,
        horarios: data.horarios,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 400) {
      const response = await res.json();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.message,
      });
      /* alert(response.message); */
    }
    if (res.ok) {
      Swal.fire({
        title: "Buen Trabajo!",
        text: "Sede Creada con Éxito!",
        icon: "success",
      });

      clearForm();
      router.push("/dashboard");
    }
  });

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex items-center m-1 p-2 w-full"
    >
      <Typography variant="h4" color="blue-gray">
        Registra una Nueva Sede
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingresa los datos de la Sede para el nuevo Registro.
      </Typography>
      <form className="mt-4 mb-2  w-3/5 " onSubmit={onSubmit}>
        <div className="mb-1 flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Nombre de la Sede
          </Typography>
          <Input
            size="md"
            placeholder="Nombre de la Sede"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("name", {
              required: {
                value: true,
                message: "El Nombre de la Sede es requerido",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message} </span>
          )}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Pastores de la Sede
          </Typography>

          <Input
            size="md"
            placeholder="Nombre de los Pastores"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("pastores", {
              required: {
                value: true,
                message: "El Nombre de los Pastores es requerido",
              },
            })}
          />
          {errors.pastores && (
            <span className="text-red-500 text-xs">
              {errors.pastores.message}{" "}
            </span>
          )}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Direccion de la Sede
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Calle, Avenida, Sector"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            {...register("address", {
              required: {
                value: true,
                message: "La Direccion de la Sede es requerido",
              },
            })}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Correo Electronico
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="sede@peniel.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email", {
              required: {
                value: true,
                message: "Falta el Email",
              },
            })}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Horarios
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Domingo 1 Turno 8AM 2 TURNO 11AM, Martes Discipulado 4PM"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            {...register("horarios", {
              required: {
                value: true,
                message: "Los Horarios son requeridos",
              },
            })}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Imagen de la Sede
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="url"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("imagen", {
              required: {
                value: true,
                message: "La Imagen para la Nueva Sede es requerida",
              },
            })}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Foto de los Pastores de la Sede
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="url"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("fotoPastores", {
              required: {
                value: true,
                message: "La Foto de los Pastores para la Nueva Sede es requerida",
              },
            })}
          />
        </div>

        <div className="flex justify-center m-2 ">
          <button className="justify-center font-semibold bg-dark-text rounded w-1/3 h-9 text-white hover:opacity-75">
            Registrar
          </button>
        </div>
      </form>
    </Card>
  
  );
};

export default SedesCreate;
