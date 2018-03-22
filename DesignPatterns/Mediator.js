//中介者模式【一对多】
const goods = {
    'red|16G': 2,
    'red|32G': 6,
    'blue|16G': 10,
    'blue|32G': 4
}
const mediator = (function() {
    const colorSelect = document.getElementById('color'),
        memorySelect = document.getElementById('memory'),
        numSelect = document.getElementById('num')
    return {
        changed: function(obj) {
            switch (obj) {
                case colorSelect:
                    //TODO
                    break;
                case memorySelect:
                    //TODO
                    break;
                case numSelect:
                    //TODO
                    break
            }
        }
    }
}())
colorSelect.onchange = function() {
    mediator.changed(this)
}
memorySelect.onchange = function() {
    mediator.changed(this)
}
numSelect.onchange = function() {
    mediator.changed(this)
}