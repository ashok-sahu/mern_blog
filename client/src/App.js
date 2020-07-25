import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import "./css/App.css";

import { Header, Footer, Navbar } from "./components/index";
import { Articles, Article, AddArticle, EditArticle } from "./containers/index";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("/articles");
      setPosts(result.data.data.articles);
    };
    fetchData();
  }, []);

  console.log(posts)

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Articles posts={posts}/>} />
      <Route
        path="/articles/:id"
        render={(props) => <Article {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={(props) => <EditArticle {...props} posts={posts} />}
      />
      <Route path="/add-article" component={AddArticle} />
      <Footer />
    </div>
  );
};

export default App;
