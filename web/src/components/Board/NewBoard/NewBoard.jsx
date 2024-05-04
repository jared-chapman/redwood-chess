import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import BoardForm from 'src/components/Board/BoardForm'

const CREATE_BOARD_MUTATION = gql`
  mutation CreateBoardMutation($input: CreateBoardInput!) {
    createBoard(input: $input) {
      id
    }
  }
`

const NewBoard = () => {
  const [createBoard, { loading, error }] = useMutation(CREATE_BOARD_MUTATION, {
    onCompleted: () => {
      toast.success('Board created')
      navigate(routes.boards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createBoard({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Board</h2>
      </header>
      <div className="rw-segment-main">
        <BoardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBoard
