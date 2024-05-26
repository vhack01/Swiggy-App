import UserCard from "./UserCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const About = () => {
  const data = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("useEffect About");
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("https://api.github.com/gists/public");
    const json = await res.json();
    if (json) {
      setUsers(json);
    }
  }

  return (
    <div className="p-4">
      <h1>{data.loggedIn}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {users?.length === 0 ? (
          <Shimmer />
        ) : (
          users.map((user) => <UserCard key={user?.id} userData={user} />)
        )}
      </div>
    </div>
  );
};

export default About;
