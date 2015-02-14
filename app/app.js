var React = require('react');
var routes = require('./routes');
var Router = require('react-router');

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document);
});