import React from "react";
import { Row, Col } from "react-bootstrap";

import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";

export default function Search() {
  return (
      <>
    <Row>
      <Col>
        <SearchInput />
      </Col>
    </Row>
    <Row>
        <Col>
            <BookList />
        </Col>
    </Row>
    </>
  );
}
