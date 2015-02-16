'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
var nodejsx = require('node-jsx').install();
var React = require('react');
var routes = require('../app/routes');
var Router = require('react-router');
var Api = require('./Api');

server.connection({
    host: 'localhost',
    port: 8080
});

Api.addRoutes(server);

server.route({
    method: 'GET',
    path: '/styles/{filename}',
    handler: {
        file: function (request) {
            return 'css/' + request.params.filename;
        }
    }
});

server.route({
    method: 'GET',
    path: '/js/{filename}',
    handler: {
        file: function (request) {
            return 'dist/' + request.params.filename;
        }
    }
});

server.route({
    method: 'GET',
    path:   '/{path*}',
    handler: function (request, reply) {
        Router.run(routes, request.path, function (Handler) {
            var markup = React.renderToString(React.createFactory(Handler)());
            reply('<!DOCTYPE html>' + markup);
        });
    }
});

server.start();