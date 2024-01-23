"use client";
import { FaUser } from "react-icons/fa";
import { UserProfile } from "./preferencesContext";

const User: React.FC<{ users: UserProfile[] | undefined }> = ({ users }) => {
  return (
    <div
      className={`absolute flex gap-6`}
      style={{
        top: "calc(50% - 2.5rem)",
        left: `calc(50% - ${(users?.length ?? 1) * 2.25}rem)`,
      }}
    >
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <div
              className={`w-12 h-12 relative m-auto rounded-full border-4 border-white ${user.color}`}
            >
              <FaUser className="m-auto h-full text-white" size={"1.2em"} />
              <div
                className={`w-fit text-xs text-center h-fit px-1 py-0.75 text-white absolute left-7 border-2 border-solid border-white rounded-lg -top-2 ${user.status === "good" ? "bg-green-600" : user.status === "warning" ? "bg-yellow-500" : "bg-red-600"}`}
              >
                {user.status}
              </div>
            </div>
            <p className="text-center">{user.username}</p>
            <p className="text-center text-gray-500">{user.activity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
