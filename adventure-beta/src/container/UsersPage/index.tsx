import React from "react";

const mockUsers = [
  {
    name: ["Gui"],
    email: ["guilherme.albuquerque@taqtile.com.br"],
  },
  {
    name: ["Alan"],
    email: ["alan@taqtile.com.br"],
  },
  {
    name: ["Matt"],
    email: ["matheus@taqtile.com.br"],
  },
  {
    name: ["Felipe"],
    email: ["Felipetaqtile.com.br"],
  },
];

function UsersPage() {
  return (
    <div>
      <h1>Usuários Cadastrados</h1>

      {mockUsers.map((user) => {
        return (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default UsersPage;
