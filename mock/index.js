const path = require('path');
const mockjs = require('mockjs');

function randomSleep() {
    return new Promise(resolve => {
        setTimeout(resolve, Math.random() * 800 + 200);
    });
}

// 把 express 的接口请求，映射到本地文件
module.exports = async (req, res) => {
    try {
        // 找到文件
        const targetFile = path.join(__dirname, req.url);
        // 清除缓存
        delete require.cache[require.resolve(targetFile)];
        // mock 并 返回
        const func = require(targetFile);
        // 模拟延时 200ms ~ 1000ms
        await randomSleep();
        res.json(func(mockjs));
    } catch (ex) {
        res.status(500).send(ex.message);
    }
};
