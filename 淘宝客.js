/**
 * Created by Moonphy on 17/1/1.
 */
// 淘宝客登录

// var loginPanel = document.getElementsByClassName("login-panel")[0];
// userNmae.oninput = function(){ var un = userName.value; console(un)};
//var loginPanel = document.getElementsByClassName("login-panel-content")[0];
//setTimeout(function(){
//
//}, 4000);



var linkLogin = document.getElementById('J_menu_login');

linkLogin.click();

//var iframeB = document.getElementsByTagName('iframe')[0];
//var ifr_document = iframeB.contentWindow.document;
//console.log(ifr_document);
/*
iframeB.onload = function () {
    code();
};*/

var code = setTimeout(function(){



    var tarBox = document.getElementById('J_LoginBox');

    tarBox.className="login-box no-longlogin module-static";

    var userName = document.getElementById('TPL_username_1');

    userName.value = 'jiyibaba';

    var psw = document.getElementById('TPL_password_1');
    psw.value = 'jyhg5180102';


    var btnSubmit = document.getElementById('J_SubmitStatic');

    btnSubmit.click();

    var span = document.getElementById('nc_1_n1z');
    span.style.left = 210 + 'px';
}, 4000);

var divs = document.getElementsByTagName('div');
for(var i=0;i<divs.length;i++){
    divs[i].style.display = 'block';
}