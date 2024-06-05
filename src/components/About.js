import UserCard from "./UserCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const About = () => {
  const data = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("https://api.github.com/gists/public");
      const json = await res.json();
      if (json) {
        setUsers(json);
      }
    } catch (err) {
      console.log("Failed to get about data");
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {users !== undefined && users?.length === 0 ? (
          <Shimmer />
        ) : (
          users.map((user) => <UserCard key={user?.id} userData={user} />)
        )}
      </div>
    </div>
  );
};

export default About;
