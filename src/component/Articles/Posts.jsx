import React from 'react';

const styles = {
  postWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  post: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    width: 640,
    height: 200,
    padding: '10px 5px 5px 10px',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 4px',
  },
  title: {
    width: '100%',
    height: 40,
    fontSize: 34,
  },
  content: {
    margin:'10px 0 0 5px',
  }
}

const Posts = props => {
  return (
    <div style={styles.postWrapper}>
      <button style={styles.post} onClick={props.clicked}>
        <div style={styles.title}>{props.title}</div>
        <div style={styles.content}>{props.content}</div>
      </button>
    </div>
  )
}

export default Posts
