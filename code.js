function convertToAdjList(adjMatrix) {
    const adjList = [];

    // For each ROW in adjacncy matrix, check the node's connections
    for (let index = 0; index < adjMatrix.length; index++) {
        adjList[index] = [];

        // For each COLUMN in adjacency matrix, check for an edge
        // If value is 1, then this is an edge; add it to the list.
        for (let j_index = 0; j_index < adjMatrix[index].length; j_index++) {
            if (adjMatrix[index][j_index] === 1) {
                adjList[index].push(j_index);
            }
        }
    }

    return adjList;
}