/**
 * Created with JetBrains WebStorm.
 * User: q
 * Date: 15-7-30
 * Time: 下午11:31
 * To change this template use File | Settings | File Templates.
 */
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
function carousel(){
    setInterval(button1,6000);
}