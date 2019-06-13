import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MyErrorBoundary from './components/MyErrorBoundary';
const Nav = lazy(() => import('./components/Nav'));
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function App() {
  return (
    <Router>
      <MyErrorBoundary>

        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </MyErrorBoundary>
    </Router>
  );
}

export default App;
