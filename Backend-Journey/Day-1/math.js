function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// Correct module export
module.exports = {
    add: add,
    sub: sub
};