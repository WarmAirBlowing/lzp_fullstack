const a = ["Tom","Steven","Allen","Beck"];

const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());

console.log(aKeys);
console.log(aValues);
console.log(aEntries);

for(const [id,element] of a.entries()) {
    console.log(id);
    console.log(element);
}
