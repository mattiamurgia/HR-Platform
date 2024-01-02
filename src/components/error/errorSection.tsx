import React from "react";
import Navbar from "../mainComponents/navbar/Navbar";
import Error from "./Error";
import ContainerFooter from "../mainComponents/footer/ContainerFooter";

const ErrorSection = () => {
  return (
    <div>
      <Navbar />
      <Error />
      <ContainerFooter />
    </div>
  );
};

export default ErrorSection;
