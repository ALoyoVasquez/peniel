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
import ToggleAvailableButton from "./ToggleAvailableButton";
import { FaHandPaper } from "react-icons/fa";

const Empty = () => (
  <div className="flex flex-col w-full p-14 font-montserrat text-4xl m-4">
    <h1 className="flex justify-center m-4 font-bold">
      Actualmente no hay Actividades <br /> para Voluntariado disponibles
    </h1>
    <FaHandPaper
      style={{
        color: "gray",
        fontSize: "96px",
        alignSelf: "center",
        margin: "16px",
      }}
    />
    <CreateButton
      label="Agregar Actividad"
      className="flex justify-center bg-LightSlateGray w-auto hover:bg-blue-gray-900 p-24"
    />
  </div>
);

const ListActions = () => {
  return (
    <TopToolbar>
      <SelectColumnsButton />
      <CreateButton label="Crear Actividad" />
      <ExportButton label="Exportar" />
    </TopToolbar>
  );
};

const volunteerList = (props) => (
  <List
    title={"Actividades para Voluntariado"}
    {...props}
    empty={<Empty />}
    actions={<ListActions />}
  >
    <DatagridConfigurable>
      <TextField label="Id" source="id" />
      <TextField label="Sede" source="sede" />
      <TextField label="Titulo" source="titulo" />
      <TextField label="encargado" source="encargado" />
      <TextField label="descripcion" source="descripcion" />
      <TextField label="locacion" source="locacion" />
      <TextField label="Imagen" source="avatar" />
      {/* <TextField label="Estatus" source="status" /> */}
      <ToggleAvailableButton source="status" label="Vacante" />
      <EditButton label="Editar" />
      <ShowButton record={props.record} label="Ver" basepath="/voluntariado" />
    </DatagridConfigurable>
  </List>
);

export default volunteerList;
