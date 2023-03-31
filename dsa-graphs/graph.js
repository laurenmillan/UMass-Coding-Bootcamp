class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {
		this.nodes.add(vertex);
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {
		// iterate over input vertexArray and add each vertex to nodes
		for (const vertex of vertexArray) {
			this.nodes.add(vertex);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge(v1, v2) {
		v1.adjacent.add(v2);
		v2.adjacent.add(v1);
	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
	removeEdge(v1, v2) {
		v1.adjacent.delete(v2);
		v2.adjacent.delete(v1);
	}

	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {
		this.nodes.delete(vertex);
	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {
		const result = [];
		const toVisitStack = [ start ];
		const seen = new Set(toVisitStack);

		while (toVisitStack.length) {
			const curr = toVisitStack.pop();
			result.push(curr.value);
			for (const node of curr.adjacent) {
				if (!seen.has(node)) {
					toVisitStack.push(node);
					seen.add(node);
				}
			}
		}
		return result;
	}

	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {
		const visited = new Set();
		const queue = [ start ];
		const result = [];

		while (queue.length > 0) {
			const current = queue.shift();

			if (!visited.has(current)) {
				visited.add(current);
				result.push(current.value);

				const sortedAdjacent = Array.from(current.adjacent).sort((a, b) => a.value.localeCompare(b.value));

				for (const neighbor of sortedAdjacent) {
					if (!visited.has(neighbor)) {
						queue.push(neighbor);
					}
				}
			}
		}

		return result;
	}
}

module.exports = { Graph, Node };
