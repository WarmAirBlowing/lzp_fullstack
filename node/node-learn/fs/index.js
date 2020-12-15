/*
 1. fs.stat   检测是文件还是目录
 2. fs.mkdir  创建目录
 3. fs.writeFile  创建写入文件
 4. fs.appendFile 追加文件
 5. fs.readFile 读取文件
 6. fs.readdir读取目录
 7. fs.rename 重命名 移动文件
 8. fs.rmdir  删除目录
 9. fs.unlink 删除文件
*/

const fs = require('fs')

// fs.stat('./index.js', (err, data) => {
//   if(err) {
//     console.log(err);
//     return
//   }
//   // console.log(data);
//   console.log(data.isFile()); // true
//   console.log(data.isDirectory()); //false
// })

 /*
    path            将创建的目录路径
    mode            目录权限（读写权限），默认777
    callback        回调，传递异常参数err
    */
// fs.mkdir('./test', (err) => {
//   if(err) {
//     console.log(err);
//     return
//   }
//   console.log('文件创建成功！');
// })

    /*
        filename      (String)            文件名称
        data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
        options        (Object)           option数组对象，包含：
        · encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
        · mode         (Number)        文件读写权限，默认值 438
        · flag            (String)            默认值 ‘w'
        callback {Function}  回调，传递一个异常参数err。
    */
// fs.writeFile('./test/test.js', '这是写入的内容', (err) => {
//   if(err) {
//     console.log(err);
//     return
//   }
//   console.log('创建写入文件成功！');
// })

// fs.appendFile('./test/index.css', 'h3{color:red}\n', (err) => {
//   if(err) {
//     console.log(err);
//     return
//   }
//   console.log('追加文件成功');
// })

// fs.readFile('./test/test.js', (err, data) => {
//   if(err) {
//     console.log(err);
//     return
//   }
//   console.log('读取文件成功!', data.toString());
// })

// fs.readdir('./', (err, data) => {
//   if(err) {
//     console.log(err);
//     return
//   }
//   console.log('读取目录成功！', data); // 读取目录成功！ [ 'index.js', 'test' ]
// })

fs.rename('./test/test.js', './test/newTest.js', (err) => {
  if(err) {
    console.log(err);
    return
  }
  console.log('重命名成功');
})

