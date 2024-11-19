package go_function_tool_getLogID


import (
"context"
"time"

"github.com/byted-apaas/faas-sdk-go/faas"
"github.com/byted-apaas/server-sdk-go/application"
)

type Params struct{
Input string `json:"input"`
}

type Result struct{
Output string `json:"output"`
}

func Handler(ctx context.Context, params *Params) (*Result, error) {
// 日志功能
application.GetLogger(ctx).Infof("%s 函数开始执行, logid: %s", time.Now().Format("2006-01-02 15:04:05.999"), faas.Tool.GetLogID(ctx))

 if params == nil {
 return nil, nil
 }

return &Result{
Output: params.Input,
}, nil
}