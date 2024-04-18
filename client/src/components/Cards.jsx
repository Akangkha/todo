import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteUser } from "../store/reducer";
const Cards = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="shadow-xl w-60 rounded p-4">
      <p className="font-bold text-xl">User</p>
      <h6>{props.user}</h6>
      <h6>{props.email}</h6>
      <button onClick={()=>handleDelete(props.id)} className="bg-[#cb5a5a] rounded px-4 py-2 text-white my-4"> Delete</button>
    </div>
  );
};

export default Cards;
