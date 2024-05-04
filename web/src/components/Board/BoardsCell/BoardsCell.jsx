import { Link, routes } from '@redwoodjs/router'

import Boards from 'src/components/Board/Boards'

export const QUERY = gql`
  query FindBoards {
    boards {
      id
      createdAt
      updatedAt
      state
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No boards yet. '}
      <Link to={routes.newBoard()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ boards }) => {
  return <Boards boards={boards} />
}
