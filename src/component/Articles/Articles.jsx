import React, { PureComponent } from 'react';
import Radium from 'radium';
import Posts from './Posts';
import FullPost from './FullPost';

const appear = Radium.keyframes({
  '0%': {opacity: 0,},
  '100%': {opacity: 1},
}, 'pulse');

const styles = {
  postsWrapper: {
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
    height: '500%',
    width: '100%',
    padding: '10% 0 0 0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  h1:{
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
};

class Articles extends PureComponent {
  _isMounted = false;

  constructor(props){
    super(props)
    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.node.scrollIntoView();

    fetch("http://localhost:3001/api/articles")
      .then(res => res.json())
      .then(data => {
        if(this._isMounted){
          this.setState({
            articles: data,
          })
        }
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  postSelectedHandler = id => {
    this.props.history.push("/articles/" + id);
  };

  render() {
    const { id } = this.props.match.params;
    const { articles } = this.state;

    let display = null;
    if (id) {
      let post = articles[id];
      display = post ? (
        <FullPost
          title={post.title}
          content={post.content}
        />
      ) : (
        <h1>Not found.</h1>
      );
    } else {
      display = articles.map((post, id) => (
        <Posts
          key={id}
          title={post.title}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      ));
    }

    return (
      <>
        <div ref={node => this.node = node} />
        <div style={styles.postsWrapper}>
          {display}
        </div>
      </>
    )
  }
}

export default Radium(Articles)
