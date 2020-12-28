const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'


function MyPromise(fn) {
  const that = this
  that.state = PENDING //promise当前的状态
  that.value = null //promise的值
  that.resolvedCallbacks = [] //promise状态变为resolve时的回调函数集，可能有多个
  that.rejectedCallbacks = [] //promise状态变为reject时的回调函数集，可能有多个

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }

  function reject() {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}



MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }

  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }

  if (that.state === REJECTED) {
    onRejected(that.value)
  }

}
