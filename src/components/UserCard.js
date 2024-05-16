import { useEffect, useState } from "react";
import { GIT_USER_IMAGE } from "../utils/constants";
const UserCard = ({ userData }) => {
  const { owner } = userData;
  const [count, setCount] = useState([]);

  return (
    <>
      <div className="user-card">
        <div className="user-image-container">
          <img src={`${GIT_USER_IMAGE}/${owner?.id}`} className="user-image" />
        </div>
        <div className="user-body">
          <h2>{owner?.login}</h2>
          <h3>{owner?.type}</h3>
          <p className="user-description">
            I am a student at Lovely Professional University, Phagwara, Punjab{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
