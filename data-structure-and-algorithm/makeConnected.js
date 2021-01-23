/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 * 用以太网线缆将n台计算机连接成一个网络，计算机的编号从0到n-1。线缆用connections表示，其中connections[i] = [a, b]连接了计算机a和b。
 * 网络中的任何一台计算机都可以通过网络直接或者间接访问同一个网络中其他任意一台计算机。
 * 给你这个计算机网络的初始布线connections，你可以拔开任意两台直连计算机之间的线缆，
 * 并用它连接一对未直连的计算机。请你计算并返回使所有计算机都连通所需的最少操作次数。如果不可能，则返回-1 。
 */
var makeConnected = function(n, connections) {
    if (connections.length < n - 1) {
        return -1;
    }

    const edges = new Map();
    for (const [x, y] of connections) {
        edges.get(x) ? edges.get(x).push(y) : edges.set(x, [y]);
        edges.get(y) ? edges.get(y).push(x) : edges.set(y, [x]);
    }

    const used = new Array(n).fill(0);

    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (!used[i]) {
            dfs(i, used, edges);
            ans++;
        }
    }
    return ans - 1;
};

const dfs = (u, used, edges) => {
    used[u] = 1;
    if (edges.get(u)) {
        for (const v of edges.get(u)) {
            if (!used[v]) {
                dfs(v, used, edges);
            }
        }
    }
}
