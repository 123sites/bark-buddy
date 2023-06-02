import { gql } from '@apollo/client';


// This should allow a user/users to view dogs they have saved
export const QUERY_ME = gql`
 {
  me {
    _id
    username
    email
    savedDogs {
      dogId
      name
      breed
      age
      img
    }
  }
}
`;

// Search for dogs and indicate if someone has saved it for adoption
// export const QUERY_DOG = gql`
// query GetDog($id: ID!) {
//   dog(id: $id) {
//     _id
//     name
//     breed
//     age
//     adopter {
//       id
//       name
//       email
//     }
//     isSaved
//   }
// }
// `;
