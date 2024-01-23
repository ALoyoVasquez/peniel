import axios from "axios";
import { stringify } from "query-string";
import { fetchUtils } from "react-admin";

/* import { server } from "../../utils/urlLocales"; */

/* const url = server; */
const url = "http://localhost:3000/server/";

const httpClient1 = fetchUtils.fetchJson;

const httpClient = axios.create({
  baseURL: url,
  /*  headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   }, */
});

const dataProvider = {
  //GET ALL
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      ...params.filter,
      _sort: field,
      _order: order,
    };

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    const url = `${resource}?${stringify(query)}`;

    /* if (params.filter.hasOwnProperty("categories")) {
      const url = `${server}/${resource}/productByCategory/${params.filter.categories}`;

      return axios
        .get(url)
        .then(({ data }) => ({
          data: data.slice(startIndex, endIndex), // Obtén solo los datos para la página actual
          total: data.length, // Total de registros en el frontend
        }))
        .catch(
          ({ error }) => console.log(error) // <span> Error</span>
        );
    }

    if (params.filter.name !== undefined && resource === "product") {
      const url = `${server}/${resource}/name?name=${params.filter.name}`;

      return axios
        .get(url)
        .then(({ data }) => ({
          data: data.slice(startIndex, endIndex), // Obtén solo los datos para la página actual
          total: data.length, // Total de registros en el frontend
        }))
        .catch(
          ({ error }) => console.log(error)
          // <span> Error</span>
        );
    } */

    const token = JSON.parse(localStorage.getItem("token"));
    return httpClient
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) =>
        // console.log(data),
        ({
          data: data.slice(startIndex, endIndex), // Obtén solo los datos para la página actual
          total: data.length, // Total de registros en el frontend
        })
      );
  },

  //fin GET ALL

  getOne: async (resource, params) => {
    console.log("🚀 ~ file: DataProvider - GetOne .js: 80  ");
    const token = JSON.parse(localStorage.getItem("token"));
    return httpClient
      .get(`${resource}/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => ({
        data: data,
      }));
  },

  create: async (resource, params) => {
    // console.log("create..");
    return httpClient.post(`${resource}`, params.data).then(({ data }) => ({
      data: { ...params.data, id: data.id },
    }));
  },

  update: async (resource, params) => {
    const { id, data } = params;

    try {
      const response = await axios.put(`${url}/${resource}/${id}`, data);
      console.log("🚀 ~ file: DataProvider - update  'TOKEN.js: 103  ");
      return { data: response.data };
    } catch (error) {
      // Manejo de errores
      throw new Error(error.response.data.message);
    }
  },

  /*  update: async (resource, params) => {
    console.log("🚀 ~ file: DataProvider - update .js: 99  ");
    const token = JSON.parse(localStorage.getItem("token"));
    const apiUrl = `${url}/${resource}/${params.id}`;
    return httpClient
      .put(`${resource}/${params.id}`, params.data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => ({
        data: data,
        
      }));
  }, */

  // update: (resource, params) => {
  //    console.log("🚀 ~ file: dataProvider.js:55 ~ params.data:", params.data)
  //   return httpClient.put(`${resource}/${params.id}`, params.data).then(({ data }) =>({
  //     data: data
  //   }));
  // },

  delete: async (resource, params) => {
    const apiUrl = `${url}/${resource}/${params.id}`;
    const { json } = await httpClient1(apiUrl, {
      method: "DELETE",
    });
    return { data: json };
  },

  /*  delete: (resource, params) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return httpClient
      .delete(`${resource}/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => ({
        data: data,
      }));
  }, */

  getMany: async (resource, params) => {
    console.log("Get Many..");
    // const { ids } = params;
    const { name } = params;
    // const query = {
    //   id: ids.join(","),
    // };
    // const url = `${resource}/name${stringify(query)}`;
    const url = `${resource}/name?name=${stringify(name)}`;

    return httpClient.get(url).then(({ data }) => ({
      data: data,
    }));
  },

  deleteMany: async (resource, params) => {
    const { ids } = params;

    try {
      console.log("🚀 ~ ids  ",ids);
      const response = await axios.delete(`${url}/${resource}/${params.ids}`,{
        data: { ids },
      });
      return { data: response.data };
    } catch (error) {
      // Manejo de errores
      throw new Error(error.response.data.message);
    }
  },
  /* deleteMany: async (resource, params) => {
    console.log("Eliminar MANy");
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const apiUrl = `${url}/${resource}?${stringify(query)}`;
    const { json } = await httpClient1(apiUrl, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  }, */
};

export default dataProvider;
