const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Test 1: Make sure my code functions identically to given answer code
const testDefault =
    jsc.forall("array (pair nat nat)", function(edges) {
        var max = edges.reduce(function(a, b) { return Math.max(a, Math.max(b[0], b[1])); }, 0);
        var mat = [];
        for(var i = 0; i <= max; i++) {
            mat[i] = [];
            for(var j = 0; j <= max; j++) {
                mat[i][j] = 0;
            }
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) mat[i][edges[j][1]] = 1;
            }
        }
        var list = [];
        for(var i = 0; i <= max; i++) {
            list[i] = [];
            for(var j = 0; j < edges.length; j++) {
                if(edges[j][0] == i) list[i].push(edges[j][1]);
            }
            list[i].sort(function(a, b) { return a - b; });
            list[i] = [...new Set(list[i])];
        }
        return JSON.stringify(list) == JSON.stringify(convertToAdjList(mat));
    });

// Test 2: Test empty graph, no nodes
const testEmpty =
    jsc.forall(jsc.constant([]), function(emptyMatrix) {
        const a1 = [];
        return JSON.stringify(convertToAdjList(emptyMatrix)) == JSON.stringify(a1);
    })

// Test 3: Hardcoded expected value test
const testExpected =
    jsc.forall(jsc.constant(true), function () {
        const a1 = [
            [1, 0, 1], // Node 0 -> 0, 2
            [0, 0, 1], // Node 1 -> 2
            [0, 0, 0]  // Node 2 -> None
        ];
        const a2 = [
            [0, 2],
            [2],
            []
        ];
        return JSON.stringify(convertToAdjList(a1)) == JSON.stringify(a2);
    });

jsc.assert(testDefault, { tests: 1000 });
console.log("testDefault passed.");
jsc.assert(testEmpty, { tests: 1 });
console.log("testEmpty passed.");
jsc.assert(testExpected, { tests: 1});
console.log("testExpected passed.");