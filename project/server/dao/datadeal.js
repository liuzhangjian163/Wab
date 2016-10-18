/**
 * Created by Administrator on 2015/8/6.
 */
var  mydb=require("mysql");//获取数据库模块

//创建数据库连接通道
function creatdb(){
    var mycon=mydb.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'project'
    });
    return mycon;
}
//创建数据处理函数
//sql:sql语句;list传值数组
exports.dbdeal=function(sql,list,req,resp){
    var mycon=creatdb();
    mycon.connect();
    mycon.query(sql,list,function(err,data){
        //console.log(sql);
        resp.writeHead(200, {"content-type": "text/plain;charset=utf-8"});
        //console.log("返回数据是"+JSON.stringify(data));
        //console.log(data);
        resp.write(JSON.stringify(data));
        resp.end();
    });
    mycon.end();
}

