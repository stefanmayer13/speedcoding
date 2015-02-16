var client;
var Rx = require('rx');

module.exports = {
    setClient: (newClient) => client = newClient,
    getGames: () => {
        var get = Rx.Observable.fromCallback(client.get);
        return get("games").flatMap((games) => {
            return Rx.Observable.fromArray(games);
        }).flatMap((game) => {
            return get('game-' + game);
        }).toArray();
    }
};