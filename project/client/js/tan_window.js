/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-7-30
 * Time: 下午4:27
 * To change this template use File | Settings | File Templates.
 */
var mywhole = document.getElementById("whole");
var cover = document.getElementById("cover");
var mylogin = document.getElementById("login_window");
var myregister = document.getElementById("register_window");
var mypre_drive = document.getElementById("pre_drive_window");
var myorder = document.getElementById("order_window");
function login(m){
    mywhole.style.display="none"
    cover.style.height="667px";
    cover.style.zIndex="700";
    cover.style.display="block"
    document.body.style.overflowY="auto";
    if(m==1){
    mylogin.style.display="block"
    //mylogin.style.webkitTransition="display 1s linear"
    mylogin.style.zIndex="999";
    }else if(m==2){
        myregister.style.display="block"
        //myregister.style.webkitTransition="display 1s linear"
        myregister.style.zIndex="999";
    }else if(m==3){
        mypre_drive.style.display="block"
        //mypre_drive.style.webkitTransition="display 1s linear"
        mypre_drive.style.zIndex="999";
    }else if(m==4){
        myorder.style.display="block"
        //myorder.style.webkitTransition="display 1s linear"
        myorder.style.zIndex="999";
    }
}
function delete_login(m){
//    cover.style.top="-667px"
    cover.style.height="0px"
    cover.style.zIndex="700";
    mywhole.style.display="block";
    if(m==1){
        mylogin.style.display="none";
    } else if(m==2){
        myregister.style.display="none";
    } else if(m==3){
        mypre_drive.style.display="none";
    }else if(m==4){
        myorder.style.display="none";
    }
}
/*-------------------------多选框--------------------------*/
function changecity(){
    var mysheng = document.getElementById("province");
    var myshi = document.getElementById("city");
    var cityarray_1 = ["绵阳","成都","南充","德阳"];
    var cityarray_2 = ["长沙","衡阳","郴州","湘西"];
    var cityarray_3 = ["广州","深圳","中山","佛山"];
    var cityarray_4 = ["武汉","黄冈","荆州","黄石"];
    var cityarray_5 = ["沈阳","铁岭","抚顺","鞍山"];
    var cityarray_6 = ["南昌","上饶","景德镇","九江"];
    var cityarray_7 = ["合肥","芜湖","蚌埠","淮南"];
    var cityarray_8 = ["福州","泉州","南平","莆田"];
    if(mysheng.value=="1"){
        myshi.innerHTML="";
        for(var i=0;i<cityarray_1.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_1[i]+"</option>"
        }
    }else if(mysheng.value=="2"){
        myshi.innerHTML=""; //先把以前的东西清空
        for(var i=0;i<cityarray_2.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_2[i]+"</option>"
        }
    }else if(mysheng.value=="3"){
        myshi.innerHTML=""; //先把以前的东西清空
        for(var i=0;i<cityarray_3.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_3[i]+"</option>"
        }
    }else if(mysheng.value=="4"){
        myshi.innerHTML=""; //先把以前的东西清空
        for(var i=0;i<cityarray_4.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_4[i]+"</option>"
        }
    }
    else if(mysheng.value=="5"){
        myshi.innerHTML=""; //先把以前的东西清空
        for(var i=0;i<cityarray_5.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_5[i]+"</option>"
        }
    }else if(mysheng.value=="6"){
        myshi.innerHTML=""; //先把以前的东西清空
        for(var i=0;i<cityarray_6.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_6[i]+"</option>"
        }
    }else if(mysheng.value=="7"){
        myshi.innerHTML=""; //先把以前的东西清空
        for(var i=0;i<cityarray_7.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_7[i]+"</option>"
        }
    }else if(mysheng.value=="8"){
        myshi.innerHTML=""; //先把以前的东西清空
        for(var i=0;i<cityarray_8.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_8[i]+"</option>"
        }
    }
}
function changecity1(){
    var mysheng = document.getElementById("province1");
    var myshi = document.getElementById("city1");
    var cityarray_1 = ["绵阳","成都","南充","德阳"];
    var cityarray_2 = ["长沙","衡阳","郴州","湘西"];
    var cityarray_3 = ["广州","深圳","中山","佛山"];
    var cityarray_4 = ["武汉","黄冈","荆州","黄石"];
    var cityarray_5 = ["沈阳","铁岭","抚顺","鞍山"];
    var cityarray_6 = ["南昌","上饶","景德镇","九江"];
    var cityarray_7 = ["合肥","芜湖","蚌埠","淮南"];
    var cityarray_8 = ["福州","泉州","南平","莆田"];
    if(mysheng.value=="1"){
        myshi.innerHTML="";
        for(var i=0;i<cityarray_1.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_1[i]+"</option>"
        }
    }else if(mysheng.value=="2"){
        myshi.innerHTML="";
        for(var i=0;i<cityarray_2.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_2[i]+"</option>"
        }
    }else if(mysheng.value=="3"){
        myshi.innerHTML="";
        for(var i=0;i<cityarray_3.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_3[i]+"</option>"
        }
    }else if(mysheng.value=="4"){
        myshi.innerHTML="";
        for(var i=0;i<cityarray_4.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_4[i]+"</option>"
        }
    }
    else if(mysheng.value=="5"){
        myshi.innerHTML=""; //先把以前的东西清空
        for(var i=0;i<cityarray_5.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_5[i]+"</option>"
        }
    }else if(mysheng.value=="6"){
        myshi.innerHTML="";
        for(var i=0;i<cityarray_6.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_6[i]+"</option>"
        }
    }else if(mysheng.value=="7"){
        myshi.innerHTML="";
        for(var i=0;i<cityarray_7.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_7[i]+"</option>"
        }
    }else if(mysheng.value=="8"){
        myshi.innerHTML="";
        for(var i=0;i<cityarray_8.length;i++){
            myshi.innerHTML=myshi.innerHTML+"<option>"+cityarray_8[i]+"</option>"
        }
    }
}
 function changetime(){
     var mymonth = document.getElementById("month");
     var mydate = document.getElementById("date");
     var datearray_1 = new Array();
     var datearray_2 = new Array();
     var datearray_3 = new Array();
     for( var i=1;i<=28;i++){
         datearray_1.push(i);
     }
     for( var i=1;i<=30;i++){
         datearray_2.push(i);
     }
     for( var i=1;i<=31;i++){
         datearray_3.push(i);
     }
     if(mymonth.value=="2"){
         mydate.innerHTML="--请先选择月份--";
         for(var i=0;i<datearray_1.length;i++){
             mydate.innerHTML=mydate.innerHTML+"<option>"+datearray_1[i]+"</option>"
         }
     }else if(mymonth.value=="1"){
         mydate.innerHTML="--请先选择月份--";
         for(var i=0;i<datearray_3.length;i++){
             mydate.innerHTML=mydate.innerHTML+"<option>"+datearray_3[i]+"</option>"
         }
     }else if(mymonth.value=="3"){
         mydate.innerHTML="--请先选择月份--";
         for(var i=0;i<datearray_2.length;i++){
             mydate.innerHTML=mydate.innerHTML+"<option>"+datearray_2[i]+"</option>"
         }
     }
 }
function clear1(){
    var mydate = document.getElementById("date");
    mydate.innerHTML="<option>"+"--请先选择月份--"+"</option>";
}