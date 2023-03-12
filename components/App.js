import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import React, { useState } from "react";
import Homepage from './Homepage';
import AddBook from './AddBook';
import LoginPage from './LoginPage'
import { Navbar, Nav } from "react-bootstrap";
import "react-awesome-button/dist/styles.css";
const App = () => {
  const [userName, setUserName] = useState("")
  const [bookList, setBookList] = useState([])
  return (
    <div id="main">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Library App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/addBook">Add Book</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       
        <Switch>
          {userName !== "" && <Route path="/addBook"  > <AddBook bookList={bookList} setBookList={setBookList} /> </Route>}
          {userName !== "" && <Route path="/"  ><Homepage userName={userName} bookList={bookList} setBookList={setBookList} /></Route>}
          <Router path="/" ><LoginPage userName={userName} setUserName={setUserName} /></Router>
        </Switch>

      </Router>
    </div >
  )
}

export default App;
