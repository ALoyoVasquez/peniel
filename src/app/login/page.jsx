"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Checkbox, Typography } from "@material-tailwind/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
      //alert(res.error);
    } else {
      router.push("/dashboard");
      console.log("Enviando a /dashboard");
    }

    //console.log(res);
  });

  return (
    <div className="flex justify-center items-center p-2 h-[calc(100vh-7rem)]  font-montserrat sm:p-4">
      <form
        className="flex-col  w-full p-2 sm:w-1/4 sm:p-8"
        onSubmit={onSubmit}
      >
        <h1 className="flex justify-center font-bold text-2xl mb-4">
          INICIA SESION
        </h1>

        {error && (
          <p className="bg-red-500 text-white text-lg p-3 rounded items-center">
            {error}{" "}
          </p>
        )}
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Correo Electrónico:
        </Typography>
        <Input
          size="lg"
          type="email"
          placeholder="email@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-11/12"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          required
          {...register("email", {
            required: {
              value: true,
              message: "El Correo Electrónico es requerido",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message} </span>
        )}
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Contraseña
        </Typography>
        <Input
          type="password"
          size="lg"
          placeholder="********"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-11/12"
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
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}{" "}
          </span>
        )}
        <button className="mt-4 justify-center font-semibold bg-dark-text rounded w-full h-9 text-white hover:opacity-75">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
