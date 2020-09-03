import React from "react";


function App() {
  return (
    <div>
      <h1>Bem vindo(a) à Taqtile!</h1>
      <form>
        <label> E-mail
          <input
            type="email" required={true} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
        </label>

        <label> Senha
          <input
            type="password" required={true} pattern="(?=.*\d)(?=.*[a-z]).{7,}"
            title=" A sua senha deve ter pelo menos 7 caracteres e conter pelo menos:
            uma letra minúscula e um dígito. "/>
        </label>

        <input type="submit" value="Entrar"/>
      </form>
    </div>
  );
}

export default App;
