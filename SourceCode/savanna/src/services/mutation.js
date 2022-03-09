import { gql } from "@apollo/client";

export const DO_CHECK_INS = gql`
  mutation Mutation_root($object: check_in_insert_input!) {
    insert_check_in_one(object: $object) {
      comment
      image_url
      name
      created_at
    }
  }
`;
