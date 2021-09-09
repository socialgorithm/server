"use strict";
exports.__esModule = true;
var debug = require("debug")("sg:tournament-server");
var http = require("http");
var GameServerInfoConnection_1 = require("./game-server/GameServerInfoConnection");
var GameServerListPublisher_1 = require("./game-server/GameServerListPublisher");
var HttpHandler_1 = require("./http/HttpHandler");
var LobbyManager_1 = require("./lobby/LobbyManager");
var SocketServer_1 = require("./socket/SocketServer");
var TournamentServer = (function () {
    function TournamentServer(options) {
        console.log(banner);
        debug("Initialising game server connections");
        var gameServers = options.games.map(function (gameServerAddress) {
            debug("Connecting to " + gameServerAddress.tournamentServerAccessibleAddress);
            return new GameServerInfoConnection_1.GameServerInfoConnection(gameServerAddress);
        });
        var gameServerListPublisher = new GameServerListPublisher_1.GameServerListPublisher();
        debug("Initialising server");
        var server = http.createServer(HttpHandler_1["default"]);
        this.socketServer = new SocketServer_1.SocketServer(server, gameServers);
        this.socketServer.start();
        var listener = server.listen(options.port, function () {
            var address = listener.address();
            console.log("Listening on port " + address.port);
            debug("Listening on port %d", address.port);
        });
        this.LobbyManager = new LobbyManager_1.LobbyManager();
    }
    return TournamentServer;
}());
exports["default"] = TournamentServer;
var banner = "\n                _       _                  _ _   _\n ___  ___   ___(_) __ _| | __ _  ___  _ __(_) |_| |__  _ __ ___\n/ __|/ _ \\ / __| |/ _` | |/ _` |/ _ \\| '__| | __| '_ \\| '_ ` _ \\\n\\__ \\ (_) | (__| | (_| | | (_| | (_) | |  | | |_| | | | | | | | |\n|___/\\___/ \\___|_|\\__,_|_|\\__, |\\___/|_|  |_|\\__|_| |_|_| |_| |_|\n                           |___/\nTOURNAMENT SERVER\n";
//# sourceMappingURL=TournamentServer.js.map