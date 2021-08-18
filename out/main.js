"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsePgn = void 0;
/// <reference path="./typings/typings.d.ts" />
const fs = require("fs");
const PgnParserUtils_1 = require("./src/PgnParserUtils");
class PgnParser extends PgnParserUtils_1.PgnParserUtils {
    constructor() {
        super();
    }
    toJSON(Pgn, options) {
        if (options == undefined) {
            options = {
                labelMovesNumbers: false,
                labelColorMoves: false,
                calculateWinner: false
            };
        }
        if (fs.lstatSync(Pgn).isFile()) {
            try {
                var data = fs.readFileSync(Pgn, 'utf8');
                Pgn = data;
            }
            catch (err) {
                console.error(err);
            }
        }
        var pgn = this.JSON.trimPgn(Pgn);
        if (this.JSON.isPgn(pgn)) {
            let tags = this.JSON.getTags(Pgn, options);
            let moves = this.JSON.getMoves(Pgn, options);
            let score = this.JSON.getScore(Pgn);
            tags["Moves"] = moves;
            tags["Score"] = score;
            return JSON.stringify(tags, null, "\t");
        }
        else {
            throw new Error(`Type Error: input value is not Pgn`);
        }
    }
    toPGN(Json) {
        if (fs.lstatSync(Json).isFile()) {
            try {
                var data = fs.readFileSync(Json, 'utf8');
                Json = data;
            }
            catch (err) {
                console.error(err);
            }
        }
        let tags = this.PGN.getTags(Json);
        let moves = this.PGN.getMoves(Json);
        let score = this.PGN.getScore(Json);
        return (tags + "\n" + moves + score);
    }
    toFEN(Pgn, move) {
        this.FEN.run();
    }
}
let parser = new PgnParser();
let pgn2Json = parser.toJSON("C:\\Users\\Ashp1\\Downloads\\node-pgn-parser\\lichess_pgn_2021.08.12_thyrgle_vs_Ashp116.fUraDroO.pgn");
let Json2pgn = parser.toPGN("C:\\Users\\Ashp1\\Downloads\\node-pgn-parser\\test\\Pgn.json");
let FEN = parser.toFEN();
exports.ParsePgn = new PgnParser();
