"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PGNUtils = void 0;
class PGNUtils {
    /**
    * Gets the main tags from JSON data
    * */
    getTags(Json) {
        let tags = "";
        Json = JSON.parse(Json);
        delete Json["Moves"];
        delete Json["Score"];
        Object.keys(Json).forEach((index => {
            tags = tags + `[${index} "${Json[index]}"]\n`;
        }));
        return tags;
    }
    /**
     * returns the Score index from JSON Data
     * */
    getScore(Json) {
        Json = JSON.parse(Json);
        return Json['Score'];
    }
    /**
     * Gets the Moves index and returns the PGN Moves notation
     * */
    getMoves(Json) {
        Json = JSON.parse(Json);
        Json = Json["Moves"];
        let moves = "";
        if (!Json.length) {
            Object.keys(Json).forEach((index, i) => {
                if (index.includes("Move_")) {
                    let value = Json[index];
                    if (value["white"] && value["black"]) {
                        moves = moves + `${index.replace("Move_", "")}. ${value["white"]} ${value["black"]} `;
                    }
                }
            });
        }
        else {
            // @ts-ignore
            Json.forEach((value, i) => {
                let val = value.split(" ");
                if (val[0] !== "") {
                    moves = moves + `${i + 1}. ${val[0]} ${val[1]} `;
                }
                else {
                    moves = moves + `${i + 1}. ${val[1]} ${val[2]} `;
                }
            });
        }
        return moves;
    }
}
exports.PGNUtils = PGNUtils;
