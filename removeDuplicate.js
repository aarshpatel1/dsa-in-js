var array = [1, 2, 2, 3, 4, 5, 5, 6, 6, 2, 4, 5, 1]
var unique = []

for (let i = 0; i < array.length; i++) {
    let duplicate = false
    for (let j = 0; j < unique.length; j++) {
        if (array[i] === unique[j]) {
            duplicate = true
            break
        }
    }
    if (!duplicate) {
        // unique.push(array[i])
        for (let k = 0; k <= array.length; k++) {
            if (!unique[k]) {
                unique[k] = array[i]
                break
            }
        }
    }
}

console.log(unique)