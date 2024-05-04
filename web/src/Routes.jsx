// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Boards" titleTo="boards" buttonLabel="New Board" buttonTo="newBoard">
        <Route path="/boards/new" page={BoardNewBoardPage} name="newBoard" />
        <Route path="/boards/{id:Int}/edit" page={BoardEditBoardPage} name="editBoard" />
        <Route path="/boards/{id:Int}" page={BoardBoardPage} name="board" />
        <Route path="/boards" page={BoardBoardsPage} name="boards" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
