import React, { useState } from "react";
import { FormContainer } from "./style";

function NewUser() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    role: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h1>Tela de criação de usuários</h1>

      <FormContainer onSubmit={handleSubmit}>
        <label>
          {"Nome"}
          <input
            type="text"
            name="name"
            value={state.name}
            required={true}
            pattern="[a-zA-Záàâãéèêíïóôõöúçñ ]{1,36}"
            onChange={handleInput}
            title="Não é permitido números e caracteres especiais"
          />
        </label>

        <label>
          {"Email"}
          <input
            type="text"
            name="email"
            value={state.email}
            required={true}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={handleInput}
          />
        </label>

        <label>
          {"Telefone"}
          <input
            type="tel"
            name="phone"
            pattern={"[0-9]{8,14}"}
            value={state.phone}
            required={true}
            onChange={handleInput}
          />
        </label>

        <label>
          {"Data de Nascimento"}
          <input
            placeholder="yyyy-mm-dd"
            name="birthDate"
            pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"
            title="Formato aaaa-mm-dd"
            value={state.birthDate}
            required={true}
            onChange={handleInput}
          />
        </label>

        <label>
          {"Senha"}

          <input
            type="password"
            name="password"
            pattern="[a-z0-9]{8,}"
            title="No mínimo 8 caracteres"
            value={state.password}
            required={true}
            onChange={handleInput}
          />
        </label>

        <label>
          {"Papel no sistema"}

          <input
            type="text"
            name="role"
            value={state.role}
            required={true}
            onChange={handleInput}
          />
        </label>

        <input type="submit" value="Criar usuário" />
      </FormContainer>
    </div>
  );
}

export default NewUser;
