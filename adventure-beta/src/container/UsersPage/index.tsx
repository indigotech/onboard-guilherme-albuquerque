import React, { useState, useEffect, HtmlHTMLAttributes } from "react";
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

  const handleClick = () => {
    history.push("/new-user")
  }

  return (
    <div>
      <h1>Usuários Cadastrados</h1>

      <button onClick={handleClick}>Adicionar novo usuário</button>

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
