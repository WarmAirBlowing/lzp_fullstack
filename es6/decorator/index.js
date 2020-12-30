// @annotation
// class MyClass {
 
// }

// function annotation(target) {
//   target.annotated = true
// }

// @decorator
// class A {}
// // 等同于
// class A {}
// A = decorator(A) || A

class MyClass {
  @readonly
  @unenumerable
  method() {

  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

function unenumerable(target, name, descriptor) {
  descriptor.unenumerable = false
  return descriptor
}