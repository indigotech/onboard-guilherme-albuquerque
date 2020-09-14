import {
  gql,
} from "@apollo/client";

import { client } from "./../../UsersPage//services/queryGQL";

interface UserInputType {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;
  role: string;
}

export const newMutation = gql`
  mutation newUser($data: UserInputType!) {
    createUser(data: $data) {
      id
    }
  }
`;

export const newUserMutate = (newUserData: UserInputType): Promise<boolean> => {
  return client
    .mutate({
      mutation: newMutation,
      variables: { data: newUserData },
    })
    .then(() => {
      return true;
    })
    .catch((err) => {
      throw err;
    });
};
