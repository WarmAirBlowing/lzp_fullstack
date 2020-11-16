const a = { val: 'a'}
const b = { val: 'b'}
const c = { val: 'c'}
const d = { val: 'd'}
a.next = b
b.next = c
c.next = d

// 遍历链表
// let p = a;
// while(p) {
//     console.log(p.val);
//     p = p.next;
// }
function each(list) {
    let p = list;
    while(p) {
        console.log(p.val);
        p = p.next;
    }
}
// each(a)

// 插入
function insert(obj , list) {
    let p = list.next;
    list.next = obj;
    obj.next = p
}
// insert({val: 'f'},b)
// each(a)

// 删除
function remove(list) {
    list.val = list.next.val
    list.next = list.next.next
}
// remove(b)
// each(a)

// 反转链表
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
function reverse(head) {
    let p1 = head;
    let p2 = null;
    while(p1) {
        const tmp = p1.next
        p1.next = p2
        p2 = p1
        p1 = tmp
    }
    return p2;
}
