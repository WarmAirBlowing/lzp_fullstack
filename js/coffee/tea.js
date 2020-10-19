// 1. 把水煮开
// 2. 用沸水浸泡茶叶
// 3. 把茶水倒进杯子
// 4. 加柠檬

var Tea = function(type) {
    this.type = type
}
Tea.prototype.boilWater = function() {
    console.log('把水煮开');
}
Tea.prototype.brewTeaSoak = function() {
    console.log('用沸水浸泡茶叶');
}
Tea.prototype.pureInCup = function() {
    console.log('把茶水倒进杯子');
}
Tea.prototype.addLemon = function() {
    console.log('加柠檬');
}
Tea.prototype.init = function() {
    this.boilWater();
    this.brewTeaSoak();
    this.pureInCup();
    this.addLemon();
}
var oneTea = new Tea('柠檬茶');
console.log(oneTea.type);
oneTea.init();
