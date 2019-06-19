import React, {Component} from 'react';
import MainFullStack from './MainFullStack/MainFullStack';
import logo from '../../Static/logo.svg';
import './Main.css';
import './MainHover.css'

const setTimeClass =  {
  "arrowLeft": "arrowHover",
  "hr": "hrHover",
  "hrturn": "hrturnHover",
  "arrowRight": "arrowHover",
}

class Main extends Component {
  _isMounted = false;

  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.node.scrollIntoView();
      setTimeout(() => {
        if(this._isMounted) {
          this.setState({
            active: true
          })
        }
      },3000)
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {active} = this.state
    return (
      <div className="main" onScroll={() => console.log('qwe')}>
        <div ref={node => this.node = node} />
        <div className="homepage">
          <header>
            <h1 className ={`name ${ active && 'nameHover'}`}
            >周杰</h1>
            {Object.keys(setTimeClass).map((val,index) =>
              <hr
                className ={`${val} ${ active && setTimeClass[val]}`}
                key={val[index]}
              />
            )}
              <img src={logo} className ={`Timing-logo ${active && 'timingLogoHover'}`} alt="Timing-logo"/>
            <a className ={`click ${active && 'clickHover'}`} href="#mainFullStack">keep it simple</a>
          </header>
        </div>
        <div className='seperate' />
        <MainFullStack />
      </div>
    )
  }
}

export default Main
