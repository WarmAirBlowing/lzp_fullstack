//  es6箭头函数
var getUerInfos = function (user) {
    // return true
    return user.name + " \u6027\u522B" + user.sex + " \u5C31\u804C\u4E8E" + user.company;
};
console.log(getUerInfos({ name: '任康华', sex: '男', company: '字节' }));
