import React, { useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { render } from "@testing-library/react";

const httpLink = createHttpLink({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("@adventure-beta/token");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function UsersPage() {
  const [usersList, setUsersList] = useState([]);


  const getAllUsers = async ():Promise<void> => {
    return client
      .query({
        query: gql`
          query getUsers{
            users(pageInfo : {offset:${0}, limit:${10}}){
              nodes {
                name
                email
              }
            }
          }
        `,
      })
      .then((resp) => {
        const fetchData =  resp.data.users.nodes
       setUsersList(fetchData)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getAllUsers();
  console.log(usersList)

   {
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
        )
      })}

    </div>
  );
}
}
export default UsersPage;
