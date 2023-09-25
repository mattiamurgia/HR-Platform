import React from "react";
import Navbar from "../mainComponents/navbar/Navbar";
import Error from "./error";
import ContainerFooter from "../mainComponents/footer/containerFooter";

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
