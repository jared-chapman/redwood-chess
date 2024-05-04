import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_BOARD_MUTATION = gql`
  mutation DeleteBoardMutation($id: Int!) {
    deleteBoard(id: $id) {
      id
    }
  }
`

const Board = ({ board }) => {
  const [deleteBoard] = useMutation(DELETE_BOARD_MUTATION, {
    onCompleted: () => {
      toast.success('Board deleted')
      navigate(routes.boards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete board ' + id + '?')) {
      deleteBoard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Board {board.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{board.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(board.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(board.updatedAt)}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{board.state}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBoard({ id: board.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(board.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Board
