/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = new Map();
    const visiting = new Set();

    for (let [course, prereq] of prerequisites) {
        if (!graph.has(course)) {
            graph.set(course, []);
        }
        graph.get(course).push(prereq);
    }

    console.log(graph);

    function dfs(course) {
        if (visiting.has(course)) {
            return false;
        }

        visiting.add(course);

        if (graph.has(course)) {
            for (let prereq of graph.get(course)) {
                if (!dfs(prereq)) {
                    return false;
                }
            }
        }

        visiting.delete(course);
        return true;
    }

    for (let course of graph.keys()) {
        if (!dfs(course)) {
            return false;
        }
    }

    return true;
};

let numCourses = 5;
let prerequisites = [
    // [2, 3],
    // [3, 4],
    [4, 5],
    [5, 1],
    // [1, 2],
    // [1, 3],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
];

canFinish(numCourses, prerequisites);
