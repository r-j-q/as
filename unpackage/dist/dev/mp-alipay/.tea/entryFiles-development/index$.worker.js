if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/carousel/carousel?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/grid/grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup?hash=63f3d097e78ac04213190ce4a92c81860617f7b4');
require('../../components/uni-popup/uni-popup-message?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/inputBox/inputBox?hash=742bce8087eed7f6689ef271143794386135d31d');
require('../../components/wuc-tab/wuc-tab?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup-drawer?hash=583a17a2fc84bc0e3829668defc02113802a2828');
require('../../components/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup-more?hash=306a9c1ac10da172434960724f720782f3fca324');
require('../../components/qrcode/qrcode?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup-twocode?hash=c06483d40265d849fa6a42a8b2aae01435cace16');
require('../../components/tab/tab?hash=044ace61496e1ceab6bdd2f9b2f277d48c055433');
require('../../components/notice/notice?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup-redpacket?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/paymentlist/paymentlist?hash=f735bc2a7a32a5a70935cb653d196b5174f5e64a');
require('../../components/uni-popup/uni-popup-dialog?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=9724375a7cfb0c2a9ea84e7d42ba862b4eac2915');
require('../../pages/lifepay/lifepay?hash=011824401ebe9698f417c241c744ef31350aeff4');
require('../../pages/rehistory/rehistory?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/historycard/historycard?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/lifehistory/lifehistory?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/alogin/alogin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/balance/balance?hash=d9982ab7538ecc4c57bd2955a4bb961a34504431');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}