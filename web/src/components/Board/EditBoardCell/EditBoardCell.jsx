import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BoardForm from 'src/components/Board/BoardForm'

export const QUERY = gql`
  query EditBoardById($id: Int!) {
    board: board(id: $id) {
      id
      createdAt
      updatedAt
      state
    }
  }
`

const UPDATE_BOARD_MUTATION = gql`
  mutation UpdateBoardMutation($id: Int!, $input: UpdateBoardInput!) {
    updateBoard(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      state
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ board }) => {
  const [updateBoard, { loading, error }] = useMutation(UPDATE_BOARD_MUTATION, {
    onCompleted: () => {
      toast.success('Board updated')
      navigate(routes.boards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateBoard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Board {board?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BoardForm
          board={board}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
