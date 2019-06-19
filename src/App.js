import React from 'react';
import Main from './component/Main/Main';
import Nav from './component/Nav/Nav';
import About from './component/About/About';
import Collection from './component/Collection/Collection';
import Articles from './component/Articles/Articles';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';


const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflowY: 'auto',
  },
}

function App({
  store,
}: Props) {
  return (
    <div style={styles.wrapper}>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path ="/" component={Main} />
            <Route exact path ="/about" component={About} />
            <Route exact path ="/collection" component={Collection} />
            <Route exact path ="/articles" component={Articles} />
            <Route path ="/articles/:id" component={Articles} />
            <Route path ="/login" component={Login} />
            <Route path ="/register" component={Register} />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
