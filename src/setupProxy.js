const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: process.env.REACT_APP_API_URL?? 'https://acme-back.herokuapp.com/',
    changeOrigin: true,
}

module.exports = function(app) {
    app.use(
        '/user',
        createProxyMiddleware(proxy)
    );
    app.use(
        '/product',
        createProxyMiddleware(proxy)
    );
    app.use(
        '/category',
        createProxyMiddleware(proxy)
    );
    app.use(
        '/error_404',
        createProxyMiddleware(proxy)
    );
};