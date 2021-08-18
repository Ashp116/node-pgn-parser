"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONUtils = void 0;
class JSONUtils {
    /**
     * Removes: \n, and spaces from the PGN. In other words make the PGN string inline
     * */
    trimPgn(Pgn) {
        var endPgn = "";
        Pgn.split("\n").forEach((value => endPgn = endPgn + value.trim()));
        return endPgn;
    }
    /**
     * Returns the score value on the PGN
     * */
    getScore(Pgn) {
        var trimPgn = this.trimPgn(Pgn);
        var pgn = trimPgn.split(`"]`);
        // @ts-ignore
        pgn = pgn.pop().replace(" ", "").split(/\d+\.(\.\.)?/g);
        pgn.forEach((value, index) => {
            if (value == "" || value == undefined) {
                pgn.splice(index, 1);
            }
        });
        pgn.shift();
        let score = pgn[pgn.length - 1].split(" ").pop();
        pgn[pgn.length - 1] = pgn[pgn.length - 1].replace(score, "");
        return score;
    }
    /**
     * Returns the tags, all the value that are inside the [] PGN string
     * */
    getTags(Pgn, options) {
        var trimPgn = this.trimPgn(Pgn);
        var pgn = trimPgn.split(`"]`);
        let score = this.getScore(Pgn);
        var tags = {};
        pgn.pop();
        pgn.forEach((value => {
            var TagRoster = value.replace("[", "").split(" ");
            var tag = TagRoster.shift().replace("'", "").replace('"', "");
            var val = TagRoster.join(" ").replace("'", "").replace('"', "");
            tags[tag] = val;
        }));
        let score_split = score.split("-");
        if (options && options.calculateWinner) {
            if (score_split[0] == "1") {
                tags["Winner"] = "White";
            }
            else if (score_split[1] == "1") {
                tags["Winner"] = "Black";
            }
        }
        return tags;
    }
    /**
     * Returns the parsed JSON Moves Value of the PGN string
     * */
    getMoves(Pgn, options) {
        var trimPgn = this.trimPgn(Pgn);
        var pgn = trimPgn.split(`"]`);
        // @ts-ignore
        pgn = pgn.pop().replace(" ", "").split(/\d+\.(\.\.)?/g);
        pgn.forEach((value, index) => {
            if (value == "" || value == undefined) {
                pgn.splice(index, 1);
            }
        });
        pgn.shift();
        var score = this.getScore(Pgn);
        let last_move = pgn.pop().replace(" " + score, "");
        pgn.push(last_move);
        if (options.labelColorMoves) {
            let newPgn = [];
            pgn.forEach(((value, index) => {
                let moves = value.split(" ");
                let white;
                let black;
                if (moves[0] == "") {
                    white = moves[1];
                    black = moves[2];
                }
                else if (moves[0] !== "" && moves) {
                    white = moves[0];
                    black = moves[1];
                }
                newPgn.push({
                    white: white,
                    black: black
                });
            }));
            pgn = newPgn;
        }
        if (options.labelMovesNumbers) {
            let newPgn = {};
            pgn.forEach(((value, index) => {
                newPgn["Move_" + (index + 1)] = value;
            }));
            // @ts-ignore
            pgn = newPgn;
        }
        return pgn;
    }
    /**
     * Checks if the PGN has the main Tags [Event, Site, Date, White, Black,Result]
     * */
    isPgn(Pgn) {
        let tags = this.getTags(Pgn);
        var counter = 0;
        try {
            let needTags = ["Event", "Site", "Date", "White", "Black", "Result"];
            Object.keys(tags).forEach(value => {
                if (needTags.includes(value))
                    counter += 1;
            });
            if (counter < needTags.length) {
                return false;
            }
            else {
                return true;
            }
        }
        catch (_a) {
            return false;
        }
    }
}
exports.JSONUtils = JSONUtils;
