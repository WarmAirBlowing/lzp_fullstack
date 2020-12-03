const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;
const fs = require('fs')

const APP_ID = "23082463";
const API_KEY = "oqx3ICF2RZBsMqDc2TILmDIu";
const SECRET_KEY = "eCAdjXVC6kiXKrHZl41fnjfxavLU8s8i";
// sync I/O Async 同步
const image = fs.readFileSync("car.jpg").toString("base64");

// console.log(image);
const client = new AipImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
// http 协议
// 云端 AI SDK
client.carDetect(image).then((result) => {
  console.log(result.result[0]);
}).catch((err) => {
  console.log(err);
})
