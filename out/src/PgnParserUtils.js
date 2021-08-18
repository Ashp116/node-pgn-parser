"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgnParserUtils = void 0;
const JSONUtils_1 = require("./JSONUtils");
const PGNUtils_1 = require("./PGNUtils");
const FENUtils_1 = require("./FEN/FENUtils");
class PgnParserUtils {
    constructor() {
        this.JSON = new JSONUtils_1.JSONUtils();
        this.PGN = new PGNUtils_1.PGNUtils();
        this.FEN = new FENUtils_1.FENUtils();
    }
}
exports.PgnParserUtils = PgnParserUtils;
