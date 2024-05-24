import { useEffect, useState } from "react";
import { GIT_USER_IMAGE } from "../utils/constants";
const UserCard = ({ userData }) => {
  const { owner } = userData;
  const [count, setCount] = useState([]);
  console.log(owner);
  const { id, login, type } = owner;
  return (
    <>
      <div className="w-80 sm:w-80 text-sm bg-gray-0 rounded-md overflow-hidden mt-6 p-4 shadow-lg shadow-orange-200 border-gray-500 hover:border-gray-400 font-montserrat flex flex-col justify-between">
        <div className="flex flex-col items-center gap-y-2">
          <img
            src={`${GIT_USER_IMAGE}/${id}`}
            className="h-[14rem] w-[14rem] object-contain rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-base font-medium">{login}</h2>
          <h3>{type}</h3>
          <p className="user-description">
            I am a student at Lovely Professional University, Phagwara, Punjab
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
