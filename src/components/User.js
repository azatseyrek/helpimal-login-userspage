import React from "react";
import { firestore as db } from "../fire";
import "../App.css";
import { DeleteForever } from "@material-ui/icons";

const User = ({ id, email }) => {
  const deleteUser = () => {
    db.collection("users").doc(id).delete();
    console.log(id);
  };

  return (
    <div>
      <div className="Users__container">
        <div key={id} className="Users__list">
          <h1>{email} </h1>

          <DeleteForever onClick={deleteUser} className="delete__forever" />
        </div>
      </div>
    </div>
  );
};

export default User;
