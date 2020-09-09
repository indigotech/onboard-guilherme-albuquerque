import React, { useState, useEffect } from "react";
import { getAllUsers } from "./services/queryGQL";

import { useHistory } from "react-router-dom";

function UsersPage() {
  const [usersList, setUsersList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const fetchAllUsers = await getAllUsers();
      setUsersList(fetchAllUsers);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Usuários Cadastrados</h1>

      {usersList.map((user: any) => {
        return (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default UsersPage;
