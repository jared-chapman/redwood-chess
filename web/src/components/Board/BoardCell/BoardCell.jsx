import Board from 'src/components/Board/Board'

export const QUERY = gql`
  query FindBoardById($id: Int!) {
    board: board(id: $id) {
      id
      createdAt
      updatedAt
      state
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Board not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ board }) => {
  return <Board board={board} />
}
