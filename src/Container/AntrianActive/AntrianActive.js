import { Component, useEffect, useState } from "react";
import axios from "axios";
import Card from "../../component/Card/Card";

class AntrianActive extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: "",
    },
    isUpdate: false,
  };
   getPostAPI = () => {
    axios
      .get("http://127.0.0.1:8000/api/antrian-active") 
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };
  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <>
        {this.state.post.map((post) => {
          return (
            <Card
              key={post.id}
              id={post.id}
              type ={post.type}
              nomor = {post.nomor}
              status = {post.status}
              />
          );
        })}
      </>
    );
  }
}

export default AntrianActive;
