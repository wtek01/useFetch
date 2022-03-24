import React, { useRef, useState, useEffect } from "react";

import refetch from "./useFetch";
export default function App() {
 

  const getAllUser = () => {
   /* const [
      err,
      users,
      loading,
      refetch
    ] = useFetch(`https://jsonplaceholder.typicode.com/users`, { auto: true });*/
  };
const users;
  const getOneUser = () => {
    users = refetch(`https://jsonplaceholder.typicode.com/users/${randomId(1, 10)}`, {
      auto: false
    });
  };

  const randomId = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /* const users1 = useRef([]);
    const [users2, setUsers2] = useState([]);
    useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        users.current = json;
        setUsers2(json);
        console.log("json ",json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);*/

  return (
    <>
      <button onClick={getAllUser}>Get all users</button>
      {users && users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              {user.id} {":"} {user.name}
              {" / "}
              {user.email}
            </div>
          ))}
        </div>
      )}
      <button onClick={getOneUser}>Get one user</button>
      {users && (
        <div>
          {users.id} {":"} {users.name}
          {" / "}
          {users.email}
        </div>
      )}
    </>
  );
}
