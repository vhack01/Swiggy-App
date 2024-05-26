import { createContext } from "react";
const UserContext = createContext({
  loggedIn: "default user",
});

console.log("UserContext:", typeof UserContext);

export default UserContext;
