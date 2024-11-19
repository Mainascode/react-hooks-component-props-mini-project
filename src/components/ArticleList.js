import React from "react";
import Article from "./Article";

const ArticleList = ({ posts = [] }) => {
  console.log(posts); // Log to debug

  // Ensure posts is an array
  const validPosts = Array.isArray(posts) ? posts : [];

  return (
    <main>
      {validPosts.map((post, index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;

