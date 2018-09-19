/*
Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
 */
var twoSum = function(nums, target) {

    for (let i = 0, l = nums.length; i < l - 1; ++i) {
        for (let j = i + 1; j < l; ++j) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
    return null
}

function twoSum2(nums, target) {
    let arr = []
    for (let i = 0, l = nums.length; i < l; ++i) {
        let temp = target - nums[i]
        if (arr[temp] !== undefined) return [arr[temp], i]
        arr[nums[i]] = i
    }
    return null
}


let nums = [3, 2, 4, 20, 8, 11, 7, 31],
    target = 1
console.log(twoSum2(nums, target));