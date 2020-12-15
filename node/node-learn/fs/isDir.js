//定义一个isDir的方法判断一个资源到底是目录还是文件
const fs = require('fs')
async function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      if (data.isDirectory()) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

isDir('./isDir.js').then(res => {
  console.log(res);
})
isDir('./test').then(res => {
  console.log(res);
})

// 获取一个目录下的所有资源

function getDirSource(path) {
  let dirArr = [];
  fs.readdir(path, async (err, data) => {  //注意
    if (err) {
      console.log(err);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (await isDir(path)) {
        dirArr.push(data[i]);
      }
    }
    console.log(dirArr);
  })
  return dirArr
}
console.log(getDirSource('./test'));

