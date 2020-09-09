import React from "react";

function NewUser() {
  return (
    <div>
      <h1>Tela de criação de usuários</h1>

      <form>
        <label>
          {"Nome"}

          <input />
        </label>

        <label>
          {"Email"}

          <input />
        </label>

        <label>
          {"Telefone"}

          <input />
        </label>

        <label>
          {"Data de Nascimento"}

          <input />
        </label>

        <label>
          {"Senha"}

          <input />
        </label>

        <label>
          {"Papel no sistema"}

          <input />
        </label>
      </form>
    </div>
  );
}

export default NewUser;
