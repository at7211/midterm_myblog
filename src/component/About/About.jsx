import React, {Component} from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Radium from 'radium'

const appear = Radium.keyframes({
  '0%': {opacity: 0,},
  '100%': {opacity: 1},
}, 'pulse');

const styles = {
  main:{
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myPhoto: {
    width: 240,
  },
  topic:{
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  content: {
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  }
};


class About extends Component {
  componentDidMount(){
    this.node.scrollIntoView();
  }

  render() {
    return (
      <>
        <div ref={node => this.node = node} />
        <div style={styles.main}>
          <h1 style={styles.topic}>安安 我是啾啾杰</h1>
          <p style={styles.content}>期許自己可以更好，回饋於我喜歡的文化與在意的社會價值。</p>
        </div>
      </>
    )
  }
}

export default Radium(About)
