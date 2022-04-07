import {gql} from 'apollo-boost';

export const MINI_CART_PRODUCT = (id) => gql`
    {
        product(id: "${id}") {
            name
            brand
            gallery
            prices {
                amount
                currency {
                    symbol
                    label
                }
            }
        }
    }
`