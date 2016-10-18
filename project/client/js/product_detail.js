/**
 * Created by gxa on 2015/7/29.
 */

var color_lump=document.getElementById("color_lump");

function myslide(obj){
    var event = window.event||arguments[0];
    var myX = event.clientX;
    color_lump.style.color="rgba(255, 185, 0, 1)";
    if(myX>=265&&myX<=345){

        color_lump.style.marginLeft="287px";
    }
    if(myX>=370&&myX<=450){

        color_lump.style.marginLeft="392px";
    }
    if(myX>=475&&myX<=555){

        color_lump.style.marginLeft="497px";
    }
    if(myX>=580&&myX<=660){

        color_lump.style.marginLeft="602px";
    }
    if(myX>=685&&myX<=765){

        color_lump.style.marginLeft="707px";
    }
    if(myX>=990&&myX<=1070){
        color_lump.style.marginLeft="1028px";
    }
    if(myX>=1110&&myX<=1180){
        color_lump.style.marginLeft="1140px";
    }
    if(myX>=1205&&myX<=1275){
        color_lump.style.marginLeft="1240px";
    }
    color_lump.style.webkitTransition="all 0.3s linear 0.1s";
}
function myslide2(obj){
    var event = window.event||arguments[0];
    var myX = event.clientX;
    color_lump.style.color="rgba(255, 185, 0, 0)";
    color_lump.style.webkitTransition="color 0.3s linear";
}

//_______________________________________________________________________________导航
//----------------------------------------------------------------------------------------------------系列导航开始

function nav_xilie(number) {                      //______________________________________________________________________横导航样式
    var xilie = document.getElementsByClassName("nav_xilie");
    var mystyle = document.getElementsByClassName("nav_style");
    var myli = document.getElementsByClassName("up")[0].getElementsByTagName("li");
    var myspan = myli[number].getElementsByClassName("nav_xilie")[0];
    var mydiv = myli[number].getElementsByClassName("nav_style")[0]
    for (var i = 1; i <= myli.length; i++) {
        xilie[i - 1].style.color = "white";
        mystyle[i - 1].style.width = "0px"
    }
    myspan.style.color = "#ffb900";
    mydiv.style.width = "50px";
}
//__________________________________________________________________________________________左导航
function nav_lun(number){
    var car=document.getElementsByClassName("car");
    var wenzi=document.getElementsByClassName("wenzi");
    var myspan=document.getElementsByClassName("nav_lun")[number].getElementsByClassName("car");
    var myli=document.getElementsByClassName("nav_lun");
    var mywz=document.getElementsByClassName("nav_lun")[number].getElementsByClassName("wenzi");
for(var i=1;i<=myli.length;i++){
        myli[i-1].style.paddingLeft="";
        car[i-1].style.opacity="";
    wenzi[i-1].style.color="";
    }
    myli[number].style.paddingLeft="42px";
    myspan[0].style.opacity="1";
    mywz[0].style.color="#ffb900"
}


function banner_shuffling(number){
//alert(number);
    var banner=document.getElementById("banner_big");
    banner.style.transition="all 1s ease";
    banner.style.top=number*(-503)+"px";
}

var jisu=0;
function bs_one(number){
    var banner=document.getElementById("banner_one").getElementsByClassName("b_lun");
    var s_lun=document.getElementById("banner_one").getElementsByClassName("s_lun");
    if(jisu!=number) {
        for(var i=0; i<s_lun.length;i++){
            s_lun[i].style.border="0px solid #ffb900";
        }
        //alert(number);
        s_lun[number].style.border = "1px solid #ffb900";

        banner[number].style.webkitAnimation="banner 2s forwards";
        banner[jisu].style.webkitAnimation="banner_go 2s forwards";
    }
    jisu=number;
}
function bs_two(number){
    var banner=document.getElementById("banner_two").getElementsByClassName("b_lun");
    var s_lun=document.getElementById("banner_two").getElementsByClassName("s_lun");
    if(jisu!=number) {
        for(var i=0; i<s_lun.length;i++){
            s_lun[i].style.border="0px solid #ffb900";
        }
        s_lun[number].style.border = "1px solid #ffb900";
        banner[number].style.webkitAnimation="banner 2s forwards";
        banner[jisu].style.webkitAnimation="banner_go 2s forwards";
        //alert(number);
        //alert(jisu);
    }
    jisu=number;
}
function bs_three(number){
    var banner=document.getElementById("banner_three").getElementsByClassName("b_lun");
    var s_lun=document.getElementById("banner_three").getElementsByClassName("s_lun");
    if(jisu!=number) {
        for(var i=0; i<s_lun.length;i++){
            s_lun[i].style.border="0px solid #ffb900";
        }
        s_lun[number].style.border = "1px solid #ffb900";
        banner[number].style.webkitAnimation="banner 2s forwards";
        banner[jisu].style.webkitAnimation="banner_go 2s forwards";
    }
    jisu=number;
}
function bs_four(number){
    var banner=document.getElementById("banner_four").getElementsByClassName("b_lun");
    var s_lun=document.getElementById("banner_four").getElementsByClassName("s_lun");
    if(jisu!=number) {
        for(var i=0; i<s_lun.length;i++){
            s_lun[i].style.border="0px solid #ffb900";
        }
        s_lun[number].style.border = "1px solid #ffb900";
        banner[number].style.webkitAnimation="banner 2s forwards";
        banner[jisu].style.webkitAnimation="banner_go 2s forwards";
    }
    jisu=number;
}

function jiazai(number){
    var method, url, param, sync;
    method = "get";
    url = "product_detail.do";
    param = "number=" + number;
    sync = true;//执行完返回函数
    createajax(method, url, param, selectback, sync);//回调函数
    function selectback(data) {
        //alert(url);
        if (myajax.readyState == 4 && myajax.status == 200) {
            var re = JSON.parse(myajax.responseText);
            document.getElementsByClassName("b_lun")[0].getElementsByTagName("img")[0].src=re[0].re_content;
            document.getElementsByClassName("b_lun")[1].getElementsByTagName("img")[0].src=re[1].re_content;
            document.getElementsByClassName("b_lun")[2].getElementsByTagName("img")[0].src=re[2].re_content;
            document.getElementsByClassName("b_lun")[3].getElementsByTagName("img")[0].src=re[3].re_content;
            document.getElementsByClassName("b_lun")[4].getElementsByTagName("img")[0].src=re[4].re_content;
            document.getElementsByClassName("b_lun")[5].getElementsByTagName("img")[0].src=re[5].re_content;
            document.getElementsByClassName("b_lun")[6].getElementsByTagName("img")[0].src=re[6].re_content;
            document.getElementsByClassName("b_lun")[7].getElementsByTagName("img")[0].src=re[7].re_content;
            document.getElementsByClassName("b_lun")[8].getElementsByTagName("img")[0].src=re[8].re_content;
            document.getElementsByClassName("b_lun")[9].getElementsByTagName("img")[0].src=re[9].re_content;
            document.getElementsByClassName("b_lun")[10].getElementsByTagName("img")[0].src=re[10].re_content;
            document.getElementsByClassName("b_lun")[11].getElementsByTagName("img")[0].src=re[11].re_content;

            document.getElementsByClassName("s_lun")[0].getElementsByTagName("img")[0].src=re[0].re_content;
            document.getElementsByClassName("s_lun")[1].getElementsByTagName("img")[0].src=re[1].re_content;
            document.getElementsByClassName("s_lun")[2].getElementsByTagName("img")[0].src=re[2].re_content;
            document.getElementsByClassName("s_lun")[3].getElementsByTagName("img")[0].src=re[3].re_content;
            document.getElementsByClassName("s_lun")[4].getElementsByTagName("img")[0].src=re[4].re_content;
            document.getElementsByClassName("s_lun")[5].getElementsByTagName("img")[0].src=re[5].re_content;
            document.getElementsByClassName("s_lun")[6].getElementsByTagName("img")[0].src=re[6].re_content;
            document.getElementsByClassName("s_lun")[7].getElementsByTagName("img")[0].src=re[7].re_content;
            document.getElementsByClassName("s_lun")[8].getElementsByTagName("img")[0].src=re[8].re_content;
            document.getElementsByClassName("s_lun")[9].getElementsByTagName("img")[0].src=re[9].re_content;
            document.getElementsByClassName("s_lun")[10].getElementsByTagName("img")[0].src=re[10].re_content;
            document.getElementsByClassName("s_lun")[11].getElementsByTagName("img")[0].src=re[11].re_content;

            document.getElementById("jiaqian").innerText=re[12].re_content;
            document.getElementById("dongli").innerText=re[13].re_content;
            document.getElementById("biansu").innerText=re[14].re_content;
            document.getElementById("youhao").innerText=re[15].re_content;
            document.getElementById("guige").innerText=re[16].re_content;
        }
    }
}