var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load Foundation CSS Framework
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="/countdown" component={Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
