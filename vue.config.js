let proxyObj = {}

proxyObj['/'] = {
    //websocket
    ws: false,
    //目标地址
    target: 'http://localhost:9090',
    //发送请求头(request Header)里面的host会被设置为target
    changeOrigin: true,
    //不重写请求地址
    pathRewrite: {
        '^/': '/'
    }
};

proxyObj['/ws'] = {
    ws:true,
    target: 'ws://localhost:9090'
};


module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}