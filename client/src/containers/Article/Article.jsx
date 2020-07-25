import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import styled from "styled-components";

import logo from "../../assets/images/ksoft-logo.png";

const Article = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");
  useEffect(() => {
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((res) => [
        setArticle(res.data.article),
        setTitle(res.data.title),
        setAuthor(res.data.author),
      ])
      .catch((err) => console.log(err));
  }, [props]);
  return (
    <MainContainer>
      {!title || !article || !author ? (
        <img src={logo} alt="logo" />
      ) : (
        <>
          <h2>{title}</h2>
          <p>{article}</p>
          <p className="badge badge-secondary">{author}</p>
          <br />
          <Link to='/' type="submit" className="btn btn-primary">
            Back to Home 
          </Link>
        </>
      )}
    </MainContainer>
  );
};

export default Article;

//main container
const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 900;
    color: var(--dark-green);
  }
  img {
    display: block;
    margin: auto;
  }
  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }
`;
