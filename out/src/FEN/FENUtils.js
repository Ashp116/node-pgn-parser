"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FENUtils = void 0;
const FENTools_1 = require("./FENTools");
class FENUtils extends FENTools_1.FENTools {
    constructor() {
        super();
    }
    run() {
        this.matrix();
    }
}
exports.FENUtils = FENUtils;
