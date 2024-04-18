import React, { useState } from "react";
import { addUser } from "../store/reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const NewUser = ({ handleClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(false);
    e.target.reset();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg text-black min-w-50">
        <h3 className="text-[#080c59] text-xl mb-4">Add New User</h3>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border border-gray-300 rounded mb-2"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-gray-300 rounded"
          />
          <button className="bg-green-800 rounded shadow my-8 px-4 py-2 text-white hover:bg-green-500 hover:text-black">
            Create +
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
