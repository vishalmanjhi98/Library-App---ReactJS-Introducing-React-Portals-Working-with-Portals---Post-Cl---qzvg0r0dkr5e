import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

export default withRouter(function index(props) {

  const [details, setDetails] = useState({ title: '', FavQuotes: "", description: "", section: "", genre: "", author: "", rating: "", review: "" })

  const handleChange = (event) => {
    const name = event.target.name;
    let deta = { ...details, [name]: event.target.value }
    setDetails(deta)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { ...details }
    fetch(`/api/books/`, {
      method: 'post', body: JSON.stringify(data), headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        props.setBookList([...props.bookList, details])
        props.history.push('/')
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (

    <div>
      <Container className='mt-2 p-5 border'>

        <div className="d-flex justify-content-center mb-2">
          <h1>Book Entry</h1></div>
        <Form className="form-part" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group >
                <Form.Label>
                  Title:</Form.Label>
                <Form.Control type="text" name="title" value={details.title} onChange={handleChange} /><br />

              </Form.Group >
            </Col>
            <Col>
              <Form.Group >
                <Form.Label>
                  Description:
    </Form.Label>
                <Form.Control type="text" name="description" value={details.description} onChange={handleChange} /><br />
              </Form.Group >
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group >
                <Form.Label>
                  Author Name:
    </Form.Label>
                <Form.Control type="text" name="author" value={details.author} onChange={handleChange} /><br />
              </Form.Group>

            </Col>
            <Col>
              <Form.Group >
                <Form.Label>
                  Genre:
    </Form.Label>
                <Form.Control type="text" name="genre" value={details.genre} onChange={handleChange} /><br />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group >
                <Form.Label>
                  Review:
    </Form.Label>
                <Form.Control type="text" name="review" value={details.review} onChange={handleChange} /><br />
              </Form.Group>
            </Col>
            <Col>

              <Form.Group >
                <Form.Label>
                  FavoriteQuotes:
    </Form.Label>
                <Form.Control type="text" name="FavQuotes" value={details.FavQuotes} onChange={handleChange} /><br />
              </Form.Group>

            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group >
                <Form.Label>
                  Rating:
    </Form.Label>
                <Form.Control type="text" name="rating" value={details.rating} onChange={handleChange} /><br />
              </Form.Group>

            </Col>
            <Col>
              <Form.Group >
                <Form.Label>
                  Section:
    </Form.Label>
                <Form.Control type="text" name="section" value={details.section} onChange={handleChange} /><br />
                {/* <Button type="submit" name="submit" value="Submit" color="primary" size="lg" disabled={!(state.author && state.title && state.comment)}>Submit</Button> */}
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-center">
            <Button className="justify-center" type="submit" name="submit" value="Submit" color="primary" size="lg" disabled={!(details.title !== "" && details.description !== "" && details.genre !== "" && details.author !== "" && details.rating !== "" && details.review !== "" && details.FavQuotes != "" && details.section !== "")}>Submit</Button>
          </div>
        </Form >
      </Container>
    </div >
  )
})