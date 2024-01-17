import React from "react";

const FlagCard = ({ name, capital, flag, code }) => {
  const capital_name = capital ? capital[0] : "";
  return (
    <>
      <td>{name.common}</td>
      <td>{capital_name}</td>
      <td>
        <img src={flag.svg} alt={flag.alt} />
      </td>
    </>
  );
};

export default FlagCard;
