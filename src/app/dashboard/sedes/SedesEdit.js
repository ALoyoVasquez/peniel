"use client";
import {
  DeleteWithConfirmButton,
  Toolbar,
  DeleteButton,
  SaveButton,
  useRecordContext,
} from "react-admin";

import { Edit, SimpleForm, TextInput, PasswordInput } from "react-admin";
import React, { useState } from "react";

const EditToolbar = () => {
  const record = useRecordContext();
  <Toolbar>
    {/* <SaveButton label="Guardar" />
    <DeleteWithConfirmButton
      confirmContent="You will not be able to recover this record. Are you sure?"
      confirmColor="warning"
      translateOptions={{ name: record.name }}
    /> */}
  </Toolbar>;
};

const SedesEdit = (props) => (
  <Edit
    {...props}
    className="flex justify-center font-montserrat"
  >
    <SimpleForm title="Editar Sede" className="w-96" toolbar={<EditToolbar />}>
      <h1 className="font-bold text-2xl">Editar Sede</h1>
      <TextInput label="Sede" source="name" className="w-full" />
      <TextInput label="Pastores" source="pastores" className="w-full" />
      <TextInput label="Correo Electrónico" source="email" className="w-full" />
      <TextInput label="Horarios" source="horarios" className="w-full" />
      <TextInput label="Direccion" source="address" className="w-full" />
      <TextInput label="Imagen" source="imagen" className="w-full" />
      <TextInput label="Foto Pastores" source="fotoPastores" className="w-full" />
      {/* <PasswordInput source="password" label="Contraseña" /> */}
      <div className="flex justify-evenly w-full ">
        <SaveButton label="Guardar" />
        <DeleteButton label="Eliminar" />
      </div>
    </SimpleForm>
  </Edit>
);
export default SedesEdit;
