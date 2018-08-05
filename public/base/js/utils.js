var utils = {
  // 当前页面高度
  pageHeight: function() {
    return document.body.scrollHeight;
  },
  // 当前页面宽度
  pageWidth: function() {
    return document.body.scrollWidth;
  },
  //浏览器视口的高度
  windowHeight: function() {
    var de = document.documentElement;
    return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
  },
  //浏览器视口的宽度
  windowWidth: function() {
    var de = document.documentElement;
    return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth
  },
  // 浏览器垂直滚动位置
  scrollY: function() {
    var de = document.documentElement;
    return self.pageYOffset || (de && de.scrollTop) || document.body.scrollTop;
  },
  // 浏览器水平滚动位置
  scrollX: function() {
    var de = document.documentElement;
    return self.pageXOffset || (de && de.scrollLeft) || document.body.scrollLeft;
  },
  // 显示遮罩层
  showOverlay: function() {
    // $("#overlay").remove();
    // $("body").prepend('<div id="overlay"></div>');
    if (utils.pageHeight() > utils.windowHeight()) {
      $("#overlay").height(utils.pageHeight());
    } else {
      $("#overlay").height(utils.windowHeight());
    }
    $("#overlay").width(utils.pageWidth());
    /*
     fadeTo第一个参数为速度，第二个为透明度;
     多重方式控制透明度，保证兼容性，但也带来修改麻烦的问题
    */
    $("#overlay").fadeTo(200, 0.8);
  },
  // 隐藏覆盖层
  hideOverlay: function() {
    $("#overlay").fadeOut(200);
  },
  // 隐藏提示
  fadeTip: function(data) {
    if ($(data).css('display') !== 'none') {
      $(data).fadeOut(3000)
    } else {
      $(data).show()
      $(data).fadeOut(3000)
    }
  },
  // 获取url中"?"符后的 传递的参数
  getRequest: function() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  },
  // 获取字符串长度
  getLength: function(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
        len += 2;
      } else {
        len++;
      }
    }
    return len;
  },
  //动态加载CSS
  dynamicLoadingCSS: function(path) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = path;
    head.appendChild(link);
  },
  // 动态加载JS
  dynamicLoadingJS: function(path) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path;
    body.appendChild(script);
  },
  myBrowser: function() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    console.log(userAgent);
    //判断是否Opera浏览器
    if (userAgent.indexOf("Opera") > -1) {
      return "Opera"
    };
    //判断是否Firefox浏览器
    if (userAgent.indexOf("Firefox") > -1) {
      return "FF";
    }
    if (userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
    }
    //判断是否Safari浏览器
    if (userAgent.indexOf("Safari") > -1) {
      return "Safari";
    }
    //判断是否IE浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
      return "IE";
    };
  },
  // 邮箱格式校验
  isEmail: function(str) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    return reg.test(str);
  },
  // 手机号校验
  isPhone: function(str) {
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    return reg.test(str)
  },
}
//判断访问终端
var browser = {
  versions: function() {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
      qq: u.match(/\sQQ/i) == " qq" //是否QQ
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
/* ================= 调用示例 =========
//判断是否IE内核
if (browser.versions.trident) { console.log("IE内核"); }
//判断是否webKit内核
if (browser.versions.webKit) { console.log("webKit内核"); }
//判断是否移动端
if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {
    console.log("移动端");
}
// 检测浏览器语言
var currentLang = navigator.language; //判断除IE外其他浏览器使用语言
if (!currentLang) { //判断IE浏览器使用语言
    currentLang = navigator.browserLanguage;
}
console.log("浏览器语言：" + currentLang);
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    console.log("ios终端：" + navigator.userAgent);
} else if (/(Android)/i.test(navigator.userAgent)) {
    console.log("Android终端：" + navigator.userAgent);
} else {
    console.log("浏览器:" + navigator.userAgent);
};
*/