import React, { useEffect, useState } from 'react';
import fire from './fire.js';
import Post from './Post';
import PostInput from './PostInput';
import MyHeader from './myHeader.js'
import './Feedback.css'

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

      <MyHeader />

      <div className='feedback-body'>
        <p id="feedback-text">Leave your feedback here! We'd love to hear from you :D</p>
        <div className='feedback-grid'>
          <PostInput />
          {posts.map((post) => (
            <Post
              author={post.author}
              body={post.body}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feedback;
