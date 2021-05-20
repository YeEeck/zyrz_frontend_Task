module.exports = {
    publicPath: "./", // 构建好的文件输出到哪里
    devServer: {
        proxy: {
            '/api': {
                target: 'https://506a257f-af16-4566-a795-4ef6c9c9aca4.bspapp.com/',
                changeOrigin: true,
                secure: false,  // 如果是https接口，需要配置这个参数
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}