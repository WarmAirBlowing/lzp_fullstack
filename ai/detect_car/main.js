const AipOcrClient = require('baidu-aip-sdk').ocr;
const fs = require('fs')

const APP_ID = "23082463";
const API_KEY = "oqx3ICF2RZBsMqDc2TILmDIu";
const SECRET_KEY = "eCAdjXVC6kiXKrHZl41fnjfxavLU8s8i";
// sync I/O Async 同步
const image = fs.readFileSync("car_number.jpg").toString("base64");

// console.log(image);
const options = {};
options["multi_detect"] = "true";
const client = new AipOcrClient(APP_ID,API_KEY,SECRET_KEY);
// http 协议
// 云端 AI SDK
client.licensePlate(image, options).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})
