import React, { useState } from "react";
import {
  StyledTextArea,
  StyledButton,
  PostsList,
  HomeWrapper,
} from "../../components";
import axios from "axios";

const Home = () => {
  const [content, setContent] = useState("");
  const [listOfPosts, setListOfPosts] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { content };
    const response = await axios.post("http://localhost:3001/posts", data);
    setListOfPosts([...listOfPosts, response.data]);
    setContent("");
  }

  function handleChange(event) {
    setContent(event.target.value);
  }

  async function deletePost(id) {
    const response = await axios.delete(`http://localhost:3001/posts/${id}`);
    if (response.status === 200) {
      setListOfPosts(listOfPosts.filter((post) => post.id !== id));
    } else {
      console.log("failed to delete post");
    }
  }

  async function handlePostEdit(id, { editableContent }) {
    const { data: updatedPost } = await axios.put(
      `http://localhost:3001/posts/${id}`,
      { content: editableContent }
    );
    setListOfPosts(
      listOfPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
  }

  return (
    <HomeWrapper>
      <form onSubmit={handleSubmit}>
        <div className="inner-div">Explore</div>
        <StyledTextArea
          placeholder="What’s up?"
          value={content}
          onChange={handleChange}
          width="722px"
        ></StyledTextArea>
        <StyledButton
          style={{ position: "absolute", left: "620px", top: "115px" }}
          onClick={handleSubmit}
        >
          Tweet
        </StyledButton>
      </form>
      <PostsList
        listOfPosts={listOfPosts}
        setListOfPosts={setListOfPosts}
        deletePost={deletePost}
        handlePostEdit={handlePostEdit}
      />
    </HomeWrapper>
  );
};

export default Home;
