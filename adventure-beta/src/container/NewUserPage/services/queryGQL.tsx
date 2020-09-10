import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


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

export const newUserMutate = (newUserData: UserInputType): Promise<any> => {
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
