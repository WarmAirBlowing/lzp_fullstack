function Person() {
}
Person.prototype.type = 'object named Person'
console.dir(Person);//[Function: Person]

person = new Person();
res = person instanceof Person;
console.log(res);//true

res = person.type;
console.log(res);//object named Person

res = person.__proto__ === Person.prototype
console.log(res);//true

res = Person.prototype.constructor === Person
console.log(res);//true

res = person.__proto__.constructor === Person
console.log(res);//true

res = Reflect.ownKeys(person) // 尝试获取到自身属性
console.log(res);// []  person 对象自身并没有这个属性

res = person.type;
console.log(res);//object named Person

function People() {
}
People.prototype = new Person();//相当于 person.__proto__ === Person.prototype

p = new People();
res = [ p instanceof Object, p instanceof Person, p instanceof People ]
console.log(res);//[ true, true, true ]

res = p.type;
console.log(res);//object named Person

res = p.__proto__;
console.log(res);//Person {}

res = p.__proto__.__proto__;
console.log(res);//Person { type: 'object named Person' }

res = p.__proto__.__proto__.__proto__;
console.log(res);//{}

res = p.__proto__.__proto__.__proto__.__proto__;
console.log(res);//null


