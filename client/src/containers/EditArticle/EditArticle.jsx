import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const EditArticle = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [message, setMessage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();

    const articles = {
      title,
      article,
      authorName,
    };
    setArticle("");
    setAuthorName("");
    setTitle("");
    axios
      .put(`/articles/update/${props.match.params.id}`, articles)
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((res) => [
        setArticle(res.data.article),
        setTitle(res.data.title),
        setAuthorName(res.data.authorName),
      ])
      .catch((err) => console.log(err));
  }, []);

  return (
    <AddArticleContainer>
      <div className="container">
        <h1>Update Article</h1>
        <span className="message">{message}</span>
        <form encType="multipart/form-data" onSubmit={changeOnClick}>
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="form-control"
              placeholder="Author Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="article">Article</label>
            <textarea
              rows="3"
              className="form-control"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Article
          </button>
        </form>
      </div>
    </AddArticleContainer>
  );
};

export default EditArticle;
//main container
const AddArticleContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;
  h1 {
    font-weight: 900;
    color: var(--dark-green);
  }
  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }
  .message {
    color: tomato;
    font-weight: 900;
    padding: 1rem 1rem 1rem 0;
  }
`;
