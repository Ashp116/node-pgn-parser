"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgnParserUtils = void 0;
const JSONUtils_1 = require("./JSONUtils");
const PGNUtils_1 = require("./PGNUtils");
class PgnParserUtils {
    constructor() {
        this.JSON = new JSONUtils_1.JSONUtils();
        this.PGN = new PGNUtils_1.PGNUtils();
    }
}
exports.PgnParserUtils = PgnParserUtils;
