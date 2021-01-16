/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
    var rows = grid.length, cols = grid[0].length;
    const DIRECTIONS = [[0, 1], [1, 0], [-1, 0], [0, -1]]; //四个方向
    var copy = new Array(rows).fill(0).map(d=>new Array(cols).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            copy[i][j] = grid[i][j];
        }
    }
    for (hit of hits) { //将复制的gird需要敲掉hits位置的砖块
        copy[hit[0]][hit[1]] = 0;
    }
    var size = rows * cols;
    var unionFind = new UnionFind(size + 1);
    // 将下标为 0 的这一行的砖块与「屋顶」相连
    for (let j = 0; j < cols; j++) {
        if (copy[0][j] == 1) {
            unionFind.union(j, size);
        }
    }
    // 其余网格，如果是砖块向上、向左看一下，如果也是砖块，在并查集中进行合并
    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (copy[i][j] == 1) {
                // 如果上方也是砖块
                if (copy[i - 1][j] == 1) {
                    unionFind.union(getIndex(i - 1, j), getIndex(i, j));
                }
                // 如果左边也是砖块
                if (j > 0 && copy[i][j - 1] == 1) {
                    unionFind.union(getIndex(i, j - 1), getIndex(i, j));
                }
            }
        }
    }
    var hitsLen = hits.length;
    var res = new Array(hitsLen).fill(0); //结果
    for (let i = hitsLen - 1; i >= 0; i--) { //从后网前补
        let x = hits[i][0];
        let y = hits[i][1];

        if (grid[x][y] == 0) { //首先判断本身是有砖块的
            continue;
        }
        // 补回之前与屋顶相连的砖块数
        var origin = unionFind.getSize(size);
        // 如果补回的这个结点在第 1 行，与屋顶相连
        if (x == 0) {
            unionFind.union(y, size);
        }
        //如果相邻的 4 个方向有砖块，合并
        for (direction of DIRECTIONS) {
            var newX = x + direction[0];
            var newY = y + direction[1];

            if (inArea(newX, newY) && copy[newX][newY] == 1) {
                unionFind.union(getIndex(x, y), getIndex(newX, newY));
            }
        }
        // 补回之后与屋顶相连的砖块数
        var current = unionFind.getSize(size);
        // 减去的 1 是逆向补回的砖块（正向移除的砖块），要大于0
        res[i] = Math.max(0, current - origin - 1);
        // 真正补上这个砖块
        copy[x][y] = 1;
    }
    return res;
    function getIndex(x, y) { //坐标映射到并查集
        return x * cols + y;
    }
    function inArea(x, y) { //判断是否在网格中
        return x >= 0 && x < rows && y >= 0 && y < cols;
    }
};
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((value, key)=>{return key}); //当前节点的父节点
        this.size = new Array(n).fill(1); //以当前节点为根节点的所有子树内的节点总数
    }
    find(x) {
        if(x != this.parent[x]) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x];
    }
    union(x,y) {
        var rootX = this.find(x);
        var rootY = this.find(y);
        if(rootX == rootY) {
            return;
        }
        this.parent[rootX] = rootY;
        this.size[rootY] += this.size[rootX];
    }
    getSize(x) {
        var root = this.find(x);
        return this.size[root];
    }
}
