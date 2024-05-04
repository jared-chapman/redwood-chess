import { boards, board, createBoard, updateBoard, deleteBoard } from './boards'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('boards', () => {
  scenario('returns all boards', async (scenario) => {
    const result = await boards()

    expect(result.length).toEqual(Object.keys(scenario.board).length)
  })

  scenario('returns a single board', async (scenario) => {
    const result = await board({ id: scenario.board.one.id })

    expect(result).toEqual(scenario.board.one)
  })

  scenario('creates a board', async () => {
    const result = await createBoard({
      input: { updatedAt: '2024-05-04T04:23:54.675Z', state: 'String' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-05-04T04:23:54.675Z'))
    expect(result.state).toEqual('String')
  })

  scenario('updates a board', async (scenario) => {
    const original = await board({ id: scenario.board.one.id })
    const result = await updateBoard({
      id: original.id,
      input: { updatedAt: '2024-05-05T04:23:54.675Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-05-05T04:23:54.675Z'))
  })

  scenario('deletes a board', async (scenario) => {
    const original = await deleteBoard({ id: scenario.board.one.id })
    const result = await board({ id: original.id })

    expect(result).toEqual(null)
  })
})
