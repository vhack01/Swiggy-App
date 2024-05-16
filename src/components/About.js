import UserCard from "./UserCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const About = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("useEffect About");
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("https://api.github.com/gists/public");
    const json = await res.json();
    console.log(json);
    if (json) {
      setUsers(json);
    }
  }

  return (
    <div className="about-container">
      <div className="user-card-container">
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
