1.导入gin包，在命令行输入 go get "github.com/gin-gonic/gin"

不管导入什么包都是 go get "包路径"

```
package main

import (
   "encoding/json"
   "github.com/gin-gonic/gin"
   "github.com/thinkerou/favicon"
   "log"
   "net/http"
)

// 自定义go中间件 拦截器
func myHandler() gin.HandlerFunc {
   return func(context *gin.Context) {
      // 通过自定义的中间件，设置值，在后续处理只要调用了这个中间件的都可以拿到这里的参数
      context.Set("userSession", "userId-1")
      // 放行
      context.Next()
      // 阻止
      context.Abort()

   }
}

func main() {
   //默认的路由引擎
   ginServer := gin.Default()
   //注册中间件
   ginServer.Use(myHandler())
   ginServer.Use(favicon.New("./1.png"))
   //连接数据库代码

   // 加载静态页面
   ginServer.LoadHTMLGlob("templates/*")
   // 加载静态资源

   // 响应一个页面给前端
   ginServer.GET("/index", func(context *gin.Context) {
      // context.JSON() json数据
      context.HTML(http.StatusOK, "index.html", gin.H{
         "msg": "后端传过来的数据",
      })
   })

   // user/info?userId=1&userName=jiangyanlong
   ginServer.GET("/user/info", myHandler(), func(context *gin.Context) {

      // 取出中间件中的值
      userSession := context.MustGet("userSession").(string)

      log.Print("用户session:" + userSession)

      userId := context.Query("userId")
      userName := context.Query("userName")
      context.JSON(http.StatusOK, gin.H{
         "userId":   userId,
         "userName": userName,
      })
   })

   // user/info/1/jiangyanlong
   ginServer.GET("/user/info/:userId/:userName", func(context *gin.Context) {
      context.JSON(http.StatusOK, gin.H{
         "userId":   context.Param("userId"),
         "userName": context.Param("userName"),
      })
   })

   // 前端传json数据
   ginServer.POST("/json", func(context *gin.Context) {
      // request.body
      // []byte
      data, _ := context.GetRawData()
      var m map[string]any
      // 包装为json数据
      _ = json.Unmarshal(data, &m)
      context.JSON(http.StatusOK, m)
   })

   // 表单数据
   ginServer.POST("/user/add", func(context *gin.Context) {
      // request.body
      // []byte
      userName := context.PostForm("userName")
      passWord := context.PostForm("passWord")

      context.JSON(http.StatusOK, gin.H{
         "userName": userName,
         "passWord": passWord,
      })
   })

   // 路由
   ginServer.GET("/test", func(context *gin.Context) {
      // 重定向
      context.Redirect(http.StatusMovedPermanently, "
   })

   // 404 页面
   ginServer.NoRoute(func(context *gin.Context) {
      context.HTML(http.StatusNotFound, "404.html", nil)
   })

   // 路由组
   userGroup := ginServer.Group("/user")
   {
      userGroup.GET("/add")
      userGroup.POST("/login")
      userGroup.POST("/logout")
   }
   orderGroup := ginServer.Group("/order")
   {
      orderGroup.GET("/add")
      orderGroup.POST("/delte")
   }

   //启动服务
   err := ginServer.Run(":9090")
   if err != nil {
      return
   }
}

```

html 页面

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>我的第一个go web 页面</title>
    <link rel="stylesheet" href="/static/css/style.css">
    <script src="/static/js/index.js"></script>
</head>
<body>

<h1>感谢大家</h1>
<form action="/user/add" method="post">
    <p>
        用户名:
        <input type="text" name="userName">
    </p>
    <p>
        用户密码:
        <input type="password" name="passWord">
    </p>
    <button type="submit">提交</button>
</form>
</body>
</html>
```