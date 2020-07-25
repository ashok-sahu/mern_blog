import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ksoft-logo.png";

const Articles = ({ posts }) => {

  return (
    <MainContainer>
      <div className="container">
        {!posts.length ? (
          <img src={logo} alt="logo" />
        ) : (
          posts.map((article, key) => (
            <div key={key}>
              <h2>{article.title}</h2>
              <p>{article.article}</p>
              <span className="badge badge-secondary p-2 ">
                {article.author}
              </span>
              <div className="row my-y">
              <div className="col-sm-2 mt-2">
                <Link
                  to={`/update/${article._id}`}
                  className="btn btn-outline-success"
                >
                  Edit Article
                </Link>
              </div>
              <div className="col-sm-2 mt-2">
                <button 
                // onClick={deleteArticle(article._id)} 
                className="btn btn-outline-danger">
                  Delete Article
                </button>
              </div>
            </div>
            </div>
          ))
        )}
      </div>
    </MainContainer>
  );
};

export default Articles;

const MainContainer = styled.div`
  margin: 7rem 0;
  img {
    width: 10rem;
    display: block;
    margin: auto;
  }
`;
