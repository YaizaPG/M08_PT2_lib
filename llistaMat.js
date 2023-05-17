function sum(list) {
    let total = 0
    list.array.forEach(element => {
        total += element
    });
    return total / list.length;
}
