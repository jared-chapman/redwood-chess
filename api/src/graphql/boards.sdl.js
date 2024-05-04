export const schema = gql`
  type Board {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    state: String!
  }

  type Query {
    boards: [Board!]! @requireAuth
    board(id: Int!): Board @requireAuth
  }

  input CreateBoardInput {
    state: String!
  }

  input UpdateBoardInput {
    state: String
  }

  type Mutation {
    createBoard(input: CreateBoardInput!): Board! @requireAuth
    updateBoard(id: Int!, input: UpdateBoardInput!): Board! @requireAuth
    deleteBoard(id: Int!): Board! @requireAuth
  }
`
