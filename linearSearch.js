let array = [
    { username: "Aarsh" },
    { username: "Patel" },
    { username: "Aarsh Patel" },
]

function result(array, target) {
    for (let name of array) {
        if (name.username === target) {
            return true
        }
    }

    return false
    // console.log(array)
    // console.log(target)
}

console.log(result(array, "aarsh"))
console.log(result(array, "Aarsh"))