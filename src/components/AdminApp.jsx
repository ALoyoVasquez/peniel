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

//? USUARIOS;
const UsersList = React.lazy(() => import("@/app/dashboard/users/UsersList"));
//! USUARIOS;

import PanelAdmin from "@/app/dashboard/PanelAdmin";
import dataProvider from "@/components/dataProvider.js";
//? Eventos
import createEventos from "@/app/dashboard/eventos/createEventos";
import EventoList from "@/app/dashboard/eventos/EventosList";
//! Eventos;

/* const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com"); */
/* const dataProvider = jsonServerProvider("https://localhost:3000/server"); */

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
      edit={EditGuesser}
      create={createEventos}
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
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      icon={FaChurch}
    />
    <Resource
      options={{ label: "Voluntariado" }}
      name="volunteer"
      list={ListGuesser}
      edit={EditGuesser}
      icon={FaHandPaper}
    />
  </Admin>
);

export default AdminApp;
