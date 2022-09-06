class Graph {
  constructor() {
      this.vertices = [];
      this.adjacent = {};
      this.edges = 0;
  }

  addVertex(v) {
      this.vertices.push(v);
      this.adjacent[v] = [];
  }
  addEdge(v, w) {
      this.adjacent[v].push(w);
      this.adjacent[w].push(v);
      this.edges++;
  }
  bfs(goal, root = this.vertices[0]) {
    let adj = this.adjacent;

    const queue = [];
    queue.push(root);
    const discovered = [];
    discovered[root] = true;
    while(queue.length) {
        let v = queue.shift();
        console.log(v);

        if (v === goal) {
            return true;
        }
        for (let i = 0; i < adj[v].length; i++) {
            if (!discovered[adj[v][i]]) {
                discovered[adj[v][i]] = true;
                queue.push(adj[v][i]);
            }
        }
    }
    return false;
  }
}
