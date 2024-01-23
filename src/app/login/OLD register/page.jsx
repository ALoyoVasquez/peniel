"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if(data.password !== data.confirmPassword){
      return alert("Passwords no coinciden")
    }
    
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        name : data.username,
        lastName: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    
    if(res.ok){
      router.push('/login')
    }
  });

  console.log(errors);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center bg-slate-950">
      <form onSubmit={onSubmit} className="w-1/3 border-4 p-4 rounded-lg bg-blue-gray-50">
        <h1 className="font-bold text-2xl mb-4 text-slate-400">Registro</h1>
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          UserName
        </label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username es requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 text-slate-500 w-full"
        />
        {errors.username && (
          <span className="text-red-500 text-xs">
            {errors.username.message}{" "}
          </span>
        )}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          E-mail
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email es requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 text-slate-500 w-full"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message} </span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password es requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 text-slate-500 w-full"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}{" "}
          </span>
        )}
        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirma Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "La confirmación del Password es requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 text-slate-500 w-full"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}{" "}
          </span>
        )}
        <button className="w-full bg-blue-500 rounded-lg p-3 mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
