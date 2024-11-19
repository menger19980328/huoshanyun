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
    logger.info(`${new Date()} 函数开始执行`);
      const tenant = context.tenant;
      logger.info(
        `tenant.id = ${tenant.id}\n` +
        `tenant.name = ${tenant.name}\n` +
        `tenant.type = ${tenant.type}\n` +
        `tenant.namespace = ${tenant.namespace}\n` +
        `tenant.domain = ${tenant.domain}\n`
      );
    }
  // 在这里补充业务代码
