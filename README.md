##基于Token的Angular认证页面实现

####用户发送用户名和密码提交认证，用户认证成功后，将用户信息保存在一串Token（签名）中，发送给客户端，客户端获得之后将其保存在sessionStorage或者localStorage(关闭页面后消失)，或者cookie（低版本浏览器中使用）中。在此后的每次请求中客户端将该信息提取后加入header中以特定格式保存后发送给服务器端。

###什么是JWT？

####JWT是JSON web token的缩写，他使用自己的一套标准来完成整个的基于Token的认证方式，比如规定默认的http请求header中使用字段的名称为：Authorization, 默认以Bearer开头的token字段等。所以我们在接下来的编码中也要尽量按照标准去编写实现代码。


使用

   npm install
   bower install
    npm start 启动服务器后 在http://localhost:3000页面尝试登陆
