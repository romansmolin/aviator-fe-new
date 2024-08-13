import { gql } from "@apollo/client";

export const GET_BONUSES_BY_TYPE = gql`
    query GetBonusesByType($page: Int!, $number: Int!, $type:String!) {
        getBonusesByType(page: $page, number: $number, type: $type) {
            bonuses {
            casino_name
            casino_uuid
            bonus_subtitle
            bonus_title
            casino_logo
            info {
                release_date
                available_for
                bonus_type
                bonus_status
            }
            }
            totalPages
        }
    }
`

export const GET_ALL_BONUSES = gql`
    query GetBonuses($page: Int!, $number: Int!) {
        getAllBonuses(page: $page, number: $number) {
            bonuses {
            casino_name
            casino_uuid
            bonus_subtitle
            bonus_title
            casino_logo
            info {
                release_date
                available_for
                bonus_type
                bonus_status
            }
            }
            totalPages
        }
    }
`