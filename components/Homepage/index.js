import React, { useState, useEffect } from "react";
import { CardColumns } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import Book from "../Book";


export default withRouter(function HomePage(props) {
  const [loading, setLoading] = useState([])
  const userName = props.userName
  const [userDetails, setUserDetails] = useState({})
  const bookList = props.bookList, setBookList = props.setBookList
  useEffect(() => {

    fetch(`/api/books`).then(e => e.json()).then(res => {
      fetch('/api/users?name=' + userName).then(e => e.json()).then(e => {
        setUserDetails(e)
        if (res.data.length > 0) {
          for (let a in res.data) {
            if (e.isRead.indexOf(res.data[a].title) !== -1) {
              res.data[a].isRead = true
            }
            else {
              res.data[a].isRead = false
            }

            if (e.toRead.indexOf(res.data[a].title) !== -1) {
              res.data[a].toRead = true
            }
            else {
              res.data[a].toRead = false
            }
          }
          setBookList(res.data)
          setLoading(false)

        }


      });
    })
  }, [userName])

  const updateToRead = (bookKey) => {

    let newUserDetails = userDetails;
    if (!bookList[bookKey].toRead)
      newUserDetails.toRead = [...newUserDetails.toRead, bookList[bookKey].title]
    else
      newUserDetails.toRead = newUserDetails.toRead.filter(e => e === bookList[bookKey].title ? false : true)
    let newbookList = [...bookList];
    setUserDetails(newUserDetails)
    newbookList[bookKey].toRead = !newbookList[bookKey].toRead
    setBookList(newbookList)
    updateTheDataBase(newUserDetails)

  }
  const updateIsRead = (bookKey) => {
    let newUserDetails = userDetails;

    if (!bookList[bookKey].isRead)
      newUserDetails.isRead = [...newUserDetails.isRead, bookList[bookKey].title]
    else
      newUserDetails.isRead = newUserDetails.isRead.filter(e => e === bookList[bookKey].title ? false : true)
    setUserDetails(newUserDetails)
    let newbookList = [...bookList];
    newbookList[bookKey].isRead = !newbookList[bookKey].isRead
    setBookList(newbookList)
    console.log(newUserDetails.isRead)
    updateTheDataBase(newUserDetails)
  }
  const updateTheDataBase = (data) => {
    fetch('/api/users/' + userName, {
      method: 'PATCH', body: JSON.stringify({ isRead: data.isRead, toRead: data.toRead }), headers: {
        'Content-Type': 'application/json'
      }
    }).then(e => {
      if (e.status == 209) {
        alert('Sucessfully updated the changes!!!')
      }
      else {
        alert('Faild to updated the changes!!!')
      }
    })

  }
  return (
    <>
      <div style={userName == "" ? { display: "none" } : {}}>
        <div className='d-flex justify-content-center mt-5'>
          <h1>Library</h1></div>
        {loading ? (
          <div>Loading.... </div>
        ) : bookList && bookList.length > 0 ? (
          <CardColumns className='m-5 p-2' >{bookList.map((details, index) => (
            <Book details={details} key={index} updateToRead={() => updateToRead(index)} updateIsRead={() => updateIsRead(index)} />
          ))}</CardColumns>
        ) : (
              <div>No Books to display</div>
            )}
      </div>
    </>
  )
}

)