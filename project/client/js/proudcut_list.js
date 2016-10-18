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

//................分界线滚动条监听
function jiaoche(obj){
    var mybarlist=document.getElementsByClassName("car");
    if(obj==1){
        mybarlist[0].style.color=" #313131";
//        mybarlist[3].style.color=" #313131";
//        mybarlist[6].style.color=" #313131";
        mytop_jiaoche = setInterval(car_jiaoche,5);
        mybarlist[1].style.color="#ffb900";
        mybarlist[2].style.color="#ffb900";
        mybarlist[4].style.color="#ffb900";
        mybarlist[5].style.color="#ffb900";
        mybarlist[7].style.color="#ffb900";
        mybarlist[8].style.color="#ffb900";
    }
    else if(obj==2){
//        mybarlist[1].style.color=" #313131";
        mybarlist[4].style.color=" #313131";
//        mybarlist[7].style.color=" #313131";
        if(document.body.scrollTop<1540){
            mytop_SUV = setInterval(car_SUV_shang,5);
        }else if(document.body.scrollTop>1540){
            mybutton_SUV = setInterval(car_SUV_xia,5);
        }
        mybarlist[0].style.color="#ffb900";
        mybarlist[2].style.color="#ffb900";
        mybarlist[3].style.color="#ffb900";
        mybarlist[5].style.color="#ffb900";
        mybarlist[6].style.color="#ffb900";
        mybarlist[8].style.color="#ffb900";
    }
    else if(obj==3){
//        mybarlist[2].style.color=" #313131";
//        mybarlist[5].style.color=" #313131";
        mybarlist[8].style.color=" #313131";
        mytop_paoche = setInterval(car_paoche,5);
        mybarlist[0].style.color="#ffb900";
        mybarlist[1].style.color="#ffb900";
        mybarlist[3].style.color="#ffb900";
        mybarlist[4].style.color="#ffb900";
        mybarlist[6].style.color="#ffb900";
        mybarlist[7].style.color="#ffb900";
    }
}
function car_jiaoche(){
    if(document.body.scrollTop>410){
        document.body.scrollTop = document.body.scrollTop - 20;
    }else if(document.body.scrollTop<=410){
        clearInterval(mytop_jiaoche);
    }
}

function car_SUV_shang(){
    if(document.body.scrollTop<1540){
        document.body.scrollTop = document.body.scrollTop + 20;
    }else if(document.body.scrollTop>=1540){
        clearInterval(mytop_SUV);
    }
}

function car_SUV_xia(){
    if(document.body.scrollTop>1540){
        document.body.scrollTop = document.body.scrollTop - 20;
    }else if(document.body.scrollTop<=1540){
        clearInterval(mybutton_SUV);
    }
}

function car_paoche(){
    if(document.body.scrollTop<2060){
        document.body.scrollTop = document.body.scrollTop + 20;
    }else if(document.body.scrollTop>=2060){
        clearInterval(mytop_paoche);
    }
}
//........滚动条监听整合

