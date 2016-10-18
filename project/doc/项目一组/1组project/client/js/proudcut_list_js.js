/**
 * Created with JetBrains WebStorm.
 * User: BJ38
 * Date: 15-7-30
 * Time: 下午8:32
 * To change this template use File | Settings | File Templates.
 */
var color_lump=document.getElementById("color_lump");
//-------------------------------------------------导航js
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
        color_lump.style.marginLeft="1015px";
    }
    if(myX>=1110&&myX<=1180){
        color_lump.style.marginLeft="1123px";
    }
    if(myX>=1205&&myX<=1275){
        color_lump.style.marginLeft="1221px";
    }
    color_lump.style.webkitTransition="Transform  0.05s linear,margin 0.3s linear 0.1s";
}
function myslide2(obj){
    var event = window.event||arguments[0];
    var myX = event.clientX;
    color_lump.style.color="rgba(255, 185, 0, 0)";
    color_lump.style.webkitTransition="color 0.3s linear";
}
//function search_long(){
//    var search=document.getElementById("search").value;
//    document.getElementById("search").style.width="150px"
//}
//function search_short(){
//    var search=document.getElementById("search").value;
//    document.getElementById("search").style.width="100px";
//}
function search_focus(){
    document.getElementById("search").style.width="150px";
}
