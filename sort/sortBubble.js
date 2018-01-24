function sortBubble(arr) {
    for (let i = 0, il = arr.length; i < il; i++) {
        for (let j = i + 1, jl = arr.length; j < jl; j++) {
            if (arr[i] > arr[j])
                [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    return arr
}
let arr = [3, 1, 5, 2]
console.log(sortBubble(arr))