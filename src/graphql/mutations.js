import { gql } from "@apollo/client";

// Créer un compte
export const SAVE_COMPTE = gql`
  mutation SaveCompte($compte: CompteRequest!) {
    saveCompte(compte: $compte) {
      id
      solde
      type
    }
  }
`;
