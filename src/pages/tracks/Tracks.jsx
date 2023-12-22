import React from "react";
import { Route, Routes, Link, useParams, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { tracks } from "../../utils/constants";

const transition = { duration: 0.5, ease: "easeInOut" };
const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition },
};

const Post = () => {
  const { id } = useParams();
  const postId = Number(id);
  const post = tracks.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }
  const { title, link, trackId, albumId, description, text, imgSrc } = post;
  console.log(trackId);
  console.log(albumId);
  const structuredText = text
    .split("\n\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  return (
    <motion.div
      className="page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={postVariants}
    >
      <div className="link-wrapper">
        <Link to="/tracks">{"\u2190"} Обратно ко всем трекам</Link>
      </div>
      <div className="post">
        <div className="post-song">
          <img className="post__img" src={imgSrc} alt={title} />
          <iframe width="80%" height="200" src={link}>
            Слушайте{" "}
            <a href={`https://music.yandex.ru/album/{albumId}/track/{trackId}`}>
              Пой
            </a>{" "}
            — <a href="https://music.yandex.ru/artist/8947630">Luverance</a> на
            Яндекс Музыке
          </iframe>
        </div>

        <div className="lyrics">
          <h1 className="heading">{title}</h1>
          <p>{description}</p>
          <div className="songlyrics">{structuredText}</div>
        </div>
      </div>
    </motion.div>
  );
};

const postPreviewVariants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-100%", opacity: 0, transition },
};

const PostPreview = ({ id, title, description, imgSrc }) => {
  return (
    <motion.div className="post-preview" variants={postPreviewVariants}>
      <img className="post-preview__img" src={imgSrc} alt={title} />
      <div className="post-preview__text">
        <h2 className="heading">{title}</h2>
        <p>{description}</p>
        <Link to={`/tracks/post/${id}`}>Подробнее</Link>
      </div>
    </motion.div>
  );
};

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } },
};

const Blog = () => {
  return (
    <div className="page">
      <motion.div
        className="blog-list"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
        {tracks.map((post) => (
          <PostPreview key={post.id} {...post} />
        ))}
      </motion.div>
    </div>
  );
};

const Tracks = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Tracks;
