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

interface ID {
  id: string;
}

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

export const userDetailsquery = (idUser: ID): Promise<any> =>{
  return client
    .mutate({
      mutation: queryUser,
      variables: {id: idUser},
    })
    .then ((resp) => {
      console.log(resp.data.user)
      return resp.data.user
    }) .catch((err) => {
      throw(err)
    })
}
