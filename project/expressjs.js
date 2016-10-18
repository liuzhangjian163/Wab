/**
 * Created by Administrator on 2015/8/6.
 */

var datadeal=require("./server/dao/datadeal.js");
var express=require("./server/node_modules/express");//获取express模块
var session=require("./server/node_modules/express-session");//获取session模块
var cookie=require("./server/node_modules/cookie-parser");//获取cookie模块
var app=new express();//创建express 对象(服务器)
app.set("port",1001);//设置服务器端口号

app.configure(function(){//配置服务器
    app.use(express.cookieParser());//cookie格式化
    app.use(session({//配置session
    secret:"123",//密码
    name:"cy",//姓名
    cookie:{maxAge:50000}//设置最大的cookie,session时间超过时间就会失效
}));

  app.use(express.bodyParser());//post请求数据
  app.use(express.methodOverride());//非post请求转换,就是get请求
  app.use(app.router);//路由分发
    //__dirname项目根目录
    app.use(express.static(__dirname+'/client'));//资源路径(通过这个可以导入路径下的所有资源)
    app.use(express.favicon('client/img/logo.png'));//修改网页的logo
    app.use(express.errorHandler);//错误信息抛出
});

app.listen(1001,function(){//监听服务器端口
    console.log("我启动啦!");
});
//路由分发函数,如果是get方法的XX.do提交的东西,执行datadeal中的函数xxx;
app.get("/test_add.do",function(req,resp){
    datadeal.dbdeal();//增加数据行
});
app.get("/test_update.do",function(req,resp){
    datadeal.dbdeal();//修改数据行
});
app.get("/page/product_detail.do",function(req,resp){
    //console.log("进入APP");
    var list=new Array();
    list.push(req.query.number.toString().trim());
   //console.log(list);
    var sql="SELECT re_name,re_content FROM t_resource WHERE re_id  IN (SELECT car_re_reid FROM t_car_resource WHERE car_re_carid= ? ) LIMIT 17";
    datadeal.dbdeal(sql,list,req,resp);//查询数据行
});
app.get("/test_delete.do",function(req,resp){
    datadeal.dbdeal();//删除数据行
});
//路由分发函数,如果是post方法的XX.do提交的东西,执行datadeal中的函数xxx;
app.post("/test_add.do",function(req,resp){
    datadeal.dbdeal();//增加数据行
});
app.post("/test_update.do",function(req,resp){
    datadeal.dbdeal();//修改数据行
});
app.post("/test_select.do",function(req,resp){
    var list=new Array();
    list.push(req.body.mail.toString().trim());
    var sql="select count(*) count from t_user where user_mail=?";
    datadeal.dbdeal(sql,list,req,resp);//查询数据行

});


app.post("/test_delete.do",function(req,resp){
    datadeal.dbdeal();//删除数据行
});



//////session登陆验证验证
app.post("/mytestlogin.do",function(req,resp){
 datadeal.mytestlogin(req,resp);
});

app.get("/mytest.html",function(req,resp,next){
    req.session.user="cy";
    var name=req.session.user;
    console.log(name);
    //if(name!=null||name!=undefined){
    //    next();
    //}
    next();

});

