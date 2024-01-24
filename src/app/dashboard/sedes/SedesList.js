import {
  CreateButton,
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
} from "react-admin";
import { FaWarehouse } from "react-icons/fa";

const Empty = () => (
  <div className="flex flex-col w-full p-14 font-montserrat text-4xl m-4">
    <h1 className="flex justify-center m-4 font-bold">
      Actualmente no hay <br /> Sedes registradas
    </h1>
    <FaWarehouse
      style={{
        color: "gray",
        fontSize: "96px",
        alignSelf: "center",
        margin: "16px",
      }}
    />
    <CreateButton
      label="Agregar Sede"
      className="flex justify-center bg-LightSlateGray w-auto hover:bg-blue-gray-900 p-24"
    />
  </div>
);

const ListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <FilterButton />
    <CreateButton label="Agregar Sede" />
    <ExportButton label="Exportar" />
  </TopToolbar>
);

const sedesFilters = [
  <TextInput label="Nombre" source="name" defaultValue="" />,
  <TextInput label="Pastores" source="pastores" defaultValue="" />,
];

const SedesList = (props) => (
  <List
    title={"Sedes Actuales del COCI PENIEL "}
    {...props}
    empty={<Empty />}
    actions={<ListActions />}
    filters={sedesFilters}
  >
    <DatagridConfigurable>
      <TextField label="Id" source="id" />
      <TextField label="Sede" source="name" />
      <TextField label="Pastores" source="pastores" />
      <EmailField label="Correo Electrónico" source="email" />
      <TextField label="Horarios" source="horarios" />
      <TextField label="Direccion" source="address" />
      <TextField label="Imagen" source="imagen" />
      <TextField label="Pastores Foto" source="fotoPastores" />
      <EditButton label="Editar" />
      <ShowButton record={props.record} label="Ver" basepath="/sedes" />
    </DatagridConfigurable>
  </List>
);

export default SedesList;
