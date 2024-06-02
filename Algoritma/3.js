function countOccurrences(input, query) {
    const counts = [];
    for (let q of query) {
        let count = 0;
        for (let i of input) {
            if (i === q) {
                count++;
            }
        }
        counts.push(count);
    }
    return counts;
}

const inputArray = ['xc', 'dz', 'bbb', 'dz'];
const queryArray = ['bbb', 'ac', 'dz'];
const occurrences = countOccurrences(inputArray, queryArray);
console.log("OUTPUT:", occurrences); // Output: [1, 0, 2]
