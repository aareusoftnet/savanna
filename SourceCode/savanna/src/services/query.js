import { gql } from "@apollo/client";

export const CHECK_INs = gql`
  query CheckIns($orderBy: [check_in_order_by!], $limit: Int, $offset: Int) {
    check_in(order_by: $orderBy, limit: $limit, offset: $offset) {
      comment
      created_at
      id
      image_url
      name
    }
  }
`;
