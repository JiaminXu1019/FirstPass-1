import React, { useState } from 'react';
import firebase from 'firebase';
import './Post.css';


export default function PostInput() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
  });

  function addToFirebase() {
    firebase.firestore().collection('posts').add(post);
  }

  return (
    <>
      <div className="bigdiv2">
        Add Feedback
        <div className="header1">
          Title
        </div>
        <div>
          <input className="div" onChange={(e) => setPost({ ...post, title: e.target.value })} />
        </div>
        <div className="header1">
          Comment
        </div>
        <div>
          <input className="div" onChange={(e) => setPost({ ...post, body: e.target.value })} />
        </div>
        <div className="header1">
          Author
        </div>
        <div>
          <input className="div" onChange={(e) => setPost({ ...post, author: e.target.value })} />
        </div>
        <div>
          <button type="button" onClick={() => { addToFirebase(); }}>Submit</button>
        </div>
      </div>
    </>
  );
}
