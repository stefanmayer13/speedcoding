var React = require('react');
var Link = require('react-router').Link;

var Viewer = React.createClass({

    render: function() {
        return (
            <div>
                Cart
                <p><Link to="home">Home</Link></p>
            </div>
        );
    }
});

module.exports = Viewer;