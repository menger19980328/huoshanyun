// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");

/**
 * @param {Param_node_func11_tool_http}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return {Return_node_func11_tool_http}函数的返回数据
 */
module.exports = async function (params, context, logger) {
	// 日志功能
	logger.info(`${new Date()} 函数开始执行`);
	
	// 在这里补充业务代码
	logger.info("函数入参  %s ", params) 
	// 修改
	var res =await faas.tool.http(
		{url:"https://apaaspm-dev442.aedev.feishuapp.cn/ae/public/autotest1__c/node_func4_function_called",
		method:"GET",
		headers:{},
		}
	)
	return {demo_output_field:JSON.stringify(res)}
}