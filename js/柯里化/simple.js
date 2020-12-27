function sub_curry(fn) {
  return function() {
    return fn()
  }
}

function curry(fn, length) {
  length = length || 4
  return function() {
    if(length > 1) {
      ret urn curry(sub_curry(fn), --length)
    }else{
      return fn()
    }
  }
}

function func() {
  console.log(1);
}
let fn0 = curry(func)

fn0()()()()