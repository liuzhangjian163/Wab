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
    cover.style.top="0px";
    cover.style.zIndex="700";
    cover.style.display="block"
    if(m==1){
    mylogin.style.display="block"
    mylogin.style.webkitTransition="display 2s linear"
    mylogin.style.zIndex="999";
    }else if(m==2){
        myregister.style.display="block"
        myregister.style.webkitTransition="display 2s linear"
        myregister.style.zIndex="999";
    }else if(m==3){
        mypre_drive.style.display="block"
        mypre_drive.style.webkitTransition="display 2s linear"
        mypre_drive.style.zIndex="999";
    }else if(m==4){
        myorder.style.display="block"
        myorder.style.webkitTransition="display 2s linear"
        myorder.style.zIndex="999";
    }
}
function delete_login(m){
    cover.style.top="-667px"
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