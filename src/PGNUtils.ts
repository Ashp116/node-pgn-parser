export class PGNUtils {
    /**
    * Gets the main tags from JSON data
    * */
    public getTags(Json: string) {
        let tags = ""
        Json = JSON.parse(Json)

        delete Json["Moves"]
        delete Json["Score"]

        Object.keys(Json).forEach((index => {
            tags = tags + `[${index} "${Json[index]}"]\n`
        }))

        return tags
    }
    /**
     * returns the Score index from JSON Data
     * */
    public getScore(Json: string) {
        Json = JSON.parse(Json)

        return Json['Score']
    }
    /**
     * Gets the Moves index and returns the PGN Moves notation
     * */
    public getMoves(Json: string) {
        Json = JSON.parse(Json)
        Json = Json["Moves"]

        let moves = ""

        if (!Json.length) {
            Object.keys(Json).forEach((index, i) => {
                if (index.includes("Move_")) {
                    let value = Json[index]
                    if (value["white"] && value["black"]) {
                        moves = moves + `${index.replace("Move_","")}. ${value["white"]} ${value["black"]} `
                    }
                }

            })
        }
        else {
            // @ts-ignore
            Json.forEach((value, i) => {
                let val = value.split(" ")

                if (val[0] !== "") {
                    moves = moves + `${i+1}. ${val[0]} ${val[1]} `
                }
                else {
                    moves = moves + `${i+1}. ${val[1]} ${val[2]} `
                }
            })
        }

        return moves;
    }
}