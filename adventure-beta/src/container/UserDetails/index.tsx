import React, { useState, useEffect } from "react";
import { userDetailsquery } from "./service/queryGQL";
import { useHistory } from "react-router-dom";

export interface UserDetaisState {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  email: string;
  role: string;
}

function UserDetails(props: any) {
  const [userActiveId, setActiveId] = useState<UserDetaisState | any>();

  const [loading, setLoading] = useState(true);

  const history = useHistory()

  useEffect(() => {
    async function queryIdUpdate() {
      try {
        const fetchUserProfile = await userDetailsquery(props.id);
        setActiveId(fetchUserProfile);
        setLoading(false);
      } catch (err) {
        alert(err);
        history.push("/home")
      }
    }
    queryIdUpdate();
  }, []);

  if (!loading) {
    return (
      <div>
        <p>id: {userActiveId.id}</p>
        <p>Nome: {userActiveId.name}</p>
        <p>Telefone: {userActiveId.phone}</p>
        <p>Data de nascimento: {userActiveId.birthDate}</p>
        <p>Email: {userActiveId.email}</p>
        <p>Role: {userActiveId.role}</p>
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
