/**
 * Created by Administrator on 2015/8/6.
 */
window.onload=function(){
    var my= session['user'];
    alert(my);
}
function mytest(){
   var mail=document.getElementById("mail").value;
    var method,url,param,sync;
    //method="get";
    method="post";
    url="test_select.do";
    param="mail="+mail;
    sync=true;
    createajax(method,url,param,selectback,sync);
    function selectback(data){
        alert("进入回调函数");
        if(myajax.readyState==4&&myajax.status==200) {
            var re=JSON.parse(myajax.responseText);
            if(re[0].count==1){
                alert("账号已经存在不能注册!")
            }
            else{
                alert("账号可以注册!")
            }
        }
    }





}