"use client";
import { FaUser } from "react-icons/fa";
import { UserProfile } from "./preferencesContext";

const User: React.FC<{ users: UserProfile[] | undefined }> = ({ users }) => {
  return (
    <div
      className={`absolute flex gap-4`}
      style={{
        top: "calc(50% - 2.5rem)",
        left: `calc(50% - ${(users?.length ?? 1) * 2}rem)`,
      }}
    >
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <div
              className={`w-12 h-12 m-auto rounded-full border-4 border-white ${user.color}`}
            >
              <FaUser className="m-auto h-full text-white" size={"1.2em"} />
            </div>
            <p className="text-center">{user.username}</p>
            <p className="text-center text-gray-500">{user.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
