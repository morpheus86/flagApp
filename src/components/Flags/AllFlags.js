import { useSelector } from "react-redux";
import Flag from "./Flag";

const AllFlags = () => {
  const allFlags = useSelector((state) => state.flag.flags);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        {allFlags.map((flag, idx) => (
          <Flag key={idx} {...flag} />
        ))}
      </tbody>
    </table>
  );
};

export default AllFlags;
