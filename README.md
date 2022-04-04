<div align="center">

# node-pgn-parser
Easily convert ***PGN*** to ***JSON***



------------------------

[![NPM](https://img.shields.io/badge/npm-v1.0.1-blue)](https://www.npmjs.com/package/node-pgn-parser)
</div>

### Why chose this module?
This library is very easy to use and can convert PGN data to JSON with ease. This module will make storing Chess game data easily and can you the data any chess website.

-----------------

# Installation
``` 
npm install node-pgn-parser --save 
```



----------------
# Example

Here is an example project

<summary><strong>PGN to JSON</strong></summary>
<br>

chessgame.pgn

````pgn
[Event "Memorial Rosenwald"]
[Site "New York (USA)"]
[Date "1956.??.??"]
[Round "?"]
[White "Donald Byrne"]
[Black "Bobby Fischer"]
[Result "0-1"]

1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4
Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6
15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+
21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27.
Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5
34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40.
Kb1 Nc3+ 41. Kc1 Rc2# 0-1
````

index.ts
````ts
import {toObject, toJSON} from 'node-xml-to-js'

fs.readFile("path/to/user.xml", 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    
    let User = parser.toObject(data)
    console.log(User)
})
````

output
```
{
  Ashp116: {
    _id: '116',
    favirote: {
      color: 'Red',
      sport: 'Tennis, Basket Ball',
      gaming: 'None',
      hobby: 'Game Development'
    }
  }
}
```



<summary><strong>XML to JSON</strong></summary>

user.xml
````xml
<Ashp116 id="116">
    <favirote>
        <color>Red</color>
        <sport>Tennis, Basket Ball</sport>
        <gaming>None</gaming>
        <hobby>Game Development</hobby>
    </favirote>
    <IsAMillionaire>false</IsAMillionaire>
    <IsATrillionaire>true</IsATrillionaire>
    <extra>
        <joke>What's the best thing about Switzerland? I don't know, but the flag is a big plus</joke>
    </extra>
</Ashp116>
````

index.ts
````ts
import {toObject, toJSON} from 'node-xml-to-js'

fs.readFile("path/to/user.xml", 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    
    let User = parser.toJSON(data, {beautify: true})
    console.log(User)
})
````

output
```
{
        "Ashp116": {
                "_id": "116",
                "favirote": {
                        "color": "Red",
                        "sport": "Tennis, Basket Ball",
                        "gaming": "None",
                        "hobby": "Game Development"
                }
        }
}

```
