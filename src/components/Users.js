// import { database } from "firebase";
import React, { useEffect, useState } from "react";

import { firestore as db } from "../fire";

import "../App.css";

import User from "./User";

const Users = () => {
  const [list, setList] = useState([]);
  // const [uId, setUid] = useState('');



  useEffect(() => {
    db.collection("users").onSnapshot((users) =>
      setList(
        users.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
      
    );
  }, []);

  

  console.log(list);

  return (
    <div className="list__container">
      {list.map((user) => (
       <User  key={user.id} id={user.id} email={user.data.email}/>
      ))}
    </div>
  );
};

export default Users;
