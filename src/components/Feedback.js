import React, { useEffect, useState } from 'react';
import fire from './fire.js';
import Post from './Post';
import PostInput from './PostInput';

function Feedback() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fire.firestore().collection('posts').get().then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });

    fire.firestore().collection('posts').onSnapshot((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <PostInput />

      {posts.map((post) => (
        <Post
          author={post.author}
          body={post.body}
          title={post.title}
        />
      ))}
    </>
  );
}

export default Feedback;
