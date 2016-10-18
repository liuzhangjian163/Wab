
window.onload=message_animation;
// 页首 页尾
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
    color_lump.style.webkitTransition="Transform  0.001s linear,margin 0.3s linear 0.1s";
}
function myslide2(obj){
    var event = window.event||arguments[0];
    var myX = event.clientX;
    color_lump.style.color="rgba(255, 185, 0, 0)";
    color_lump.style.webkitTransition="all 0.3s linear";
}
var mytopInt2;
function back_topInterval(){
    mytopInt2 = setInterval(back_top,10);
}
function back_top(){
    if(window.scrollY==0){
        clearInterval(mytopInt2);
    }else{
        window.scrollTo(0,window.scrollY-30);
    }
}

//页首 页尾到此结束

function message_animation (){
    var banner_message1=document.getElementById("banner_message1");
    var banner_message2=document.getElementById("banner_message2");
    var new_price=document.getElementById("new_price");
    var new_button1=document.getElementById("new_button1");
    banner_message1.style.left="850px";
    banner_message2.style.left="950px";
    banner_message2.style.textShadow="3px 3px 5px rgba(66, 65, 70, 0.72)";
    banner_message1.style.color="rgba(66, 65, 70, 1)";
    banner_message2.style.color="rgba(66, 65, 70, 1)";
    new_price.style.color="rgba(255, 183, 0, 1)";
    banner_message1.style.webkitTransition="all 0.4s linear";
    banner_message2.style.webkitTransition="all 0.2s linear 0.4s";
    new_price.style.webkitTransition="all 0.3s linear 0.6s";
    new_button1.style.top="590px";
    new_button1.style.webkitTransition="top 0.3s linear 0.9s,background 0.3s linear";
}
function myonscroll(){
    var arrow=document.getElementById("arrow");
    if(document.body.scrollTop==0){
        arrow.style.color="rgba(255, 185, 0, 0)";
        arrow.style.backgroundColor="rgba(0, 0, 0, 0)";
        arrow.style.webkitTransition="all 0.4s linear";
    }
    if(document.body.scrollTop>0){
        arrow.style.color="rgba(255, 185, 0, 1)";
        arrow.style.backgroundColor="rgba(0, 0, 0, 0.6)";
        arrow.style.webkitTransition="all 0.4s linear";
    }
    if(document.body.scrollTop==200){
        var myvideo=document.getElementById("myvideo");
        var hero=document.getElementById("hero");
        var new_video_text=document.getElementById("new_video_text");
//        myvideo.style.autoPlay="autoplay";
        hero.style.left="904px";
        hero.style.color="rgba(255, 185, 0, 1)";
        hero.style.webkitTransition="all 0.4s linear";
        new_video_text.style.top="792px";
        new_video_text.style.webkitTransition="all 0.3s linear 0.4s";
    }
    if(document.body.scrollTop>=880){
        var property_h1=document.getElementById("property_h1");
        var property_h3=document.getElementById("property_h3");
        var property_s1=document.getElementById("property_s1");
        var property_s2=document.getElementById("property_s2");
        var property_s3=document.getElementById("property_s3");
        var property_s4=document.getElementById("property_s4");
        property_h1.style.width="110px";
        property_h3.style.width="630px";
        property_h1.style.webkitTransition="all 0.3s linear";
        property_h3.style.webkitTransition="all 0.8s linear 0.2s";
        property_s1.style.height="300px";
        property_s1.style.webkitTransition="all 1.5s linear 1s";
        property_s2.style.color="rgba(255, 255, 255, 1)";
        property_s2.style.webkitTransition="top 0.2s linear,color 0.8s linear 2s";
        property_s3.style.color="rgba(255, 255, 255, 1)";
        property_s3.style.webkitTransition="top 0.2s linear,color 0.8s linear 2s";
        property_s4.style.color="rgba(255, 255, 255, 1)";
        property_s4.style.webkitTransition="all 0.5s linear 2.8s";
    }
    if(document.body.scrollTop>=2000){
        var devise_s2=document.getElementById("devise_s2");
        var devise_s3=document.getElementById("devise_s3");
        devise_s2.style.color="rgba(255, 255, 255, 1)";
        devise_s2.style.webkitTransition="color 0.5s linear";
        devise_s3.style.color="rgba(255, 255, 255, 1)";
        devise_s3.style.webkitTransition="color 0.5s linear 0.5s";
    }
    if(document.body.scrollTop>=2300){
        var devise_h1=document.getElementById("devise_h1");
        var devise_h3=document.getElementById("devise_h3");
        var devise_s1=document.getElementById("devise_s1");
        devise_h1.style.width="110px";
        devise_h3.style.width="630px";
        devise_h1.style.webkitTransition="all 0.3s linear";
        devise_h3.style.webkitTransition="all 0.8s linear 0.3s";
        devise_s1.style.height="300px";
        devise_s1.style.webkitTransition="all 1.5s linear 1s";
    }
    if(document.body.scrollTop>=2900){
        var science_s2=document.getElementById("science_s2");
        var science_s4=document.getElementById("science_s4");
        var science_s3=document.getElementById("science_s3");
        science_s2.style.color="rgba(255, 255, 255, 1)";
        science_s4.style.color="rgba(255, 255, 255, 1)";
        science_s3.style.color="rgba(255, 255, 255, 1)";
        science_s2.style.webkitTransition="all 0.4s linear";
        science_s4.style.webkitTransition="all 0.4s linear 0.4s";
        science_s3.style.webkitTransition="all 0.4s linear 1s";

    }
    if(document.body.scrollTop>=3100){
        var science_h1=document.getElementById("science_h1");
        var science_h3=document.getElementById("science_h3");
        var science_s1=document.getElementById("science_s1");
        var new_button3=document.getElementById("new_button3");
        var new_button311=document.getElementById("new_button311");
        science_h1.style.width="110px";
        science_h3.style.width="630px";
        science_h1.style.webkitTransition="all 0.3s linear";
        science_h3.style.webkitTransition="all 0.8s linear 0.3s";
        science_s1.style.height="100px";
        science_s1.style.webkitTransition="all 1.5s linear 1.1s";
        new_button3.style.backgroundColor="rgba(49, 49, 49, 1)";
        new_button311.style.color="rgba(255, 185, 0, 1)";
        new_button3.style.borderColor="rgba(255, 185, 0, 1)";
        new_button3.style.webkitTransition="all 0.5s linear 1s";
        new_button311.style.webkitTransition="all 0.5s linear 1.2s";
    }
}
function mymouseover_button3(){
    var new_button3=document.getElementById("new_button3");
    new_button3.style.backgroundColor="rgba(255, 255, 255, 1)";
    new_button3.style.webkitTransition="all 0.3s linear";
}
function mymouseout_button3(){
    var new_button3=document.getElementById("new_button3");
    new_button3.style.backgroundColor="rgba(49, 49, 49, 1)";
    new_button3.style.webkitTransition="all 0.3s linear";
}

