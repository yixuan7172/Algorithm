//中介者模式【一对多】
//汽车案例,发广播...上车、下车
class Bus {
    constructor() {
        this.persons = {}
    };
    //发布广播
    broadcast(passenger, message = passenger) {
        //如果车上有乘客
        if (Object.keys(this.persons).length) {
            //如果是针对某个乘客发的，就单独给他
            if (passenger.id && passenger.listen) {
                if (this.persons[passenger.id]) {
                    this.persons[passenger.id].listen(message)
                }
            }
        } else {
            //发给所有乘客
            Object.keys(this.persons).forEach(p => {
                if (this.persons[p.id].listen) {
                    this.persons[p.id].listen(message)
                }
            })
        }
    };
    //乘客上车
    aboard(passenger) {
        this.persons[passenger.id] = passenger
    };
    //乘客下车
    deBus(passenger) {
        this.persons[passenger.id] = null
        delete this.persons[passenger.id]
    };
    start() {
        this.broadcast({
            type: 1,
            content: '开车'
        })
    };
    end() {
        this.broadcast({
            type: 2,
            content: '老司机翻车啦!'
        })
    }
}
class Passenger {
    constructor(id) {
        this.id = id
    };
    //听广播
    listen(message) {
        if (Object.is(message.type, 2)) {
            this.deBus()
        }
    };
    //下车
    deBus() {
        bus.deBus(this)
    }
}
const bus = new Bus(),
    passenger1 = new Passenger('1'),
    passenger2 = new Passenger('2')

bus.aboard(passenger1)
bus.aboard(passenger2)
bus.start()
bus.broadcast(passenger2, {
    type: 3,
    content: '偷票,shut down'
})
bus.deBus(passenger2)