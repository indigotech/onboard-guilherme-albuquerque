import React, { useState, useEffect } from "react";
import { userDetailsquery } from "./service/queryGQL";
import { useHistory, useParams } from "react-router-dom";

export interface UserDetaisState {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  email: string;
  role: string;
}

function UserDetails() {
  let { id } = useParams();

  const [user, setActiveUser] = useState<UserDetaisState>();

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    async function queryIdUpdate() {
      try {
        const fetchUserProfile = await userDetailsquery(id);
        setActiveUser(fetchUserProfile);
        setLoading(false);
      } catch (err) {
        console.log();
        alert(err);
        history.push("/home");
      }
    }
    queryIdUpdate();
  }, []);

  if (!loading) {
    return (
      <div>
        <p>id: {user.id}</p>
        <p>Nome: {user.name}</p>
        <p>Telefone: {user.phone}</p>
        <p>Data de nascimento: {user.birthDate}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Carregando. . .</h1>
      </div>
    );
  }
}

export default UserDetails;
