var App = require('./components/App');
var Home = require('./components/Home');
var Viewer = require('./components/Viewer');
var NotFound = require('./components/NotFound');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="home" handler={Home}/>
        <Route name="viewer" path="/viewer" handler={Viewer}/>

        <NotFoundRoute handler={NotFound}/>
    </Route>
);

module.exports = routes;
