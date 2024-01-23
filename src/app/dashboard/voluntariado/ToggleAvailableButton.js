import React from "react";
import { useRecordContext, Button, useDataProvider } from "react-admin";
import Swal from 'sweetalert2';

const ToggleAvailableButton = () => {
  const dataProvider = useDataProvider(); //useDataProvider para obtener dataProvider
  const record = useRecordContext();
  //   console.log("🚀 ~ file: ToggleAvailableButton.js:9 ~ ToggleAvailableButton ~ record:", record)

  if (!record) {
    return null; // Evita errores si record es indefinido
  }

  const handleToggleAvailable = async () => {
    try {
      let currentValue = record.status;
      //console.log("🚀 ~ file: ToggleAvailableButton.js:24 ~ handleToggleAvailable ~ currentValue:", currentValue);

      {
        currentValue === "A" ? (currentValue = "E") : (currentValue = "A");
      }
      /* console.log(
        "🚀 ~ file: ToggleAvailableButton.js:24 ~ handleToggleAvailable ~ currentValue:",
        currentValue
      ); */
      
      // Mostrar Swal.loading() al hacer clic en el botón
      const loadingSwal = Swal.fire({
        title: "Cambiando el estatus de la Vacante",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await dataProvider.update("voluntariado", {
        id: record.id,
        data: {
          status: currentValue,
          sede: record.sede, // Utilizar record.sede en lugar de data.sede
          titulo: record.titulo,
          encargado: record.encargado,
          locacion: record.locacion,
          tiempo: record.tiempo,
          descripcion: record.descripcion,
          avatar: record.avatar,
        },
      });

      loadingSwal.close();
      console.log("ToggleAvailableButton - Toggled successfully");
    } catch (error) {
      console.error("Error al cambiar el Estatus:", error);
    }
  };

  return (
    <Button
      label={record.status === "A" ? "Disponible" : "Cerrada"}
      onClick={handleToggleAvailable}
      style={{
        color: record.status === "A" ? "green" : "red",
        fontWeight: "bold",
      }}
    />
  );
};

export default ToggleAvailableButton;
