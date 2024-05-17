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
     logger.info(`${new Date()} 函数开始执行, logid: %s`, faas.tool.getLogID());
 
     // 设置时，需要设置过期时间，不建议用作存储场景
     let result = await baas.redis.set("key1", "helloworld", 'ex', 3);
     logger.info(`result: ${result}`)
 
     const value = await baas.redis.get("key1");
     logger.info(`value: ${value}`)
 
     // setNx，由于上面已经设置过了，过期之前无法设置
     let i = 0;
     await faas.tool.retry(async () => {
         result = await baas.redis.set("key1", "helloworld", 'ex', 3, 'nx');
         if (result !== "OK") {
             logger.warn(`第 ${++i} 次未获取到锁`)
             throw new Error("未获取到锁");
         }
         logger.info(`第 ${++i} 次获取到锁`)
     }, {
         retryCount: 5,
         retryDelay: 1000,
     });
 
     return {};
 }