import { useEffect, useState } from "react";

const useInternetStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    ononline = (event) => {
      setStatus(true);
    };

    onoffline = (event) => {
      setStatus(false);
    };
  }, []);

  return status;
};

export default useInternetStatus;

// Another method to check internet connection
//   console.log("navigator:", window.navigator);
//   if (window.navigator.onLine) {
//     console.log("You are online");
//   } else {
//     console.log("You are offline");
//   }
