module.exports = {
	//配置参考网址https://cli.vuejs.org/zh/config/#assetsdir
	baseUrl:'./', //根路径
	outputDir:'dist1',//构建输出目录
	assetsDir:'assets',//生成静态资源目录(js,css,img,fonts)
	lintOnSave:false//是否开启eslint保存检测，有效值：true ||false||'error'
	// runtimeCompiler: true//是否使用包含运行时编译器的Vue核心的构建。将其设置为true允许您使用templateVue组件中的选项，但会为您的应用带来额外的10kb负载
    // chainWebpack: config => {
    // config.module
	// .rule('vue')
	// .use('vue-loader')
	//   .loader('vue-loader')
	//   .tap(limit => {
	// 	90000
	// 	// 修改它的选项...
	// 	return limit
	//   })
    // }
};