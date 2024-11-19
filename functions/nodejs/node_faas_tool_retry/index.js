// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");

/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
module.exports = async function (params, context, logger) {
  // 日志功能
  logger.info(`${new Date()} 函数开始执行`);

	// 在这里补充业务代码
	logger.info("函数入参  %s ", params) 
	// 修改
	var count = 0
	
	try {
		var res =await faas.tool.retry(
			async()=>{
				count = count + 1
				logger.info("错误次数",count)
				return await context.db.object("aa").find()
			},{
				retryCount:2,
				retryDelay:2000
			}
		)
	} catch (error) {
		logger.info("最后错误次数",count)
	}
	
	return {demo_output_field:JSON.stringify(count)}
}