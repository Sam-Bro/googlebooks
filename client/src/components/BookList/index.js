import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import BookListItem from "../BookListItem"

export default function BookList() {
  return (
    <Card>
      <Card.Title>Results</Card.Title>
      <Card.Body>
        <ListGroup>
            <BookListItem />
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
