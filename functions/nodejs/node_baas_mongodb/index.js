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
  // logger.info(`${new Date()} 函数开始执行`);
  
logger.info(`${new Date()} 函数开始执行, logid: %s`, faas.tool.getLogID());

// 在这里补充业务代码
const T = baas.mongodb.table("student");

// create 并不会入库，会初始化系统字段
const record1 = T.create({ "name": "小明", "age": 18 });
logger.info(`record1: ${JSON.stringify(record1)}`);
const record2 = T.create([{ "name": "小明", "age": 18 }]);
logger.info(`record2: ${JSON.stringify(record2)}`);

// 可以先 create 再用 save 入库，也可以直接调用 save 入库
const result = await T.save([record1, ...record2]);
logger.info(`result: ${JSON.stringify(result)}`);

  // 在这里补充业务代码
}