import { useContext } from "react";
import APIContext from "../../store/contexts/APIContext";
import "./Error.css";

const Error = () => {
  const {
    apiStatus: { error },
  } = useContext(APIContext);
  return <>{error && <p className="error">Error fetching data</p>}</>;
};

export default Error;
