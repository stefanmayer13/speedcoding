"use strict";

var redis = require('redis');
var client = redis.createClient();
var Games = require('./services/Games');

client.on('connect', function() {
    console.log('Redis Connected');
});
client.on("error", function (err) {
    console.log("Redis Error " + err);
});

client.set("games", [1, 2]);
client.set("game-1", JSON.stringify({title: 'Test Game'}));
client.set("game-2", JSON.stringify({title: 'Test Game 2'}));

Games.setClient(client);

module.exports = {
    addRoutes: (server) => {
        server.route({
            method: 'GET',
            path: '/api/routes',
            handler: (request, reply) => {
                Games.getGames().subscribe((data) => {
                    reply(data);
                }, (err) => {
                    reply(err);
                });
            }
        });
    }
}