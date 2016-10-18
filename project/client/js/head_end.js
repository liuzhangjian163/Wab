
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
        color_lump.style.marginLeft="1015px";
    }
    if(myX>=1110&&myX<=1180){
        color_lump.style.marginLeft="1123px";
    }
    if(myX>=1205&&myX<=1275){
        color_lump.style.marginLeft="1221px";
    }
    color_lump.style.webkitTransition="all 0.3s linear";

}
function myslide2(obj){
    var event = window.event||arguments[0];
    var myX = event.clientX;
    color_lump.style.color="rgba(255, 185, 0, 0)";
    color_lump.style.webkitTransition="all 0.4s linear";

}