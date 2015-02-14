var React = require('react');
var Head = require('./Head');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({

    render: function() {
        return (
            <html>
                <Head />
                <body>
                    <RouteHandler/>
                </body>
            </html>
        );
    }
});

module.exports = App;
