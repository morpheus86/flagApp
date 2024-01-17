import React from "react";
import FlagCard from "../UI/FlagCard";
const Flag = ({ flags, capital, name, code }) => {
  return (
    <tr>
      <FlagCard flag={flags} name={name} capital={capital} code={code} />
    </tr>
  );
};

export default Flag;
