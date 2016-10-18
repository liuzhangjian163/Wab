/*home banne*/
function button1(obg){
    var myhome_banner1=document.getElementById("home_banner1");
    var myhome_banner_image=document.getElementById("home_banner1").getElementsByTagName("img");

    if(myhome_banner1.style.marginLeft=="")
    {
        myhome_banner1.style.marginLeft="0px";
    }
    if( parseInt(myhome_banner1.style.marginLeft)<=-2698){
        myhome_banner1.style.marginLeft="0px";
    }
    else{
        myhome_banner1.style.marginLeft=parseInt (myhome_banner1.style.marginLeft)-1349+"px";
    }
}

function button2(obj) {
    var myhome_banner1=document.getElementById("home_banner1");
    if(myhome_banner1.style.marginLeft==""|| parseInt(myhome_banner1.style.marginLeft)>=0){
        myhome_banner1.style.marginLeft="-2698px";
    }else{

        myhome_banner1.style.marginLeft=parseInt (myhome_banner1.style.marginLeft)+1349+"px";
    }

}
var zanting;
function carousel(){
    zanting=setInterval(button1,5000);
}

function mybannnerover(){

     clearInterval(zanting);

}
function mybannnerout(){
    zanting=setInterval(button1,5000);

}

