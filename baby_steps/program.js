var sum = process.argv.slice(2).reduce(add, 0);

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

console.log(sum);
