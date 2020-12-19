let deepCopy = function(obj) {
  // 只拷贝对象
  if(typeof obj !== 'object') return;

  let newObj =  obj instanceof Array ? [] : {}

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj;
}