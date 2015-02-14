var React = require('react');

var Head = React.createClass({

    render: function() {
        return (
            <head lang="en">
                <meta charSet="UTF-8" />
                <title>Speedcoding</title>
                <script defer="defer" src="js/react.js" type="text/javascript"></script>
                <script defer="defer" src="js/app.js" type="text/javascript"></script>
                <link rel="stylesheet" href="styles/main.css" />
            </head>
        );
    }
});

module.exports = Head;
