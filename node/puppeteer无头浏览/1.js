const puppeteer = require('puppeteer');
const $ = require('cheerio');
const { resolve } = require('path');
const { rejects } = require('assert');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://juejin.cn/books', {
        waitUntil: 'networkidle0'
    });
    // await page.screenshot({
    //     path: './juejin.png'
    // })
    // 在获取 html 之前 执行几次 下拉动作
    await page.evaluate(function () {
        function req() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    document.querySelector('.copy-right').scrollIntoView();
                    resolve();
                }, 2000);
            })
        }
        // 执行 3 次下拉加载
        async function run() {
            for (let i = 0; i < 3; i++) {
                await req();
            }
        }
        // async 执行完 返回的就是 promise
        // run() 这个 promise 只有三次下拉加载才会结束
        // page.evaluate 将等待 promise 完成
        return run();
    })
    const html = await page.content();
    // console.log(html);
    const books = $('.info', html);
    // console.log(books);
    let booksInfo = [];
    books.each(function () {
        const book = $(this);
        let name = $(book.find('.title')).text().trim();
        let auth = $(book.find('.author-name')).text().trim();
        console.log(name, auth);
        booksInfo.push({ name, auth })
    })

    const fs = require('fs');
    fs.writeFile('./books.json', JSON.stringify(booksInfo, null, 2), (err) => {
        if (!err) {
            console.log('写入成功！');
        }
    })

    await browser.close();
}
run();