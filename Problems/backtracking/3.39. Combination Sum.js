let arraySum = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element;
    }
    return sum;
};

function combinationSum(candidates, target) {
    const result = [];

    const backtrackTranverse = (startIndex, currenCombination) => {
        console.log(
            "🚀 ~ backtrackTranverse ~ currenCombination:",
            currenCombination
        );
        let sum = arraySum(currenCombination);
        if (sum === target) {
            console.log(currenCombination);
            return;
        }
        if (sum > target) {
            console.log(currenCombination);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            currenCombination.push(candidates[i]);
            backtrackTranverse(i, currenCombination);
            currenCombination.pop();
        }
    };

    backtrackTranverse(0, []);
}

let candidates = [2, 3, 6, 7];

let target = 7;

console.log(combinationSum(candidates, target)); // and  [[2, 2, 3], [7]]
