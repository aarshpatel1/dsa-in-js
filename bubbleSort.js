// bubble sort
// time complexity O(n)
// space complexity O(1)
let array = [50, 40, 60, 10, 1, 2]
var temp

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}

console.log(array)