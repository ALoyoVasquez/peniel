"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
import {
  Card,
  Input,
  Checkbox,
  Button, 
  Typography,
} from "@material-tailwind/react";
import { CREATE_USERS } from "@/app/server/index.js";

const createUsers = () => {
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
    if (data.password !== data.confirmPassword) {
      return  Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las Contraseñas no coinciden",
      });
    }
    Swal.showLoading();

     const res = await fetch(CREATE_USERS, {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        name : data.name,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
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
    if(res.ok){
      Swal.fire({
        title:"Usuario Creado con Éxito!" ,
        text: "Buen Trabajo!",
        icon: "success"
      });
      
      clearForm();
      router.push('/dashboard') ;
    }
  });


  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex items-center m-2 p-2"
    >
      <Typography variant="h4" color="blue-gray">
        Registro
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingresa los datos para el Registro.
      </Typography>
      <form className="mt-8 mb-2" onSubmit={onSubmit}>
        <div className="mb-1 flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Nombres
          </Typography>
          <Input
            size="md"
            placeholder="Nombres"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("name", {
              required: {
                value: true,
                message: "El Nombre es requerido",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message} </span>
          )}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Apellidos
          </Typography>

          <Input
            size="md"
            placeholder="Apellidos"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("lastName", {
              required: {
                value: true,
                message: "El Apellido es requerido",
              },
            })}
          />
          {errors.lastname && (
            <span className="text-red-500 text-xs">
              {errors.lastname.message}{" "}
            </span>
          )}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Correo Electronico
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            {...register("email", {
              required: {
                value: true,
                message: "El Correo Electronico es requerido",
              },
            })}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nombre de Usuario
          </Typography>
          <Input
            size="lg"
            placeholder="Usuario"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            {...register("username", {
              required: {
                value: true,
                message: "El nombre de Usuario es requerido",
              },
            })}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contraseña
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            {...register("password", {
              required: {
                value: true,
                message: "La Contraseña es requerida",
              },
            })}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Confirma la Contraseña
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "La Confirmarcion de la Contraseña es requerida",
              },
            })}
          />

          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Estoy de acuerdo con los
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terminos y Condiciones
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            required
          />
          {/*   <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
            Sign In
            </a>
          </Typography> */}
        </div>
        {/* <Button className="mt-4" fullWidth>
            Registrar
          </Button> */}
        <button className=" justify-center font-semibold bg-dark-text rounded w-full h-9 text-white hover:opacity-75">
          Registrar
        </button>
      </form>
    </Card>
    /*      <div className="flex w-full justify-center items-center">
          <Button className="mt-6 w-2/5 m-2 ">Agregar</Button>
          <Button className="mt-6 w-2/5 m-2">Cancelar</Button>
        </div>
      </form>
    </Card> */
  );
};

export default createUsers;
