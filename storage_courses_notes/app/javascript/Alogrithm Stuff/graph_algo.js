const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const = routes[
	['PHX', 'LAX'],
	['PHX', 'JFK'],
	['JFK', 'OKC'],
	['JFK', 'HEL'],
	['JFK', 'LOS'],
	['MEX', 'LAX'],
	['MEX', 'BKK'],
	['MEX', 'LIM'],
	['MEX', 'EZE'],
	['LIM', 'BKK'],

];

const adjacencyList = new Map();

function addNode(airport) {
	adjacencyList.set(airport, []);	
}

function addEdge(origin, destination) {
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)
function bfs(start) {

	const visisted = new Set();

	const queue = [start]

	while(queue.length > 0) {

		const airport = queue.shift();

		const destinations = adjacencyList.get(airport);

		for (const destination of destinations) {

			queue.push(destination);

			if (destination === 'BKK') {
				console.log('found it!');
			}

			if (!visisted.has(destination)) {

				visited.add(destination);
				queue.push(destination);
			}
		}
	}


}


function dfs(start, visisted = new Set()) { 

	console.log(start)

	visisted.add(start)

	const destinations = adjacencyList.get(start);

	for (const destination of destinations) {

		if (destination === 'BKK') {
			console.log('DFS found Bangkok in steps')
			return;
		}

		if (!visited.has(destination)) {
			dfs(destination, visisted);
		}
	}

}

dfs('PHX')

//bfs('PHX')

//O(v+e) for bf and df is always notated as this because
//it goes up with how many edges are traveresed 