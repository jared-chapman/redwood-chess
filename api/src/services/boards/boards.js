import { db } from 'src/lib/db'

export const boards = () => {
  return db.board.findMany()
}

export const board = ({ id }) => {
  return db.board.findUnique({
    where: { id },
  })
}

export const createBoard = ({ input }) => {
  return db.board.create({
    data: input,
  })
}

export const updateBoard = ({ id, input }) => {
  return db.board.update({
    data: input,
    where: { id },
  })
}

export const deleteBoard = ({ id }) => {
  return db.board.delete({
    where: { id },
  })
}
