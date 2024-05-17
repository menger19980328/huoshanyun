package go_faas_function_invoke

import (
	"context"
	"time"

	"github.com/byted-apaas/faas-sdk-go/faas"
	"github.com/byted-apaas/server-sdk-go/application"
)

/*Params 函数入参定义
 * 结构体名称不支持自定义, 必须为 Params
 * 结构体属性支持自定义, 和 meta.json 中的 input 参数一一对应
 */

 type Params struct {
	DemoInputField string `json:"demo_input_field"` // 示例字段
}

/*Result 函数出参定义
 * 结构体名称不支持自定义, 必须为 Result
 * 结构体属性支持自定义, 和 index.meta.json 中的 output 参数一一对应
 */
type Result struct {
	DemoOutputField string `json:"demo_output_field"` // 示例字段
}

/*Handler 函数入口
 * 入口函数签名不支持自定义, 必须为 func(context.Context, *Params) (*Result, error)
 * @param ctx    请求上下文参数, 使用 server-sdk-go 需要链路透该参数
 * @param params 请求参数
 */
func Handler(ctx context.Context, params *Params) (*Result, error) {
	// 日志功能
	application.GetLogger(ctx).Infof("%s 函数开始执行", time.Now().Format("2006-01-02 15:04:05.999"))
	application.GetLogger(ctx).Infof("函数入参  %s ", params.DemoInputField)

	// 在这里补充业务代码
	var result interface{}
	
	err := faas.Function("go_function_tool_getLogID").Invoke(ctx, map[string]interface{}{"demo_input_field": "function called"}, &result)
	application.GetLogger(ctx).Infof("faas-function结果 ------  %v ----错误信息--%v", result, err)

  if err != nil {
	panic(err)
	}
	 
//	return &Result{
	//	DemoOutputField: err.Error(),
	//	}, nil
return &Result{}, nil
}
