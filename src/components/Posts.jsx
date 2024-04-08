import React from "react";
import PostItem from "./PostItem";
// Image
import Thumbnail1 from "../image/avatar-1.png";
import Thumbnail2 from "../image/avatar-2.png";
import Thumbnail3 from "../image/avatar-3.png";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the title from very first post on this blog.",
    desc: "Lorem ipsum dolor sit amet, consectetur adip",
    authorId: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "education",
    title: "This is the title from very first post on this blog.",
    desc: "Lorem ipsum dolor sit amet, consectetur adip",
    authorId: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "uncategorized",
    title: "This is the title from very first post on this blog.",
    desc: "Lorem ipsum dolor sit amet, consectetur adip",
    authorId: 2,
  },
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the title from very first post on this blog.",
    desc: "Lorem ipsum dolor sit amet, consectetur adip",
    authorId: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "education",
    title: "This is the title from very first post on this blog.",
    desc: "Lorem ipsum dolor sit amet, consectetur adip",
    authorId: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "uncategorized",
    title: "This is the title from very first post on this blog.",
    desc: "Lorem ipsum dolor sit amet, consectetur adip",
    authorId: 2,
  },
];
const Posts = () => {
  const [posts, setPosts] = React.useState(DUMMY_POSTS);
  return (
    <main id="posts__page">
      <section className="posts">
        {posts.map(({ id, thumbnail, category, title, desc, authorId }) => (
          <PostItem
            key={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorId={authorId}
          />
        ))}
      </section>
    </main>
  );
};

export default Posts;
