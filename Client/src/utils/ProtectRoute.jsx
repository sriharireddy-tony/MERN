/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useAuth } from "../contexts/AuthContest";
import { Navigate } from "react-router-dom";

export const ProtectRoute = ({children}) => {

  const { user } = useAuth();

  if(!user){
   return <Navigate to="/" />
  }

  console.log(children);
  return <>{children}</>;

};
