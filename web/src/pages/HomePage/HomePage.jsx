import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import BoardCell from 'src/components/BoardCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <BoardCell />
    </>
  )
}

export default HomePage
