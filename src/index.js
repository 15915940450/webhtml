import './reset.css';
// import './grid_fee300.css';
import './go.scss';

window.onload=function(){
  function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    return /MicroMessenger/i.test(ua);
  }
  // var isWeixin = is_weixin();
  // var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
  function loadHtml(){
    var div = document.createElement('div');
    div.id = 'weixin-tip';
    div.innerHTML = '<p><img src="./live_weixin.png" alt="微信打开"/></p>';
    document.body.appendChild(div);
  }

  function loadStyleText(cssText) {
    var style = document.createElement('style');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    try {
      style.appendChild(document.createTextNode(cssText));
    } catch (e) {
      style.styleSheet.cssText = cssText; //ie9以下
    }
    var head=document.getElementsByTagName('head')[0]; //head标签之间加上style样式
    head.appendChild(style);
  }
  var cssText = '#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}';
  // if(true){
  // if(isWeixin){
  //   loadHtml();
  //   loadStyleText(cssText);
  // }
  //===微信下載  global
  var strUrlApk='https://imgcn.immotor.com/ebike/android/ccbike-1.0.1(2017-10-16).apk';
  var elesDownloadBtnA=document.querySelectorAll('.js--go-and-ccbike__a_download');
  for(var i=0;i<elesDownloadBtnA.length;i++){
    // http://mp.weixin.qq.com/mp/redirect?url=http://192.168.2.13/ili/dist/files_for_download/com.sina.weibolite_1.0.0_1792.apk#weixin.qq.com#wechat_redirect
    if(is_weixin()){
      elesDownloadBtnA[i].href='http://mp.weixin.qq.com/mp/redirect?url='+strUrlApk+'#weixin.qq.com#wechat_redirect';
    }else{
      elesDownloadBtnA[i].href=strUrlApk;
    }
    elesDownloadBtnA[i].onclick=function(ev){
      if(is_weixin()){
        ev.preventDefault();
        loadHtml();
        loadStyleText(cssText);
      }
    };
  }

//隱藏加載動畫
  function whenLoadComplete(){
    document.querySelector('.go-load-10').style.display='none';
  }
  function alterScreenshotSrcs(){
    var elesImg=document.querySelectorAll('.go__screenshot img');
    for(var i=0;i<elesImg.length;i++){
      elesImg[i].src='screenshot/ccbike/'+i+'.png';
    }
  }
  window.setTimeout(function(){
    whenLoadComplete();
    alterScreenshotSrcs();
  },0);
};


























//thilina.fang
