# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

<hr>

Outer Loop: Runs in $O(n)$ linear time through each row or node in the matrix.

Inner Loop: Runs in $O(n)$ linear time through each column or node's edge values in the matrix. The inner loop also has a list push operation that is $O(1)$

The overall runtime is therefore: $O(n) * O(n) = O(n^2)$, which is expected from a simple program with nested for loops.

In terms of verticies and edges, the input is a matrix where the number of verticies is equal to the number of nodes. Each node may or may not have an edge to another node.

Checking the verticies or the nodes is the important part, since that is the determining input element `n`. When edges are checked, the only resulting operation is a $O(1)$ action for pushing onto the return conversion list.

Therefore you could say the algorithm also runs in $O(V^2)$ time, since again- verticies and nodes are synonymous. The runtime only depends on the number of verticies, not the number of edges.
