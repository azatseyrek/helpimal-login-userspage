


// import { database } from "firebase";
import React, { useEffect, useState } from "react";

import { firestore as db } from "../fire";

const Users = () => {
    const [list, setList] = useState([]);

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
        <div>
            {/* {list.map(({data:{email}}) => (
                <h2>{email}</h2>
            ))} */}

            {list.map((user)=> 
                <h1>{user.data.email}</h1>
            )}
        </div>
    )
}

export default Users

