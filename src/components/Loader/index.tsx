import React from "react";
import { FullPageLoader, Logo, LoaderText } from "./styled.components";
import thunderLoaderlogo from "../../assets/thunderLoaderlogo.png";

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <FullPageLoader>
      <Logo src={thunderLoaderlogo} alt="Logo" />
      {message && <LoaderText>{message}</LoaderText>}
    </FullPageLoader>
  );
};

export default Loader;