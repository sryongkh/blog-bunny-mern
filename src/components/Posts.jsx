import React from "react";
import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../data";
const Posts = () => {
  const [posts, setPosts] = React.useState(DUMMY_POSTS);
  return (
    <main id="posts__page">
      <section className="posts">
        {posts.length > 0 ? (
          <div className="container posts__container">
            {posts.map(({ id, thumbnail, category, title, desc, authorId }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={desc}
                authorId={authorId}
              />
            ))}
          </div>
        ) : (
          <h2>No Posts Found</h2>
        )}
      </section>
    </main>
  );
};

export default Posts;
