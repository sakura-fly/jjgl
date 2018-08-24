//项目某功能的模块入口
layui.define(['layer','form'],function(exports){
	var layer=layui.layer;
	var form=layui.form();
	layer.msg("模块引入，简单了解模块化开发");
	exports('index1',{})//它返回一个exports参数，用于输出该模块的接口
})