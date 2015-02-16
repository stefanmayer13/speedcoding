var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({

    render: function() {
        return (
            <div>
                Hello
                <p><Link to="viewer">Viewer</Link></p>
                <p><a href="doesnotexist">404</a></p>
            </div>
        );
    }
});

module.exports = Home;