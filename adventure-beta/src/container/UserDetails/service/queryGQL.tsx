import { gql } from "@apollo/client";

import { client } from "../../UsersPage/services/queryGQL";

export const queryUser = gql`
  query getUserDetails($id: ID!) {
    user(id: $id) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;

export const userDetailsquery = (idUser: string): Promise<any> => {
  return client
    .mutate({
      mutation: queryUser,
      variables: { id: idUser },
    })
    .then((resp) => {
      console.log(resp.data.user);
      return resp.data.user;
    })
    .catch((err) => {
      console.log(idUser);
      throw err;
    });
};
