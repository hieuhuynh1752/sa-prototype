"use client";
import React from "react";

const userImages = [
  "https://i.ibb.co/60qcsSS/Screenshot-2024-01-21-at-10-33-42.png",
  "https://i.ibb.co/GJCn6Pp/Screenshot-2024-01-21-at-10-30-09.png",
  "https://i.ibb.co/HY25J3c/Screenshot-2024-01-21-at-10-32-51.png",
  "https://i.ibb.co/xC1yCFM/Screenshot-2023-08-05-at-18-20-42.png",
  "https://i.ibb.co/fHJN1wx/plus-symbol-button.png",
];

const usersInfo = [
  { name: "Rafi Papa", role: "Owner" },
  { name: "Hieu", role: "Member" },
  { name: "Lori", role: "Member" },
  { name: "Aleksa", role: "Member" },
  { name: "", role: "Add new member" },
];

const UserItem: React.FC<{
  image: string;
  name: string;
  role: string;
  isLast: boolean;
}> = ({ image, name, role, isLast }) => (
  <div className="flex flex-col">
    <div
      className={`flex cursor-pointer p-2 rounded-lg border-solid border-2 border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
    >
      <div className="flex gap-4">
        <div
          className="w-10 h-10 overflow-hidden rounded-full cursor-pointer"
          style={{
            transition: "opacity 0.3s",
            opacity: 1,
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src={image}
            alt={`Profile of ${name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
    {!isLast ? <span className="w-full h-0.5 bg-gray-200 my-1"></span> : <></>}
  </div>
);

const SimpleForm = () => (
  <form className=" pl-4 pt-4">
    <label className="block mb-2 text-gray-800">Name:</label>
    <input
      type="text"
      name="name"
      className="w-full border p-2 mb-4"
      required
    />

    <label className="block mb-2 text-gray-800">Age:</label>
    <input
      type="number"
      name="age"
      className="w-full border p-2 mb-4"
      required
    />

    <label className="block mb-2 text-gray-800">Preference 1:</label>
    <input
      type="text"
      name="preference1"
      className="w-full border p-2 mb-4"
      required
    />

    <label className="block mb-2 text-gray-800">Preference 2:</label>
    <input
      type="text"
      name="preference2"
      className="w-full border p-2 mb-4"
      required
    />

    <label className="block mb-2 text-gray-800">Preference 3:</label>
    <input
      type="text"
      name="preference3"
      className="w-full border p-2 mb-4"
      required
    />

    <div className="flex content-end">
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  </form>
);
export default function ProfilesPage() {
  return (
    <>
      <div className="w-full max-w-[70vw] h-fit bg-white flex p-4">
        <div className="w-1/3 h-fit pr-4 ">
          {userImages.map((image, index) => (
            <UserItem
              key={index}
              image={image}
              name={usersInfo[index].name}
              role={usersInfo[index].role}
              isLast={index === userImages.length - 1}
            />
          ))}
        </div>
        <div className="w-2/3 h-fit border-solid border-l-2 border-gray-500">
          <SimpleForm />
        </div>
      </div>
    </>
  );
}
