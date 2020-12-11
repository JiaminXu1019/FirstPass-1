import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export default function Post({ title, author, body }) {
  return (
    <>
      <div className="bigdiv">
        <div className="header1">Title:</div>
        <div className="div">
          {title}
        </div>
        <div className="header1">Comment:</div>
        <div className="div">
          {body}
        </div>
        <div className="header1">Author:</div>
        <div className="div">
          {author}
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

};
