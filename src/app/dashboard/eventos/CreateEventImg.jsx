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
import { CREATE_EVENT_IMG } from "@/app/server/index.js";

const CreateEventImg = () => {
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
    const res = await fetch(CREATE_EVENT_IMG, {
      method: "POST",
      body: JSON.stringify({
        imagen: data.imagen,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      Swal.fire({
        title: "Imagen de Evento Agregado con Éxito!",
        text: "Buen Trabajo!",
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
      className="justify-center items-center p-4  border-4 inline-flex"
    >
      <Typography variant="h4" color="blue-gray" className="m-4">
        Cambiar Imagen de Evento
      </Typography>

      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={onSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Agregar Imagen
          </Typography>
          <Input
            size="lg"
            placeholder="url"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("imagen", {
              required: {
                value: true,
                message: "La Url de la Imagen es requerida",
              },
            })}
          />
          {errors.imagen && (
            <span className="text-red-500 text-xs">
              {errors.imagen.message}{" "}
            </span>
          )}
        </div>
        <button className=" justify-center font-semibold bg-dark-text rounded w-full h-9 text-white hover:opacity-75">
          Guardar
        </button>
      </form>
    </Card>
  );
};

export default CreateEventImg;
