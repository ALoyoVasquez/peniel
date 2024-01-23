// LOCAL
const CREATE_USERS = "http://localhost:3000/server/users"; //Crear Usuarios
const GET_ALL_USERS = "http://localhost:3000/server/users"; //Obtener Todos los Usuarios

//eventos
const CREATE_EVENTOS = "http://localhost:3000/server/eventos"; //Agregar un Evento Nuevo
const GET_ALL_EVENTOS = "http://localhost:3000/server/eventos"; //Obtener todos los Eventos
const CREATE_EVENT_IMG = "http://localhost:3000/server/eventoImg"; //Agregar una Imagen Evento 
const GET_ALL_EVENT_IMG = "http://localhost:3000/server/eventoImg"; //Obtener todas las URLs de las Imagenes Eventos

//SEDES
const CREATE_SEDES = "http://localhost:3000/server/sedes"; //Agregar una Nuev Sede
const GET_ALL_SEDES = "http://localhost:3000/server/sedes"; //Obtener todos las Sedes
const EDIT_SEDE = "http://localhost:3000/server/sedes"; //Obtener todos las Sedes

//Voluntariado
const CREATE_VOLUNTARIADO = "http://localhost:3000/server/voluntariado"; //Agregar un Evento Nuevo
const GET_ALL_VOLUNTARIADO = "http://localhost:3000/server/voluntariado"; //Obtener todos los Eventos

const server = "http://localhost:3000/";

// backend

/* const server = 'https://super-market-shop-preview.up.railway.app';
const PRODUCT = `${server}/product/`;
const CUSTOMER = `${server}/customer/`;
const ORDER_DETAIL = `${server}/orderDetail/`;
const ORDERS = `${server}/orders/`;
const SHOPPINGCART = `${server}/shoppingCart/`;
const CATEGORY = `${server}/category/`;
const COMMENT = `${server}/comment/`
const ALLBUY = `${server}/buy/` */

export {
  server,
  
  CREATE_USERS,
  GET_ALL_USERS,

  CREATE_EVENTOS,
  GET_ALL_EVENTOS,

  CREATE_EVENT_IMG,
  GET_ALL_EVENT_IMG,
  
  CREATE_SEDES,
  GET_ALL_SEDES,
  EDIT_SEDE,
  
  CREATE_VOLUNTARIADO,
  GET_ALL_VOLUNTARIADO,
};
