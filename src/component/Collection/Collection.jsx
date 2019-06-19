import React, { PureComponent, Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Radium from 'radium';
import './Collection.css';

const appear = Radium.keyframes({
  '0%': {opacity: 0},
  '100%': {opacity: 1},
}, 'pulse');

const appearVideo = Radium.keyframes({
  '0%': {opacity: 0},
  '90%': {opacity: 0},
  '100%': {opacity: 0.1},
}, 'pulse');


const styles = {
  wrapper:{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding:' 200px 0 0 0',
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  h1:{
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  backgroundVideo: {
    position: 'fixed',
    minWidth: '100%',
    minHeight: '100%',
    margin: 0,
    padding: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    filter: 'grayscale(80%)',
    animationName: appearVideo,
    animationDuration: '4000ms',
    animationFillMode: 'forwards',
  },
  timelineHeader: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'initial',
    alignItems: 'center',
    margin: '0 0 80px 0',
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  timeline: {
    display: 'flex',
    margin: '0 auto',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '100%',
    maxWidth: 700,
    position: 'relative',
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  line: {
    position: 'absolute',
    left: '50%',
    width: 2,
    height: '100%',
    marginLeft: -1,
    backgroundColor: 'black', //shoudchange
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  timelineItem: {
    padding: '40px 0',
    opacity: '.3',
    filter: 'blur(2px)',
    transition: '.5s',
    boxSizing: 'border-box',
    width: 'calc(50% - 36px)',
    display: 'flex',
    position: 'relative',
    transform: 'translateY(-80px)',
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  timelineImg: {
    maxWidth: '100%',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4)',
  },
  timelineTitle: {
    letterSpacing: 3,
    width: '100%',
    position: 'absolute',
    color: 'black', //should change rgba(255, 255, 255, 0.5)
    fontSize: 13,
    fontFamily: '"Pathway Gothic One", sans-serif',
    borderLeft: '2px solid rgba(255, 255, 255, 0.5)',
    top: '70%',
    margin: '-5px 0 0 0',
    padding: '0 0 0 15px',
    opacity: 0,
    right: 'calc(-100% - 56px)',
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  timelineTitle__active: {
    top: '50%',
    transition: '.3s all .2s',
    opacity: 1,
  },
  timelineContentTitle: {
    fontSize: 66,
    margin: '-10px 0 0 0',
    transition: '.4s',
    padding: '0 10px',
    boxSizing: 'border-box',
    fontFamily: '"Pathway Gothic One", sans-serif',
    color: '#fff',
    animationName: appear,
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  timelineItem__active: {
    opacity: 1,
    transform: 'translateY(0)',
    filter: 'blur(0px)',
  },
};

class Collection extends PureComponent {
  _isMounted = false;

  constructor(props){
    super(props)
    this.state = {
      changeVideo: false,
      items: [],
      video: '',
    }
  }

  componentDidMount(){
    this._isMounted = true;
    this.node.scrollIntoView();

    fetch("http://localhost:3001/api/videos")
      .then(res => res.json())
      .then(data => {
        if(this._isMounted){
          this.setState({
            items: data,
          })
        }
      })
      .then(() => {
        this.setState({
          video: this.state.items ? this.state.items[0].link : ''
        })
      });
  }

  componentDidUpdate(prevProps, prevState) {
    window.onscroll = () => {
      // 應該有更好的寫法 ＱＡＱ
      let k = 0
      console.log('window.pageYOffset ', window.pageYOffset )

      for( let i = 0; i < this.state.items.length; i++){
        if (window.pageYOffset > 500*i) {
          k = i
        }
      }
      this.setState({
        video: this.state.items[k].link,
      })
    }

    if (this.state.video !== prevState.video) {
      this.setState({
        changeVideo: !this.state.changeVideo,
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { changeVideo, items, video } = this.state;

    return (
      <Fragment>
        <div ref={node => this.node = node} />
        <div style={styles.wrapper}>
          {/* 應該有更好的寫法嗚嗚  */}
          {changeVideo && <iframe
              style={styles.backgroundVideo}
              width="560"
              height="315"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Youtube Player"
              unselectable="on" />}
          {!changeVideo && <iframe
            style={styles.backgroundVideo}
            width="560"
            height="315"
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube Player"
            unselectable="on" />}
          <div style={styles.timelineHeader}>
            <h3>從 2017 年起，紀錄一些我曾做過的事。</h3>
          </div>
          <div style={styles.timeline}>
            {items.map(item => {
              return (
                <div style={styles.timeline} key={item.id}>
                  <div style={styles.line} />
                  <div style={{
                    ...styles.timelineItem,
                    ...styles.timelineItem__active}}>
                    <div style={{
                      ...styles.timelineTitle,
                      ...styles.timelineTitle__active}}>{item.name}</div>
                    <div style={styles.timelineContent}>
                      <LazyLoadImage
                        style={styles.timelineImg}
                        alt={item.name}
                        src={item.img}
                        effect="blur" />
                      <h2 style={styles.timelineContentTitle}>{item.date}</h2>
                      <p style={styles.timelineContentDesc}>{item.content}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Radium(Collection)
