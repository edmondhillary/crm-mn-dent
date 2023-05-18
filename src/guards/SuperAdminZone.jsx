import React, { useContext } from "react";
import { GlobalContext } from "../context/UserContext/UsersState";
import { NotFoundPage } from "../Components/404/NotFoundPage";

export const SuperAdminZone = ({ children }) => {
    const { user } = useContext(GlobalContext
        );
  
    // Reemplaza "Admin" con el rol adecuado para los administradores
    if (user?.role === "Employee") {
      // Puedes redirigir al usuario o simplemente devolver un componente de error
      return (<NotFoundPage subTitle = {'Acceso DENEGADO'} stats={'403'}/>);
    }
    return children;
  };