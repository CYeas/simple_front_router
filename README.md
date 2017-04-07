# 超简易前端路由
---
## api

|method|参数|return|description|
|------|---|------|-----------|
|fRouter(routerRule)|返回一个路由对象|\{ "urlHash"： function, ...\}|初始化路由，参数为当改变为urlHash的情况下，调用相应的函数|
|router.changeTo(hash, callback)|hash值, callback|没有返回|调用函数改变路由,并触发对应函数|

## 例子
参考example.html
