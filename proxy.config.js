const proxy = [
    {
        context: '/controller',
        target: 'http://api.syscac.com.br/',
        changeOrigin: true
    }
];
module.exports = proxy;

