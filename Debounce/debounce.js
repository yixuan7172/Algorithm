//防抖
//防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
//如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，
// n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行。

function debounce(fn, time) {
    let timeout
    return function() {
        const self = this
        clearTimeout(timeout)
        timeout = setTimeout(fn.bind(self), time);
    }
}