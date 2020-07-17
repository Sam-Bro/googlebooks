import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";

import API from "../utils/API";


export default function Search() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const onSave = async (book) => {
    API.saveBook(book);
  }

  const onSearch = async (evt) => {
    evt.preventDefault();

    const results = await API.searchBooks(search);
    const books = results.items.map((book) => ({
      id: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      onSave,
    }))


      setBooks (books)
  };

  return (
    <>
      <Row>
        <Col>
          <SearchInput
            search={search}
            onSearchChange={setSearch}
            onSearch={onSearch}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <BookList books={books} />
        </Col>
      </Row>
    </>
  );
}
