import React from 'react';
import Main from './component/Main/Main';
import Nav from './component/Nav/Nav';
import About from './component/About/About';
import Collection from './component/Collection/Collection';
import Articles from './component/Articles/Articles';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflowY: 'auto',
  },
}

function App() {
  return (
    <div style={styles.wrapper}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path ="/" component={Main} />
          <Route exact path ="/about" component={About} />
          <Route exact path ="/collection" component={Collection} />
          <Route exact path ="/articles" component={Articles} />
          <Route path ="/articles/:id" component={Articles} />
          <Route path ="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
