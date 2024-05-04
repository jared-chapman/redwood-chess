import './Square.css'
import {
  faChessPawn as lightPawn,
  faChessKnight as lightKnight,
  faChessBishop as lightBishop,
  faChessRook as lightRook,
  faChessQueen as lightQueen,
  faChessKing as lightKing,
} from '@fortawesome/free-regular-svg-icons'
import {
  faChessPawn,
  faChessKnight,
  faChessBishop,
  faChessRook,
  faChessQueen,
  faChessKing,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Square = ({
  color,
  piece,
  rowIndex,
  columnIndex,
  position = [75, 100],
  size = '100px',
}) => {
  const pieceMap = {
    White: {
      Pawn: lightPawn,
      Knight: lightKnight,
      Bishop: lightBishop,
      Rook: lightRook,
      Queen: lightQueen,
      King: lightKing,
    },
    Black: {
      Pawn: faChessPawn,
      Knight: faChessKnight,
      Bishop: faChessBishop,
      Rook: faChessRook,
      Queen: faChessQueen,
      King: faChessKing,
    },
  }
  const getPieceIcon = (piece) => {
    return pieceMap[piece.color][piece.piece]
  }
  return (
    <div
      className={`Square ${color ? 'Light' : 'Dark'}`}
      style={{
        '--row': rowIndex,
        '--col': columnIndex,
        '--size': size,
        '--top': `${position[0]}px`,
        '--left': `${position[1]}px`,
      }}
    >
      {piece.color && (
        <div className="Piece">
          <FontAwesomeIcon
            icon={getPieceIcon(piece)}
            style={{ color: piece.color }}
          />
        </div>
      )}
    </div>
  )
}

export default Square
