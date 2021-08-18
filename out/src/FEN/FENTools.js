"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FENTools = void 0;
class FENTools {
    matrix() {
        let x_axis = "abcdefgh";
        let y_axis = 8;
        let grid = {};
        x_axis.split("").forEach(x => {
            grid[x] = [];
            for (let i = 0; i < y_axis; i++) {
                grid[x][i] = "";
            }
        });
        return grid;
    }
    ;
    FENSplitter(FEN) {
    }
}
exports.FENTools = FENTools;
