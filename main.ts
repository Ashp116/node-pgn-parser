/// <reference path="./typings/typings.d.ts" />
import * as fs from 'fs'
import {PgnParserUtils} from "./src/PgnParserUtils";

class PgnParser extends PgnParserUtils {
    constructor() {
        super();
    }

    public toJSON(Pgn: string, options?: toJSONPgnOptions): string {

        if (options == undefined) {
            options = {
                labelMovesNumbers: false,
                labelColorMoves: false,
                calculateWinner: false
            }
        }

        if (fs.lstatSync(Pgn).isFile()) {
            try {
                var data = fs.readFileSync(Pgn, 'utf8')
               Pgn = data
            } catch (err) {
                console.error(err)
            }

        }

        var pgn = this.JSON.trimPgn(Pgn);

        if (this.JSON.isPgn(pgn)) {
            let tags = this.JSON.getTags(Pgn, options);
            let moves = this.JSON.getMoves(Pgn, options);
            let score = this.JSON.getScore(Pgn);

            tags["Moves"] = moves
            tags["Score"] = score

            return JSON.stringify(tags, null, "\t");
        }
        else {
            throw new Error(`Type Error: input value is not Pgn`)
        }
    }

    public toPGN(Json: string) {

        if (fs.lstatSync(Json).isFile()) {
            try {
                var data = fs.readFileSync(Json, 'utf8')
                Json = data
            } catch (err) {
                console.error(err)
            }

        }

        let tags = this.PGN.getTags(Json)
        let moves = this.PGN.getMoves(Json)
        let score = this.PGN.getScore(Json)

        return (tags + "\n" + moves + score)
    }
}

type toJSONPgnOptions = {
    labelMovesNumbers: boolean
    labelColorMoves: boolean
    calculateWinner: boolean
}

export const ParsePgn = new PgnParser();
