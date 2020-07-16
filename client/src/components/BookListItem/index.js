import React from "react";
import { Row, Col, ListGroup, Button, Image } from "react-bootstrap";

export default function BookListItem() {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={10}>
          <h2>Harry Potters Bookshelf</h2>
        </Col>
        <Col>
          <Button variant="primary">View</Button>
          <Button variant="secondary">Save</Button>
        </Col>
      </Row>
      <Row>
          <Col>
            <p>Link</p>
          </Col>
      </Row>
      <Row>
          <Col>
            <p>Author</p>
          </Col>
      </Row>
      <Row>
          <Col xs={2}>
            <Image src="#" />
          </Col>
          <Col>
            <p>Description</p>
          </Col>
      </Row>
    </ListGroup.Item>
  );
}
