Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    // 声明最小值的下标
    let indexMin = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j
      }
    }
    if (indexMin !== i) {
      const temp = this[i];
      this[i] = this[indexMin];
      this[indexMin] = temp;
    }
  }
  return this;
}
let arr = [2, 4, 1, 6, 3, 5];
console.log(arr.selectionSort());