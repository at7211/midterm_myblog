import React from 'react';
import Radium from 'radium';
import githubIcon from '../../Static/github-brands.svg'

const appear = Radium.keyframes({
  '0%': {opacity: 0,},
  '100%': {opacity: 1},
}, 'pulse');

const styles = {
  main:{
    position: 'relative',
    height: 140,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272727',
    animationName: appear,
    animationDuration: '1s',
    animationDelay: '2s',
    animationFillMode: 'forwards',
  },
  wrapper:{
    display: 'flex',
    position: 'relative',
    height: 80,
    width: '80%',
    alignItems: 'center',
  },
  p:{
    color: '#fff',
    fontFamily: 'Poppins',
    margin: '0 5px 0 0'
  },
  iconWrapper: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  githubIcon: {
    width: 25,
  },
  backToTop: {
    position: 'absolute',
    bottom: 15,
    left: '50%',
    transform: 'translateX(-50%)',
  }
};

function Footer() {
    return (
    <div style={styles.main}>
      <div style={styles.wrapper}>
        <p style={styles.p}>CREATED BY JAY CHOU</p>
        <p style={styles.p}>©2019</p>
        <a href="#top" style={styles.backToTop}>back to top</a>
        <div style={styles.iconWrapper}>
          <img style={styles.githubIcon} src={githubIcon} alt="github"/>
        </div>
      </div>
    </div>
  )
}


export default Radium(Footer)
