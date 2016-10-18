/**
 * Created by Administrator on 2015/7/30.
 */
function detail(){
    window.open("../page/product_detail.html");
}
function user_pay(){
    window.open("../page/pay.html");
}
function info_change(obj){
    var alterlist=document.getElementsByClassName("user_alter");
    var slidelist=document.getElementsByClassName("user_slide");
   for(var i=0;i<alterlist.length;i++)
   {
       if(alterlist[i]==obj){
           alterlist[i].style.backgroundColor="#ffb900";
           alterlist[i].style.color="#fff";
           slidelist[i].style.display="block";
       }
       else{
           alterlist[i].style.backgroundColor="#333";
           alterlist[i].style.color="#ffb900";
           slidelist[i].style.display="none";
       }
   }

}
 function info_change_alter(){

     document.getElementsByClassName("info_alter")[0].style.backgroundColor="#ffb900";
     document.getElementsByClassName("info_alter")[0].style.color="#fff";
     document.getElementsByClassName("alter_info")[0].style.display="block";
     document.getElementsByClassName("id_info")[0].style.display="none";
     document.getElementsByClassName("info_id")[0].style.backgroundColor="#333";
     document.getElementsByClassName("info_id")[0].style.color="#ffb900";

 }
function mybar(obj){

    var mybarlist=document.getElementsByClassName("mybar");
    var alist=document.getElementsByClassName("mya");
    for(var i=0;i<mybarlist.length;i++){
        if(mybarlist[i]==obj){

            mybarlist[i].style.backgroundColor="#ffb900";
            alist[i].style.color="#fff";
        }
        else{
            mybarlist[i].style.backgroundColor="#fff";
            alist[i].style.color="#ffb900";
        }
    }

}