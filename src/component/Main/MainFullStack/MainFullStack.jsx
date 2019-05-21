import React, { PureComponent } from 'react';
import Radium from 'radium';
import TypeWritter from '../Typewritter/Typewriter' ;
import LeftParantheses from '../../../Static/left-parantheses.svg';
import RightParantheses from '../../../Static/right-parantheses.svg';

const flip = Radium.keyframes({
  '0%': { transform: 'rotateX(0)' },
  '100%': {
    transform: 'rotateX(180deg)',
    width: 30,
  },
}, 'pulse');

const styles = {
  fullStack: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    position: 'relative',
    width: '50vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  parantheses: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  leftParantheses: {
    position: 'relative',
    right: 200,
    width: 80,
  },
  leftParanthesesActive:{
    right: 400,
    transitionDuration: '1.5s',
    animationName: flip,
    animationDelay: '1.5s',
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  rightParantheses: {
    position: 'relative',
    right: 60,
    width: 80,
  },
  rightParanthesesActive: {
    animationName: flip,
    animationDelay: '1.5s',
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  right: {
    width: '50vw',
    hegiht: '100vh',
  },
  fullstackTitle: {
    marginTop: 0,
    fontSize: 42,
    fontWeight: 300,
    letterSpacing: 1.618, //黃金比例，這就對ㄖ
    fontFamily: 'brandon-grotesque,Helvetica Neue,Helvetica,Arial',
  },
  fullstackTitleSpan: {
    fontWeight: 600,
    marginLeft: 10,
  },
  fullstackContent: {
    width: 400,
    lineHeight: 1.618, //黃金比例，這就對ㄖ
    letterSpacing: 1,
  }
}

class MainFullstack extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      active: false,
      type: false
    }
  }

  activeType = () => {
    setTimeout(()=>{
      this.setState({
        type: true
      })
    }, 2500)
  }

  render() {
    const { active, type } = this.state
    return (
      <section id ="mainFullStack" style={styles.fullStack}>
        <div style={styles.left}>
          <div style={ styles.parantheses } onMouseOver={() => {
            this.activeType()
            this.setState({
              active: true
            })
            }}>
            <img style={ [styles.leftParantheses, active && styles.leftParanthesesActive] } src={ LeftParantheses } alt=""/>
              { type && <TypeWritter /> }
            <img style={ [styles.rightParantheses, active && styles.rightParanthesesActive] } src={ RightParantheses } alt=""/>
          </div>
        </div>
        <div style={styles.right}>
          <h2 style={styles.fullstackTitle}>FULL-STACK<span style={styles.fullstackTitleSpan}>DEV</span></h2>
          <p style={styles.fullstackContent}>講一些我會的東東，例如react, redux, 串接api(啊雖然還不會後端但先寫全端就對ㄖ）然後再搭配個個性積極、學習力強、擅長團隊合作......描述自己像個優秀青年這樣。啊希望將來可以用英文打比較潮。</p>
        </div>
      </section>
    )
  }
}

export default Radium(MainFullstack)
