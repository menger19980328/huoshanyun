package go_server_application_Flow

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/byted-apaas/server-sdk-go/application"
	"github.com/byted-apaas/server-sdk-go/common/structs"
)

// import (
// 	"context"
// )

/*Params 函数入参定义
 * 结构体名称不支持自定义, 必须为 Params
 * 结构体属性支持自定义, 和 index.meta.json 中的 input 参数一一对应
 */
// type Params struct {
// }

/*Result 函数出参定义
 * 结构体名称不支持自定义, 必须为 Result
 * 结构体属性支持自定义, 和 index.meta.json 中的 output 参数一一对应
 */
// type Result struct {
// }

/*Handler 函数入口
 * 入口函数签名不支持自定义, 必须为 func(context.Context, *Params) (*Result, error)
 * @param ctx    请求上下文参数, 使用 server-sdk-go 需要链路透传该参数
 * @param params 请求参数
 */
// func Handler(ctx context.Context, params *Params) (*Result, error) {
// 	// 日志功能
// 	// application.GetLogger(ctx).Infof("%s 函数开始执行", time.Now().Format("2006-01-02 15:04:05.999"))

// 	// 在这里补充业务代码

// 	return &Result{}, nil
// }

// package demo

type Params struct{}

type Result struct{}

func Handler(ctx context.Context, params *Params) (*Result, error) {
	res, err := application.Flow.Execute(ctx, "automation_3a991cf3c3e", &structs.ExecuteOptions{Params: map[string]interface{}{"variable_96vo1qk": true}})
	if err != nil {
		application.GetLogger(ctx).Errorf("Execute failed: %+v", err)
		return nil, err
	}
	PrintJson("Execute", res)
	return nil, nil
}

func PrintJson(title string, v interface{}) {
	s, _ := json.Marshal(v)
	fmt.Printf("%s: %s\n", title, s)
}