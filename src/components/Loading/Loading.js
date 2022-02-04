import { useContext } from "react";
import APIContext from "../../store/contexts/APIContext";
import "./Loading.css";

const Loading = () => {
  const {
    apiStatus: { loading },
  } = useContext(APIContext);

  return (
    <>
      {loading && (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
    </>
  );
};

export default Loading;
