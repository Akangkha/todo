import React, { useState } from "react";
import NewUser from "./NewUser";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  return (
    <div className="w-screen bg-[#080c59] flex text-white font-bold h-16 items-center justify-between px-5">
      <h2>Contacts</h2>
      <section className="flex gap-6">
        <button
          className="bg-green-800 rounded shadow my-8 px-4 py-2 hover:bg-green-500"
          onClick={() => handleLogout()}
        >
          Log Out
        </button>
        <button
          onClick={handleClick}
          className="bg-green-800 rounded shadow my-8 px-4 py-2 hover:bg-green-500"
        >
          Create new Contact
        </button>
      </section>
      {open && <NewUser handleClick={setOpen} />}
    </div>
  );
};

export default Navbar;
