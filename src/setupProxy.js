const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: process.env.REACT_APP_API_URL?? 'http://localhost:3001/',
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