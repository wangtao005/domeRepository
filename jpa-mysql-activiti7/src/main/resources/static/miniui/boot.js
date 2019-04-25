﻿var bootPATH = __CreateJSPath("boot.js");

mini_debugger = false;                                           //

var skin = getCookie("miniuiSkin") || 'cupertino';             //skin cookie   cupertino
var mode = getCookie("miniuiMode") || 'medium';                 //mode cookie     medium

//miniui
document.write('<script src="' + bootPATH + 'jquery.min.js" type="text/javascript"></sc' + 'ript>');
document.write('<script src="' + bootPATH + 'miniui/miniui.js" type="text/javascript" ></sc' + 'ript>');
document.write('<link href="' + bootPATH + 'res/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'miniui/themes/default/miniui.css" rel="stylesheet" type="text/css" />');

//common
document.write('<link href="' + bootPATH + 'res/css/common.css" rel="stylesheet" type="text/css" />');
document.write('<script src="' + bootPATH + 'res/js/common.js" type="text/javascript" ></sc' + 'ript>');

//skin
// if (skin && skin != "default") document.write('<link href="' + bootPATH + 'miniui/themes/' + skin + '/skin.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'miniui/themes/metro-blue/skin.css" rel="stylesheet" type="text/css" />');

//mode
// if (mode && mode != "default") document.write('<link href="' + bootPATH + 'miniui/themes/default/' + mode + '-mode.css" rel="stylesheet" type="text/css" />');

//icon
document.write('<link href="' + bootPATH + 'miniui/themes/icons.css" rel="stylesheet" type="text/css" />');

// 引入自定义样式
document.write('<link href="' + bootPATH + 'custom/base.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'custom/common.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'custom/custom_form.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'custom/custom_list.css" rel="stylesheet" type="text/css" />');

////////////////////////////////////////////////////////////////////////////////////////
function getCookie(sName) {
    var aCookie = document.cookie.split("; ");
    var lastMatch = null;
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) {
            lastMatch = aCrumb;
        }
    }
    if (lastMatch) {
        var v = lastMatch[1];
        if (v === undefined) return v;
        return unescape(v);
    }
    return null;
}

function __CreateJSPath(js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
}
// 关闭
function onCancel() {
    CloseWindow("cancel");
}
function CloseWindow(action) {
    if (window.CloseOwnerWindow) return window.CloseOwnerWindow(action);
    else window.close();
}

// 高级、普通查询
window.onload = function(){
    $("#btnNormal").click(function(){
        $("#normalTable").show();
        $("#seniorTable").hide();
        $("#fast_mode").text("普通");
        var searchForm = new mini.Form("#seniorTable");
        searchForm.clear();
        mini.get("mini-fit").doLayout();
    });


    $("#btnSenior1").click(function(){
        new mini.Form("#seniorTable2").clear();
        if($("#seniorTable1").css("display")=="none"){
        	$("#seniorTable1").toggle();
        }
        if($("#seniorTable2").css("display")!="none"){
        	$("#seniorTable2").toggle();
        }
        
        mini.get("mini-fit").doLayout();
    });
    $("#btnSenior2").click(function(){
        new mini.Form("#seniorTable1").clear();
        if($("#seniorTable2").css("display")=="none"){
        	$("#seniorTable2").toggle();
        }
        if($("#seniorTable1").css("display")!="none"){
        	$("#seniorTable1").toggle();
        }
        mini.get("mini-fit").doLayout();
    });
    
    $("#btnClearSearchTable").click(function(){
        var searchForm = new mini.Form("#seniorTable");
        searchForm.clear();
    });
    document.body.style.visibility = "visible";
};