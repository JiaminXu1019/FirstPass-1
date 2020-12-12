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
      <div className="bigdiv">
        <div className="header1">
          Title
        </div>
          <input className="div" onChange={(e) => setPost({ ...post, title: e.target.value })} />
        <div className="header1">
          Comment
        </div>
          <input className="div" onChange={(e) => setPost({ ...post, body: e.target.value })} />
        <div className="header1">
          Author
        </div>
          <input className="div" onChange={(e) => setPost({ ...post, author: e.target.value })} />
        <div>
          <button type="button" onClick={() => { addToFirebase(); }}>Submit</button>
        </div>
      </div>
    </>
  );
}
