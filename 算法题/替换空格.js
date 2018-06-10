// 请实现一个函数，将一个字符串中的空格替换成“%20”。
//例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
function replaceSpace(str) {
    let len = str.length
    str = str.split(' ').join('%20')
    return str
}

function replaceSpace2(str) {
    return str.replace(/\s/g, '%20')
}
let str = 'We Are Happy'
console.log(replaceSpace2(str))