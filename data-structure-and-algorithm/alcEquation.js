/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 * 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，
 * 其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
 * 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。
 *
 */
var calcEquation = function(equations, values, queries) {
    let map = new Map(), res = [];
    let visit = new Map();  // visit 数组标记在搜索过程中是否访问过

    const dfs = (src, dst) => {
        // 若可达，且找到了目的节点，返回 1.0 表示成功到达
        if (src === dst) {
            return 1.0;
        }

        let adjs = map.get(src);

        // 遍历 src 的所有边，若未访问过，则对其调用 dfs 获取路径积
        for (let i = 0; i < adjs.length; ++i) {
            let next = adjs[i];
            if (!visit.get(next[0])) {
                visit.set(next[0], true);

                let ret = dfs(next[0], dst);

                visit.set(next[0], false);
                // 若可达 dst，则返回当前边权与后续的边权积 ret 的乘积
                if (ret !== -1.0) {
                    return next[1] * ret;
                }
            }
        }

        // 否则，不可达，返回 -1.0
        return -1.0;
    };

    // 创建邻接表
    for (let i = 0; i < equations.length; ++i) {
        let e = equations[i], v = values[i];

        if (!map.has(e[0])) {
            map.set(e[0], []);
            visit.set(e[0], false);
        }
        if (!map.has(e[1])) {
            map.set(e[1], []);
            visit.set(e[1], false);
        }

        let adj1 = map.get(e[0]);
        let adj2 = map.get(e[1]);
        adj1.push([e[1], v]);
        adj2.push([e[0], 1 / v]);
    }

    for (let q of queries) {
        let n0 = q[0], n1 = q[1];
        if (map.has(n0) && map.has(n1)) {
            visit.set(n0, true);
            res.push(dfs(n0, n1));
            visit.set(n0, false);
        } else {
            res.push(-1.0);
        }
    }
    return res;
};
