import { useRouteError } from "react-router-dom";
const Error = () => {
  const errMsg = useRouteError();
  console.log(errMsg);
  return (
    <h1>
      <i>Oops!!! </i> something went wrong
      <h2>
        {errMsg.status} {errMsg.statusText}
      </h2>
    </h1>
  );
};

export default Error;
