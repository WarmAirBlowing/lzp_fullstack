import config from './config'   // config 相当于引入的 core
import * as Mock from './mock'  //  * 引入所有，Mock 包含两个对象

let util = {
    isDEV: config.isDev,
    log() {
        this.isDEV && console.log(...arguments) //arguments 所有参数的统称,不知道接收多少个参数
    },
    alert(title = '提示', content = config.defaultAlerMessage) {
        if(typeof content === 'object') {
            content = this.isDEV && JSON.stringify(content)
        }
        wx.showModal({
            title: title,
            content: content
        })
    },
    getStorageData(key,cb) {
        wx.getStorage({
          key: key,
          success(res){
              cb && cb(res.data)
          },
          fail(err) {
              this.log(err)
          }
        })
    },
    setStorageData(key, value='', cb) {
        wx.setStorage({
          data: value,
          key: key,
          success() {
              cb && cb()
          }
        })
    },
    requset(opt) {
        let {url,data,header,method,dataType,mock = false} = opt
        // 上面的语句相当于 let url = opt.url
        let self = this // 防止this弄乱
        return new Promise( (resolve,reject) => {
            if(mock) {
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                }
                if(res && res.statusCode == 200 && res.data) {
                    resolve(res.data)
                }else{
                    self.alert('提示',res)
                    reject(res)
                }
            }else{
                wx.request({
                    url: url,//仅为示例，并非真实的接口地址
                    data: data,
                    dataType: dataType || 'json',
                    header: header || {'content-type': 'application/json'},
                    method: method || 'GET',
                    success(res) {
                        if(res && res.statusCode == 200 && res.data) {
                            resolve(res.data)
                        }else{
                            self.alert('提示',res)
                            reject(res)
                        }
                    },
                    fail: (err) => {
                        self.log(err)
                        self.alert('提示',err)
                    },
                })
            }
           
        })
       
    }
}

export default util