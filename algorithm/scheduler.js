// js 限流器
class Scheduler {
  
  constructor () {
    this.count = 0
    this.waiting = []
  }

  async add (fn) {
    // 超过
    let promise
    if (this.count >= 2) {
      promise = new Promise(resolve => {
        fn.resolve = resolve
        this.waiting.push(fn)
      })
    } else {
      promise = this.run(fn)
    }
    return promise
  }

  run (fn) {
    this.count ++
    let promise = fn().then(() => {
      this.count --
      console.log('len:', this.waiting.length, `ms: ${new Date().getTime() - start}`)
      if(this.waiting.length > 0) {
        const task = this.waiting.shift()
        // const taksPromise = task()
        //taksPromise.then(() => {
          this.run(task).then(() => {
            task.resolve()
          })
        // })
      }
    })
    return promise
  }
}

const scheduler = new Scheduler()

const timeout = (time) => {
  return new Promise(r => {
    console.log('setTimeout', time)
    setTimeout(r, time)
  })
}

const addTask = (time, order) => {
  scheduler.add(() => {
    return timeout(time)
  }).then(() => {
    console.log(order, `ms: ${new Date().getTime() - start}`)
  })
}

let start = new Date().getTime()

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)