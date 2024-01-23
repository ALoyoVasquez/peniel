import { useRouter } from "next/navigation";
import {
  CreateButton,
  Button,
  DatagridConfigurable,
  ExportButton,
  FilterButton,
  List,
  SelectColumnsButton,
  TopToolbar,
  TextInput,
  TextField,
  EmailField,
  ShowButton,
  EditButton,
  DateField,
} from "react-admin";
import { FaRegCalendarCheck } from "react-icons/fa";

const Empty = () => (
  <div className="flex flex-col w-full p-14 font-montserrat text-4xl m-4">
    <h1 className="flex justify-center m-4 font-bold">
      Actualmente no hay <br /> Eventos registrados
    </h1>
    <FaRegCalendarCheck
      style={{
        color: "gray",
        fontSize: "96px",
        alignSelf: "center",
        margin: "16px",
      }}
    />
    <CreateButton
      label="Agregar Evento"
      className="flex justify-center bg-LightSlateGray w-auto hover:bg-blue-gray-900 p-24"
    />
  </div>
);

const ListActions = () => {
  return (
    <TopToolbar>
      <SelectColumnsButton />
      <CreateButton label="Crear Evento" />
      <ExportButton label="Exportar" />
    </TopToolbar>
  );
};

/* const eventFilters = [
 /*  <TextInput label="Mes" source="month" defaultValue="" />, */
{
  /* <TextInput label="Correo" source="email" defaultValue="" />, */
}
/* ]; */

const EventoList = (props) => (
  <List
    {...props}
    title={"Eventos - Peniel "}
    empty={<Empty />}
    actions={<ListActions />}
    /*   filters={eventFilters} */
  >
    <DatagridConfigurable>
      <TextField label="Id" source="id" />
      <TextField label="Titulo" source="title" />
      <TextField label="Lugar" source="place" />
      <DateField label="Fecha y Hora" source="dateEvent" showTime />
      <EditButton label="Editar" />
      <ShowButton record={props.record} label="Ver" basepath="/eventos" />
    </DatagridConfigurable>
  </List>
);

export default EventoList;
