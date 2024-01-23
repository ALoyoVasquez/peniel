"use client";
import {
  DeleteWithConfirmButton,
  Toolbar,
  DeleteButton,
  SaveButton,
  useRecordContext,
  DateInput,
} from "react-admin";

import { Edit, SimpleForm, TextInput, PasswordInput } from "react-admin";
import React, { useState } from "react";

const EventosEdit = (props) => {
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
        title="Editar Evento"
        className="inline-flex "
        toolbar={<EditToolbar />}
      >
        <h1 className="font-bold text-2xl">Editar Evento</h1>
        <TextInput source="id" label="Id" disabled />
        <TextInput source="title" label="Titulo" />
        <TextInput source="place" label="Lugar" />
        <DateInput source="dateEvent" label="Fecha y Hora" />
        <input type="datetime-local" source="dateEvent" label="Fecha y Hora2" />
        <div className="flex justify-evenly w-full">
          <SaveButton label="Guardar" />
          <DeleteButton label="Eliminar" />
        </div>
      </SimpleForm>
    </Edit>
  );
};

export default EventosEdit;
