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
//_______________________________________________________________________________µ¼º½



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
        s_lun[number].style.border = "1px solid #ffb900";
        banner[number].style.webkitAnimation="banner 2s forwards";
        banner[number].style.transition="all 1s ease";
        banner[jisu].style.webkitAnimation="banner_go 2s forwards";
        banner[jisu].style.transition="all 1s ease";
        //alert(number);
        //alert(jisu);
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
        banner[number].style.transition="all 1s ease";
        banner[jisu].style.webkitAnimation="banner_go 2s forwards";
        banner[jisu].style.transition="all 1s ease";
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
        banner[number].style.transition="all 1s ease";
        banner[jisu].style.webkitAnimation="banner_go 2s forwards";
        banner[jisu].style.transition="all 1s ease";
        //alert(number);
        //alert(jisu);
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
        banner[number].style.transition="all 1s ease";
        banner[jisu].style.webkitAnimation="banner_go 2s forwards";
        banner[jisu].style.transition="all 1s ease";
        //alert(number);
        //alert(jisu);
    }
    jisu=number;
}
