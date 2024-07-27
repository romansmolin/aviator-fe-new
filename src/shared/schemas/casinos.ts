import { gql } from "@apollo/client";

export const CASINO_TOP_BY_COUNTRY = gql`
  query GetCasinoTopByCountry($country: String!) {
    getTopByCountryName(country: $country) {
      id
      country
      top_list {
        rating
        title
        main_bonus_title
        hasRegularOffers
        hasLiveCasino
        hasVIPProgram
        hasLiveChat
        logo
        casino
      }
    }
  }
`;