/**
 * Created by Administrator on 2015/8/6.
 */

var myajax;
//传入的参数依次为:
// 提交方式method:  get||post get和post要写两个函数的
//提交网页的处理的地址  url
//提交的要处理的参数  param
//回调函数     callbackfunction
//同步处理还是异步处理sync  :true||false
function createajax(method,url,param,callbackfunction,sync){
    //alert("进入ajax");
    if (window.XMLHttpRequest) {//如果是dom对象
        myajax = new XMLHttpRequest();
    }
    else {//如果是ie
        myajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    myajax.onreadystatechange = callbackfunction;

    if(method=="get") {
        url=url+"?"+param;//总的提交内容url
        //alert(url);
        myajax.open(method, url, sync);
        myajax.send(null);

    }
    else if(method=="post"){
      myajax.open(method, url, sync);
        //设置请求相应头是二进制的形式
      myajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      myajax.send(param);
    }
}