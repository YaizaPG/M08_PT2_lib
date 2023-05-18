function sum(list) {
    if (list.length == 0) return 0
    let total = 0
    list.forEach(element => {
        total += element
    });
    return total / list.length;
}

module.exports = { mean }
