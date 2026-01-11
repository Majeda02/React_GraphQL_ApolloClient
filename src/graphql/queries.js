import { gql } from "@apollo/client";

// Récupérer tous les comptes
export const GET_ALL_COMPTES = gql`
  query {
    allComptes {
      id
      solde
      dateCreation
      type
    }
  }
`;
