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

const UserSquare: React.FC<{ image: string; name: string; role: string }> = ({
  image,
  name,
  role,
}) => (
  <div className="flex flex-col items-center">
    <div
      className="w-40 h-40 mb-2 relative overflow-hidden rounded-full cursor-pointer"
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
    <p className="text-center font-semibold">{name}</p>
    <p className="text-center text-gray-500">{role}</p>
  </div>
);

const SimpleForm = () => (
  <form className="w-96 mx-auto p-4 mt-20 rounded shadow-lg">
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

    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
      Submit
    </button>
  </form>
);
export default function ProfilesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Profiles Overview
      </h1>
      <br />
      <br />
      <div className="mb-32 grid grid-cols-5 gap-10 text-center">
        {userImages.map((image, index) => (
          <UserSquare
            key={index}
            image={image}
            name={usersInfo[index].name}
            role={usersInfo[index].role}
          />
        ))}
      </div>
      <SimpleForm />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
