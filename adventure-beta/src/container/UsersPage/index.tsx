import React, { useState, useEffect, HtmlHTMLAttributes } from "react";
import { getAllUsers } from "./services/queryGQL";

import { useHistory } from "react-router-dom";

function UsersPage(props: any) {
  const [usersList, setUsersList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const fetchAllUsers = await getAllUsers();
      setUsersList(fetchAllUsers);
    }
    fetchUsers();
  }, []);

  const handleClickNewUser = () => {
    history.push("/new-user");
  };

  const handleIdProps = (id: string) => {
    history.push("/user-details/".concat(id));
  };

  return (
    <div>
      <h1>Usuários Cadastrados</h1>

      <button onClick={handleClickNewUser}>Adicionar novo usuário</button>

      {usersList.map((user: any) => {
        return (
          <div onClick={() => handleIdProps(user.id)}>
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
