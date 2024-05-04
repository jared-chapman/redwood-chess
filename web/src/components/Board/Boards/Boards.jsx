import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Board/BoardsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_BOARD_MUTATION = gql`
  mutation DeleteBoardMutation($id: Int!) {
    deleteBoard(id: $id) {
      id
    }
  }
`

const BoardsList = ({ boards }) => {
  const [deleteBoard] = useMutation(DELETE_BOARD_MUTATION, {
    onCompleted: () => {
      toast.success('Board deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete board ' + id + '?')) {
      deleteBoard({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>State</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => (
            <tr key={board.id}>
              <td>{truncate(board.id)}</td>
              <td>{timeTag(board.createdAt)}</td>
              <td>{timeTag(board.updatedAt)}</td>
              <td>{truncate(board.state)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.board({ id: board.id })}
                    title={'Show board ' + board.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBoard({ id: board.id })}
                    title={'Edit board ' + board.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete board ' + board.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(board.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BoardsList
