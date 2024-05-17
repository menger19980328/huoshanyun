// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");
const { utils } = require("@byted-apaas/server-common-node")
/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
module.exports = async function (params, context, logger) {
  // 日志功能
   logger.info(`${new Date()} 函数开始执行1`);
   // 在 User 对象中创建一条记录
const record = await application.data.object("object_4dffd36558c").create({
     "_name": new application.constants.type.Multilingual({"zh": "中文名称", "en": "English Name"}),
     "phone_36558cce488": new application.constants.type.Phone("18610595108"),
     "email_558cce48814": "test@bytedance.com"
 })
 logger.info(`创建完成`);


 const record2=await application.data.object("object_4dffd36558c").delete(record)
 logger.info(`删除完成`);
  // 在这里补充业务代码
}