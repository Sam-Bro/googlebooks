import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchInput() {
  return (
    <Form>
      <Form.Group controlId="book-title">
        <Form.Label>Book</Form.Label>
        <Form.Control placeholder="Book Title" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}
