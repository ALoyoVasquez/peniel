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
} from 'react-admin';

/* const ListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <FilterButton/>
        <CreateButton label="Crear Usuario"/>
        <ExportButton label="Exportar"/>
    </TopToolbar>
); */

/* const userFilters = [
    <TextInput label="Nombre" source="name" defaultValue="" />,
    <TextInput label="Correo" source="email" defaultValue="" />,
]; */

const EventoList = (props) => (
        
        <List {...props} >
        <DatagridConfigurable>
            <TextField label="Id" source="id" />
            <TextField label="Titulo" source="title" />
            <EmailField label="Lugar" source="place" />
            <TextField label="Fecha" source = "dateEvent" />
            <EditButton label="Editar" />
           {/*  <ShowButton record={props.record} label="Ver" basepath="/customer" /> */}
        </DatagridConfigurable>
    </List>
);


export default EventoList
 