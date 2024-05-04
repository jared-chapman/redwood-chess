import Square from 'src/components/Square'

export const QUERY = gql`
  query FindBoards {
    boards {
      id
      state
    }
  }
`

const buildBoard = (board) => {
  const buildPiece = (notation) => {
    const colorMap = new Map([
      ['w', 'White'],
      ['b', 'Black'],
    ])
    const pieceMap = new Map([
      ['p', 'Pawn'],
      ['n', 'Knight'],
      ['b', 'Bishop'],
      ['r', 'Rook'],
      ['q', 'Queen'],
      ['k', 'King'],
      ['x', 'Custom1'],
      ['y', 'Custom2'],
      ['z', 'Custom3'],
    ])
    return {
      color: colorMap.get(notation[0]),
      piece: pieceMap.get(notation[1]),
    }
  }

  return board.map((row, rowIndex) => {
    return row.map((piece, columnIndex) => {
      return (
        <Square
          color={(rowIndex + columnIndex) % 2 === 0}
          piece={buildPiece(piece)}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          key={`${rowIndex}-${columnIndex}`}
          size={'85px'}
        />
      )
    })
  })
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ boards }) => {
  // const board = boards[0];
  const basicBoard = [
    ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
  ]
  return (
    <div>
      <div>
        For now this just shows the first board. Eventually you will be able to
        navigate to a specific board by id.
      </div>
      <div className="board">{buildBoard(basicBoard)}</div>
    </div>
  )
}
