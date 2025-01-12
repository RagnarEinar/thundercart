import React from "react";
import { FullPageLoader, Logo } from "./styled.components";
import thunderLoaderlogo from "../../assets/thunderLoaderlogo.png";

const Loader: React.FC = () => {
  return (
    <FullPageLoader>
      <Logo src={thunderLoaderlogo} alt="Logo" />
    </FullPageLoader>
  );
};

export default Loader;
