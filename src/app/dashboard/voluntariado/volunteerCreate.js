"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { CREATE_VOLUNTARIADO, GET_ALL_SEDES } from "@/app/server/index.js";

const volunteerCreate = () => {
  const [sedes, setSedes] = useState([]);
  const [ubicacionSede, setUbicacionSede] = useState("");
  const [mySede, setMySede] = useState("");

  //Cargar Toda la Agenda
  useEffect(() => {
    Swal.showLoading();
    fetch(GET_ALL_SEDES)
      .then((res) => res.json())
      .then((sedes) => {
        setSedes(sedes);
      });
    Swal.close();
  }, []);

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

    const res = await fetch(CREATE_VOLUNTARIADO, {
      method: "POST",
      body: JSON.stringify({
        sede: mySede,
        titulo: data.titulo,
        encargado: data.encargado,
        locacion: ubicacionSede,
        tiempo: data.tiempo,
        descripcion: inputValue,
        avatar: data.avatar,
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
        title: "Actividad para Voluntariado Creada con Éxito!",
        text: "Buen Trabajo!",
        icon: "success",
      });

      clearForm();
      router.push("/dashboard");
    }
  });

  const handlerSede = async (event) => {
    Swal.showLoading();
    const miSede = sedes.find((element) => element.id == event);

    setUbicacionSede(miSede.address);
    setMySede(miSede.id);
    Swal.close();
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex items-center m-2 p-2 "
    >
      <Typography variant="h4" color="blue-gray">
        Agregar Actividad para Voluntariado
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingresa los datos para el Registro.
      </Typography>
      <form className="mt-8 mb-2 w-3/4 font-montserrat" onSubmit={onSubmit}>
        <div className="mb-1 flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Sede
          </Typography>
          <Select
            label="Select Sede"
            id="sede"
            name="sede"
            onChange={handlerSede}
          >
            {sedes.map((sede) => (
              <Option key={sede.id} value={sede.id}>
                {sede.name}
              </Option>
            ))}
          </Select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Ubicación:
          </Typography>

          <Input
            type="text"
            {...register("locacion")}
            value={ubicacionSede}
            disabled
          ></Input>
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Vacante
          </Typography>
          <Input
            size="md"
            placeholder="Maestro de Niños"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("titulo", {
              required: {
                value: true,
                message: "El nombre la vacante es requerido",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">
              {errors.titulo.message}{" "}
            </span>
          )}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Encargado:
          </Typography>

          <Input
            size="md"
            placeholder="Nombre y Apellido"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("encargado", {
              required: {
                value: true,
                message: "El Nombre y Apellido del Encargado son requeridos",
              },
            })}
          />
          {errors.encargado && (
            <span className="text-red-500 text-xs">
              {errors.encargado.message}{" "}
            </span>
          )}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tiempo a dedicar Semanalmente:
          </Typography>
          <Input
            size="lg"
            placeholder="2 Horas - 1HR DOMINGO 1HR PLANIFICACION"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            {...register("tiempo", {
              required: {
                value: true,
                message: "El Tiempo es requerido",
              },
            })}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descripción: (Máx 250 caracteres)
          </Typography>
          <div>
            <input type="text" value={inputValue} onChange={handleChange}
            placeholder="Describa brevemente las responsabilidadedes de esta vacante."
            className="w-full h-10 border-2 border-blue-gray-200 rounded"
            />
            <p className="flex justify-end text-xs">Caracteres: {inputValue.length}</p>
          </div>

         {/*  <Input
            type="text"
            size="lg"
            
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            {...register("descripcion", {
              required: {
                value: true,
                message: "La Descripcion es requerida",
              },
              maxLength: 2,
              message: "Esssss",
            })}
          /> */}

          {/* {errors.descripcion && (
            <span className="text-red-500 text-xs">
              {errors.descripcion.message}{" "}
            </span>
          )} */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            URL Logo:
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Si posee un logo escriba aqui la URL"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("avatar", {
              required: {
                value: false,
                message: "El avatar es requerida",
              },
            })}
          />
        </div>

        <div className="flex justify-center">
          <button className="  font-semibold bg-dark-text rounded w-1/4 h-9 text-white hover:opacity-75">
            Registrar
          </button>
        </div>
      </form>
    </Card>
  );
};

export default volunteerCreate;
