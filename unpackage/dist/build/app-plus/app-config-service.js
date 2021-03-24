
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/cart/cart","pages/member/member","pages/shop/shop","pages/linkmy/linkmy","pages/qushe/qushe","pages/learn/learn","pages/news-detail/news-detail","pages/goods_detail/goods_detail"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#DD524D","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#333333","selectedColor":"#DD524D","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/icon/home.png","selectedIconPath":"static/icon/home-active.png"},{"pagePath":"pages/news/news","text":"咨询","iconPath":"static/icon/news.png","selectedIconPath":"static/icon/news-active.png"},{"pagePath":"pages/cart/cart","text":"购物车","iconPath":"static/icon/cart.png","selectedIconPath":"static/icon/cart-active.png"},{"pagePath":"pages/member/member","text":"会员","iconPath":"static/icon/member.png","selectedIconPath":"static/icon/member-active.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"航上","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"京东商城"}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"京东商城"}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"京东商城"}},{"path":"/pages/member/member","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"京东商城"}},{"path":"/pages/shop/shop","meta":{},"window":{"navigationBarTitleText":"商品列表","enablePullDownRefresh":true}},{"path":"/pages/linkmy/linkmy","meta":{},"window":{"navigationBarTitleText":"联系我们"}},{"path":"/pages/qushe/qushe","meta":{},"window":{"navigationBarTitleText":"社区图片"}},{"path":"/pages/learn/learn","meta":{},"window":{"navigationBarTitleText":"学习视频"}},{"path":"/pages/news-detail/news-detail","meta":{},"window":{"navigationBarTitleText":"咨询详情"}},{"path":"/pages/goods_detail/goods_detail","meta":{},"window":{"navigationBarTitleText":"商品详情"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
