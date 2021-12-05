const Input = require('./input');

const getInput = Input.depths.split('\n').map(Number);
const getNumberOfDrops = (depths) => {
    let results = 0;

    depths.reduce((prev, curr) => {
        if(prev < curr) {
            results += 1;
        }
        return prev = curr;
    })

    return results;
}

console.log(getNumberOfDrops(getInput));