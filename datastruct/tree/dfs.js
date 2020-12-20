// 树的深度优先遍历
// 1. 访问根节点
// 2. 对根节点 children 依次进行深度优先遍历
let root = {
  val: 1,
  left: {
    val: 2,
    left: {val: 3},
    right: {val: 4}
  },
  right: {
    val: 3,
    left: {val: 5},
    right: {val: 6}
  }
}

let dfs = (n) => {
  if(!n) return;
  console.log(n.val);
  dfs(n.left);
  dfs(n.right) ;
}

dfs(root)