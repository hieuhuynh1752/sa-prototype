"use client";
import { FaUser } from "react-icons/fa";
import { PreferencesContext } from "./preferencesContext";
import React from "react";

const User: React.FC<{ roomName: string }> = ({ roomName }) => {
  const { settings } = React.useContext(PreferencesContext);

  const users = React.useMemo(() => {
    return settings.find((setting) => setting.location === roomName)?.users;
  }, [settings]);

  const renderUsers = React.useCallback((): React.ReactNode => {
    return users?.map((user, index) => {
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
    });
  }, [users, settings]);

  return (
    <div
      className={`absolute flex gap-6 flex-wrap justify-center mt-4`}
      style={{
        width: `calc(100% - 16px)`,
      }}
    >
      {renderUsers()}
      <div
        className="bg-teal-500 bg-indigo-500 bg-orange-500 bg-red-500 bg-gray-500"
        style={{ display: "none" }}
      ></div>
    </div>
  );
};

export default User;
