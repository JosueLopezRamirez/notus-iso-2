import React from "react";
import { css } from "@emotion/react";
import { CircleLoader, PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Loader({ type = "circle" }) {
  const renderSpinner = () => {
    if (type === "circle")
      return (
        <CircleLoader
          color="#9013FE"
          loading={true}
          css={override}
          size={150}
        />
      );

    if (type === "pacman")
      return (
        <PacmanLoader
          color="#000000"
          loading={true}
          css={override}
          size={50}
        //   margin={5}
        />
      );
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      {renderSpinner()}
      {/* <span className="inline-block text-[#9013FE] font-medium mt-3">
        Cargando...
      </span> */}
    </div>
  );
}
