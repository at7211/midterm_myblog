import React from 'react'

const styles = {
  fullPostWrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  post: {
    display: 'flex',
    fontSize: 21,
    lineHeight: 1.58,
    fontWeight: 400,
    letterSpacing: '-.003em',
    flexDirection: 'column',
    margin: 20,
    width: 740,
    height: '100%',
    padding: '10px 5px 5px 10px',
    // border: 'solid 1px rgba(0, 0, 0, 0.1)',
    // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 4px',
  },
  date: {
    width: '100%',
    color: 'rgba(0,0,0,.54)',
    fontSize: 16,
    margin: '0 0 0 10px',
  },
  title: {
    width: '100%',
    height: 40,
    fontSize: 34,
  },
  content: {
    margin:'10px 0 0 5px',
  },
}

function FullPost({title, content}:props){
		return (
      <div style={styles.fullPostWrapper}>
      <div style={styles.post}>
        <h1 style={styles.title}>{title}</h1>
        <div style={styles.date}>2019.5.15</div>
        <div style={styles.content}>{content}</div>
      </div>
    </div>
  )
}

export default FullPost
