class Graph {
    constructor(v) {
        this.vertices = v //vertices：至高点
        this.adj = []
        this.edges = 0
        this.marked = [] //深度优先，标记访问过的节点
        for (let i = 0; i < this.vertices; ++i) {
            this.adj[i] = []
            this.adj[i].push('')
            this.marked[i] = false
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges++
    }
    showGraph() {
        for (let i = 0; i < this.vertices; ++i) {
            console.log(i + ' -> ')
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) console.log(this.adj[i][j])
            }
        }
        console.log(this.adj)
    }
    dfs(v) {
        this.marked[v] = true
        if (this.adj[v] !== undefined) console.log(v)
        for (let w in this.adj[v]) {
            if (!this.marked[w]) this.dfs(w)
        }
    }
}
let map = new Graph(5)
map.addEdge(0, 1)
map.addEdge(0, 2)
map.addEdge(1, 3)
map.addEdge(2, 4)
map.showGraph()
console.log('--------------')
console.log('边：' + map.edges)
map.dfs(0)