const Input = require('./input');

const getInput = Input.depths.split('\n').map(Number);


const getNumberOfDrops = (depths) => {
    let results = 0;

    for(let i = 3; i < depths.length; i++) {
        let prev = depths[i - 1] + depths[i - 2] + depths[i - 3];
        let curr = depths[i] + depths[i - 1] + depths[i - 2];
        
        if ( curr > prev ) {
            results += 1;
        }
    }

    return results;
}

console.log(getNumberOfDrops(getInput));