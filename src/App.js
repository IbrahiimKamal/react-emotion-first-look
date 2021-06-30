/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from './styles/Global.styles';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Fragment>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
