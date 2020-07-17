import React from "react";
import { Row, Col, ListGroup, Button, Image } from "react-bootstrap";

export default function BookListItem(
  title,
  description,
  link,
  authors,
  image,
  onSave,
  onDelete
) {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={10}>
          <h2>{title}</h2>
        </Col>
        <Col>
          {link && (
            <Button as="a" href={link} variant="primary" target="_blank">
              View
            </Button>
          )}
          {onSave && (
            <Button
              onClick={() =>
                onSave({ title, description, link, authors, image })
              }
              variant="secondary"
            >
              Save
            </Button>
          )}
          {onDelete && (
            <Button onClick={onDelete} variant="danger">
              Delete
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{authors && authors.join(" ")}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <Image src={image} />
        </Col>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
