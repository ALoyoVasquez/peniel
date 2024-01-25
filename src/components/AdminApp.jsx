// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";

//? ICONOS
import {
  FaUserFriends,
  FaBuilding,
  FaChurch,
  FaRegCalendarCheck,
  FaHandPaper,
} from "react-icons/fa";
//! Fin iconos

import PanelAdmin from "@/app/dashboard/PanelAdmin";
import dataProvider from "@/components/dataProvider.js";

//? USUARIOS;
const UsersList = React.lazy(() => import("@/app/dashboard/users/UsersList"));
const UserEdit = React.lazy(() => import("@/app/dashboard/users/UserEdit"));
const createUsers = React.lazy(()=> import("@/app/dashboard/users/createUsers"));
//! USUARIOS;

//? Eventos
const createEventos = React.lazy(() => import ("@/app/dashboard/eventos/createEventos"));
const EventoList = React.lazy(() => import ("@/app/dashboard/eventos/EventosList"));

//! Eventos;

//? Sedes
const SedesCreate = React.lazy(() => import ("@/app/dashboard/sedes/SedesCreate"));
const SedesList = React.lazy(() => import ("@/app/dashboard/sedes/SedesList"));
const SedesEdit = React.lazy(() => import ("@/app/dashboard/sedes/SedesEdit"));

//! Sedes;

//? Voluntariado
const volunteerList = React.lazy(() => import ("@/app/dashboard/voluntariado/volunteerList"));
const volunteerEdit = React.lazy(() => import ("@/app/dashboard/voluntariado/volunteerEdit"));
const volunteerCreate = React.lazy(() => import ("@/app/dashboard/voluntariado/volunteerCreate"));

//! Voluntariado;

const AdminApp = () => (
  <Admin
    options={{ label: "Panel" }}
    dashboard={PanelAdmin}
    dataProvider={dataProvider}
    darkTheme={{ palette: { mode: "dark" } }}
    /* layout={MyLayout} */
    // i18nProvider={i18nProvider}
    // title="{usuario.name}"
  >
    <Resource
      options={{ label: "Usuarios" }}
      name="users"
      list={UsersList}
      edit={UserEdit}
      create={createUsers}
      recordRepresentation="name"
      icon={FaUserFriends}
    />
    <Resource
      name="eventos"
      list={EventoList}
      edit={EditGuesser}
      create={createEventos}
      recordRepresentation="title"
      icon={FaRegCalendarCheck}
    />
    <Resource
      options={{ label: "Sedes" }}
      name="sedes"
      create={SedesCreate}
      list={SedesList}
      edit={SedesEdit}
      icon={FaChurch}
    />
    <Resource
      options={{ label: "Voluntariado" }}
      name="voluntariado"
      create={volunteerCreate}
      list={volunteerList}
      edit={EditGuesser}
      icon={FaHandPaper}
    />
  </Admin>
);

export default AdminApp;
