// remove duplicate from the array
// time complexity O(n^2)
// space complexity O(n)

var array = [1, 2, 2, 3, 4, 5, 5, 6, 6, 2, 4, 5, 1]
var unique = []
var uniqueLength = 0

for (let i = 0; i < array.length; i++) {
    let duplicate = false
    for (let j = 0; j < unique.length; j++) {
        if (array[i] === unique[j]) {
            duplicate = true
            break
        }
    }
    if (!duplicate) {
        // logic - 1
        unique[uniqueLength] = array[i]
        uniqueLength++

        // logic - 2 using inbuilt method
        // unique.push(array[i])

        // logic - 3 logic of push method
        // for (let k = 0; k <= array.length; k++) {
        //     if (!unique[k]) {
        //         unique[k] = array[i]
        //         break
        //     }
        // }
    }
}

console.log(unique)