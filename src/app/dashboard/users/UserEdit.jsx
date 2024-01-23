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

const UserEdit = (props) => {
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

  return (
    <Edit {...props} className="inline-flex justify-center m-2 font-montserrat">
      <SimpleForm
        title="Editar Usuario"
        className="inline-flex "
        toolbar={<EditToolbar />}
      >
        <h1 className="font-bold text-2xl">Editar Usuario</h1>
        <TextInput source="name" label="Nombre" />
        <TextInput source="lastName" label="Apellido" />
        <TextInput source="email" label="Correo Electrónico" disabled />
        <TextInput source="username" label="Usuario" disabled />
        <PasswordInput source="password" label="Contraseña" />
        <div className="flex justify-evenly w-full">
          <SaveButton label="Guardar" />
          <DeleteButton label="Eliminar" />
        </div>
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
