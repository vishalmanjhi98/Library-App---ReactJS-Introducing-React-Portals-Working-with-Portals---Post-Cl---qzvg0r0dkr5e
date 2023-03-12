import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

export default function Book(props) {
    const { details: { title, description, genre, author, review, FavQuotes, section, isRead, toRead } } = props;

    return (
        <div>
            <Card className="bookCard-Parent">
                <Card.Body> <div className="justify-content-center"><h2> {title}</h2></div>
                    <div><i>{description}</i> </div>
                    <div><b>Genre: </b> {genre}</div>
                    <div><b>Author: </b> {author}</div>
                    <div><b>Review: </b>{review}</div>
                    <div><b>Quotes: </b>{FavQuotes}</div>
                    <div><b>Section: </b>{section}</div>
                    <Form.Group controlId={"isRead-book-" + title}>
                        <Form.Check type="checkbox" label="isRead" className="d-flex" checked={props.details.isRead} onChange={(e) => {
                            props.updateIsRead()
                        }} />
                    </Form.Group>
                    <Form.Group controlId={"toRead-book-" + title}>
                        <Form.Check type="checkbox" label="toRead" className="d-flex" checked={props.details.toRead} onChange={(e) => {
                            props.updateToRead()
                        }} />
                    </Form.Group>

                </Card.Body>
            </Card>

        </div>
    )
}
