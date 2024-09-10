import { gql } from "@apollo/client";

export const GET_PAGE_CONTENT_BY_SLUG = gql`
    query GetPageContentBySlug($slug: String!) {
        getPageContentBySlug(slug: $slug) {
            pageContent {
            image
                content {
                    type
                    children {
                        type
                        text
                    }
                }
            }
        }
    }
`