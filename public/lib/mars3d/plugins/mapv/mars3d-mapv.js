/**
 * Mars3D平台插件,结合mapv可视化功能插件  mars3d-mapv
 *
 * 版本信息：v3.4.0
 * 编译日期：2022-07-15 14:36:10
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-06-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';var _0x2464f6=_0x4a58;(function(_0x2e6ad3,_0x909736){var _0x431c10=_0x4a58,_0x26af3e=_0x2e6ad3();while(!![]){try{var _0x14fd9a=-parseInt(_0x431c10(0x6b))/0x1+parseInt(_0x431c10(0x89))/0x2*(-parseInt(_0x431c10(0x92))/0x3)+parseInt(_0x431c10(0xbe))/0x4+-parseInt(_0x431c10(0xbf))/0x5+-parseInt(_0x431c10(0x8d))/0x6*(-parseInt(_0x431c10(0x10a))/0x7)+parseInt(_0x431c10(0xe1))/0x8*(parseInt(_0x431c10(0x12c))/0x9)+parseInt(_0x431c10(0xba))/0xa*(-parseInt(_0x431c10(0xf5))/0xb);if(_0x14fd9a===_0x909736)break;else _0x26af3e['push'](_0x26af3e['shift']());}catch(_0x40118b){_0x26af3e['push'](_0x26af3e['shift']());}}}(_0x1969,0x811e0));function _0x4a58(_0x2b1096,_0x70d8e0){var _0x1969e7=_0x1969();return _0x4a58=function(_0x4a580b,_0x52404a){_0x4a580b=_0x4a580b-0x6b;var _0x2bb22d=_0x1969e7[_0x4a580b];if(_0x4a58['dXcbyl']===undefined){var _0x303c9b=function(_0x4bf890){var _0x40099d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x507cc3='',_0x350d52='';for(var _0x1b55e3=0x0,_0x380a91,_0x5883e5,_0x29fbdf=0x0;_0x5883e5=_0x4bf890['charAt'](_0x29fbdf++);~_0x5883e5&&(_0x380a91=_0x1b55e3%0x4?_0x380a91*0x40+_0x5883e5:_0x5883e5,_0x1b55e3++%0x4)?_0x507cc3+=String['fromCharCode'](0xff&_0x380a91>>(-0x2*_0x1b55e3&0x6)):0x0){_0x5883e5=_0x40099d['indexOf'](_0x5883e5);}for(var _0x457135=0x0,_0x447bca=_0x507cc3['length'];_0x457135<_0x447bca;_0x457135++){_0x350d52+='%'+('00'+_0x507cc3['charCodeAt'](_0x457135)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x350d52);};_0x4a58['aiJWML']=_0x303c9b,_0x2b1096=arguments,_0x4a58['dXcbyl']=!![];}var _0x210a52=_0x1969e7[0x0],_0x2372ff=_0x4a580b+_0x210a52,_0x20acbf=_0x2b1096[_0x2372ff];return!_0x20acbf?(_0x2bb22d=_0x4a58['aiJWML'](_0x2bb22d),_0x2b1096[_0x2372ff]=_0x2bb22d):_0x2bb22d=_0x20acbf,_0x2bb22d;},_0x4a58(_0x2b1096,_0x70d8e0);}function _interopNamespace(_0x4bf890){var _0x4b999d=_0x4a58;if(_0x4bf890&&_0x4bf890[_0x4b999d(0xfe)])return _0x4bf890;var _0x40099d=Object[_0x4b999d(0x85)](null);return _0x4bf890&&Object[_0x4b999d(0xe5)](_0x4bf890)[_0x4b999d(0x84)](function(_0x507cc3){var _0xa3802=_0x4b999d;if(_0x507cc3!==_0xa3802(0x12a)){var _0x350d52=Object['getOwnPropertyDescriptor'](_0x4bf890,_0x507cc3);Object[_0xa3802(0xfd)](_0x40099d,_0x507cc3,_0x350d52[_0xa3802(0x12b)]?_0x350d52:{'enumerable':!![],'get':function(){return _0x4bf890[_0x507cc3];}});}}),_0x40099d['default']=_0x4bf890,_0x40099d;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);function ownKeys(_0x1b55e3,_0x380a91){var _0x1f8e5f=_0x4a58,_0x5883e5=Object[_0x1f8e5f(0xe5)](_0x1b55e3);if(Object[_0x1f8e5f(0xb1)]){var _0x29fbdf=Object[_0x1f8e5f(0xb1)](_0x1b55e3);_0x380a91&&(_0x29fbdf=_0x29fbdf[_0x1f8e5f(0xd2)](function(_0x457135){var _0x6e4cda=_0x1f8e5f;return Object[_0x6e4cda(0xa2)](_0x1b55e3,_0x457135)['enumerable'];})),_0x5883e5['push'][_0x1f8e5f(0x7a)](_0x5883e5,_0x29fbdf);}return _0x5883e5;}function _objectSpread2(_0x447bca){var _0x8254b8=_0x4a58;for(var _0x2b22e9=0x1;_0x2b22e9<arguments[_0x8254b8(0x82)];_0x2b22e9++){var _0x271506=null!=arguments[_0x2b22e9]?arguments[_0x2b22e9]:{};_0x2b22e9%0x2?ownKeys(Object(_0x271506),!0x0)[_0x8254b8(0x84)](function(_0x59b743){_defineProperty(_0x447bca,_0x59b743,_0x271506[_0x59b743]);}):Object[_0x8254b8(0xf1)]?Object[_0x8254b8(0x122)](_0x447bca,Object[_0x8254b8(0xf1)](_0x271506)):ownKeys(Object(_0x271506))['forEach'](function(_0x3ec56c){var _0x21687d=_0x8254b8;Object['defineProperty'](_0x447bca,_0x3ec56c,Object[_0x21687d(0xa2)](_0x271506,_0x3ec56c));});}return _0x447bca;}function _0x1969(){var _0x1fee52=['DMfSDwu','D2LUzg93ug9ZAxrPB24','BgvMDa','C3rLChm','C2HHBq','qMfZzuXHEwvY','txvSDgLqB2X5z29U','CMvTB3zLrgf0yq','zgvMAw5LuhjVCgvYDgLLCW','y2fSBa','Aw5PDerLDMLJzvbPEgvSuMf0Aw8','rg9TvxrPBa','Bw91C2vnB3zL','yMLUzev2zw50','x3nLDe9WDgLVBNniB29R','x3bVAw50zxjfDMvUDhm','zgvMyxvSDa','z2v0','ouzrDLjWBG','z2v0q29UDgv4Da','nJq0mdKYqKXtrKnZ','x2nYzwf0zunHBNzHCW','zML4zwrizwLNAhq','x29Utw92zvn0yxj0rxzLBNq','y2XLyxjeyxrH','C2f2zq','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','z2v0uMvJDgfUz2XL','Aw5PDefUAw1HDg9Y','y29UC3rYDwn0B3i','vxrPBa','Dg9W','Aw5PDa','z2vVBwv0CNK','yw5PBwf0B3i','yxbWBhK','Cg9ZAxrPB25xqW','x29UtwfWtw91C2vnB3zL','y2fUDMfZtgf5zxi','tgf5zxjvDgLS','DMfSDwvpzG','Bw91C2veB3DU','CMDIysGWlcaWlcaWlcaUmsK','BgvUz3rO','Bwv0Ag9KCW','zM9YrwfJAa','y3jLyxrL','C3rVCa','zgv2AwnLugL4zwXsyxrPBW','DhLWzq','mZKYodC0uvDXrhbJ','txvSDgLmAw5Lu3rYAw5N','B2zM','x3jLBw92zwriB29R','mti2nZKWmLneC05LrW','y2fTzxjH','x2nHBNzHC1vWzgf0zq','ywjZB2X1Dgu','D2LKDgG','m2r6zfPKqW','EKLUzgv4','C2L6zq','Aw5PDerHDgfsyw5Nzq','Ew1HEa','zgf0yvnLDa','y2XPy2S','Bgf5zxjPza','CgfYzw50rwXLBwvUDa','C2v0','x29Utw92zuvUzev2zw50','x2rHDge','zMLSBfjLy3q','y29UDgv4Da','AxnqB2LUDfzPC2LIBgu','zhjHDW','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','yMLUza','C2nLBMu','x3nOB3DiB29R','yw5PBwf0B3jnB3zLC3rHCNrfDMvUDa','BwfWDKf1Dg9izwLNAhq','Ew1PBG','DgLTzq','C3rVCefUAwfTyxrPB24','AxngB3jTyxq','ywrK','zNvUy3rPB24','C3r5Bgu','yMXVy2S','zNjVBurLz3jLzxm','z2v0t3DUuhjVCgvYDhLtEw1IB2XZ','Bw91C2vTB3zL','AxnfBMfIBgvKvgLTzq','x21HCfzszw5KzxjLCG','y2fTzxjHtw92zuvUza','Cg9PBNrLCKv2zw50CW','CMvUzgvY','y29UDgfPBMvY','Cg9ZAxrPB24','mJb6sfj2zMS','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','zwXSAxbZB2LK','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','mZmXnJaYme1ct2vfyq','nJC4mtuWB1ruuKDp','D3jPDgfIBgu','Eg1PBG','y2XHBxbuB0DYB3vUza','C3rLCa','B3b0Aw9UCW','Dw5PDa','uMvJDgfUz2XL','CMvTB3zLq2HPBgq','z2v0rgf0yq','y2fUDMfZ','yw5PBwf0B3jnB3zLzw5KrxzLBNq','yxv0BW','A2v5','CMvZDg9Yzq','u2nLBMvnB2rL','ug9PBNq','B2jQzwn0','CMvZAxPL','zMLSDgvY','zgLZCgXHEq','DhjHBNnMzxjdB29YzgLUyxrL','y2XPy2TfDMvUDa','x3jLC2v0','ChvZAa','zgvZDgLUyxrPB24TB3v0','y2fYDgvZAwfUvg9dyw52yxndB29YzgLUyxrLCW','Bgf5zxi','Dw5KzwzPBMvK','q2fYDg9NCMfWAgLJ','x2nVB3jKAw5HDgvZ','AgfZt3DUuhjVCgvYDhK','q2vZAxvT','x2rHDgfdywnOzq','ndaXnJi2neL5vNHMDG','y29UzMLNDxjHyMXL','rgf0yvnLDa','y29UC3rYDwn0','A2v5CW','zgf0yq','Dw5IAw5KrxzLBNq','BM9Uzq','y2XLyxi','y2XLyxjszwn0','Bw91C2vTB3zLrxzLBNq','ChjVDg90ExbL','x21HCa','zgvWDgHuzxn0','C3rLChnsyw5Nzq','BwfW','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9YCW','z2XVyMu','y29VCMrPBMf0zxm','DxbKyxrLrgf0yq','mJuYotGXm1ffAw93wa','x19WCM90B19F','zMLSBfn0EwXL','z2v0rxH0zw50qNLhzw9ku09o','ChjVy2vZC0rHDge','AgvPz2H0','x2nHy2HLx2v2zw50','rxzLBNruExbL','zgvMAw5LuhjVCgvYDhK','x19LC01VzhvSzq','ywXS','BwfYCZnKlw1HChy','y2fTzxjHtw92zvn0yxj0','BwfWDG','zw51BwvYywjSzq','yw5PBwf0Aw9U','BwfWDKrLChrOvgvZDa','q2fYDgvZAwfUmW','zhjHD0nVBNrLEhq','rwXSAxbZB2LKywXpy2nSDwrLCG','DxbKyxrL','mJfgtfLLy1G','C3rHCNq','CMvTB3zL','mhb4','z2v0uhjVDg90ExbLt2y','q09mt1jFqLvgrKvsx0jjva','C2v0uhjVDg90ExbLt2y','zgvZDhjVEq','ywrKrgf0yq','x29UtwfWq2XPy2S','z2v0sgvPz2H0','CMvNAxn0zxi','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','BwfWDKzPEgvKsgvPz2H0','x2fKzgvKsg9VAW','Cg9ZDfjLBMrLCG'];_0x1969=function(){return _0x1fee52;};return _0x1969();}function _classCallCheck(_0x3210d0,_0x249e47){var _0x2d14fb=_0x4a58;if(!(_0x3210d0 instanceof _0x249e47))throw new TypeError(_0x2d14fb(0xbd));}function _defineProperties(_0x1fa67a,_0x13237a){var _0x3a81dd=_0x4a58;for(var _0x5b9fa4=0x0;_0x5b9fa4<_0x13237a[_0x3a81dd(0x82)];_0x5b9fa4++){var _0x3a0a69=_0x13237a[_0x5b9fa4];_0x3a0a69[_0x3a81dd(0x103)]=_0x3a0a69['enumerable']||![],_0x3a0a69[_0x3a81dd(0xe2)]=!![];if(_0x3a81dd(0x11a)in _0x3a0a69)_0x3a0a69[_0x3a81dd(0xc0)]=!![];Object['defineProperty'](_0x1fa67a,_0x3a0a69[_0x3a81dd(0xcc)],_0x3a0a69);}}function _createClass(_0x4eed38,_0x28e9e6,_0x527a73){var _0x3d64cb=_0x4a58;if(_0x28e9e6)_defineProperties(_0x4eed38[_0x3d64cb(0xec)],_0x28e9e6);if(_0x527a73)_defineProperties(_0x4eed38,_0x527a73);return Object['defineProperty'](_0x4eed38,_0x3d64cb(0xec),{'writable':![]}),_0x4eed38;}function _defineProperty(_0x385320,_0x4dd051,_0x31eb82){var _0x38b9db=_0x4a58;return _0x4dd051 in _0x385320?Object[_0x38b9db(0xfd)](_0x385320,_0x4dd051,{'value':_0x31eb82,'enumerable':!![],'configurable':!![],'writable':!![]}):_0x385320[_0x4dd051]=_0x31eb82,_0x385320;}function _inherits(_0x55f617,_0x5509cc){var _0x1ce04d=_0x4a58;if(typeof _0x5509cc!==_0x1ce04d(0xad)&&_0x5509cc!==null)throw new TypeError(_0x1ce04d(0x71));_0x55f617[_0x1ce04d(0xec)]=Object[_0x1ce04d(0x85)](_0x5509cc&&_0x5509cc[_0x1ce04d(0xec)],{'constructor':{'value':_0x55f617,'writable':!![],'configurable':!![]}}),Object['defineProperty'](_0x55f617,_0x1ce04d(0xec),{'writable':![]});if(_0x5509cc)_setPrototypeOf(_0x55f617,_0x5509cc);}function _getPrototypeOf(_0x297535){var _0x305c26=_0x4a58;return _getPrototypeOf=Object[_0x305c26(0x110)]?Object[_0x305c26(0x10e)]:function _0xf47a0d(_0x210579){var _0x338854=_0x305c26;return _0x210579[_0x338854(0xf6)]||Object[_0x338854(0x10e)](_0x210579);},_getPrototypeOf(_0x297535);}function _setPrototypeOf(_0x1e6980,_0x4c1d17){var _0x52c64d=_0x4a58;return _setPrototypeOf=Object[_0x52c64d(0x110)]||function _0x45a598(_0x78625c,_0x37e5bb){var _0x1daab9=_0x52c64d;return _0x78625c[_0x1daab9(0xf6)]=_0x37e5bb,_0x78625c;},_setPrototypeOf(_0x1e6980,_0x4c1d17);}function _isNativeReflectConstruct(){var _0x568a69=_0x4a58;if(typeof Reflect==='undefined'||!Reflect[_0x568a69(0xe4)])return![];if(Reflect['construct'][_0x568a69(0x11e)])return![];if(typeof Proxy===_0x568a69(0xad))return!![];try{return Boolean[_0x568a69(0xec)][_0x568a69(0x7f)][_0x568a69(0x123)](Reflect[_0x568a69(0xe4)](Boolean,[],function(){})),!![];}catch(_0x3d7664){return![];}}function _assertThisInitialized(_0x3e413d){var _0x25c028=_0x4a58;if(_0x3e413d===void 0x0)throw new ReferenceError(_0x25c028(0x116));return _0x3e413d;}function _possibleConstructorReturn(_0x26e978,_0x4219c7){var _0x553e8b=_0x4a58;if(_0x4219c7&&(typeof _0x4219c7===_0x553e8b(0xd0)||typeof _0x4219c7===_0x553e8b(0xad)))return _0x4219c7;else{if(_0x4219c7!==void 0x0)throw new TypeError(_0x553e8b(0xbb));}return _assertThisInitialized(_0x26e978);}function _createSuper(_0x37b3a5){var _0x7d0ee3=_isNativeReflectConstruct();return function _0x1d0e0d(){var _0x122603=_0x4a58,_0x42d237=_getPrototypeOf(_0x37b3a5),_0x396798;if(_0x7d0ee3){var _0x2dde5a=_getPrototypeOf(this)[_0x122603(0x74)];_0x396798=Reflect[_0x122603(0xe4)](_0x42d237,arguments,_0x2dde5a);}else _0x396798=_0x42d237['apply'](this,arguments);return _possibleConstructorReturn(this,_0x396798);};}function _superPropBase(_0x3ff11a,_0x128203){var _0x5ef7f3=_0x4a58;while(!Object[_0x5ef7f3(0xec)][_0x5ef7f3(0xde)][_0x5ef7f3(0x123)](_0x3ff11a,_0x128203)){_0x3ff11a=_getPrototypeOf(_0x3ff11a);if(_0x3ff11a===null)break;}return _0x3ff11a;}function _get(){var _0x19df21=_0x4a58;return typeof Reflect!==_0x19df21(0xdb)&&Reflect[_0x19df21(0x12b)]?_get=Reflect[_0x19df21(0x12b)]:_get=function _0x48ae67(_0x280178,_0x55d665,_0x16e15a){var _0x599eb1=_0x19df21,_0xf1a0ca=_superPropBase(_0x280178,_0x55d665);if(!_0xf1a0ca)return;var _0x32ebdb=Object[_0x599eb1(0xa2)](_0xf1a0ca,_0x55d665);if(_0x32ebdb[_0x599eb1(0x12b)])return _0x32ebdb[_0x599eb1(0x12b)][_0x599eb1(0x123)](arguments['length']<0x3?_0x280178:_0x16e15a);return _0x32ebdb[_0x599eb1(0x11a)];},_get[_0x19df21(0x7a)](this,arguments);}var Cesium$1=mars3d__namespace[_0x2464f6(0xdf)],baiduMapLayer=mapv__namespace?mapv__namespace['baiduMapLayer']:null,BaseLayer$1=baiduMapLayer?baiduMapLayer[_0x2464f6(0xf6)]:Function,MapVRenderer=function(_0x4fae68){var _0x587bfb=_0x2464f6;_inherits(_0x4aef31,_0x4fae68);var _0x30d7ac=_createSuper(_0x4aef31);function _0x4aef31(_0x312722,_0x5a3a2d,_0xce4c8b,_0x2a6f6b){var _0x5e4c82=_0x4a58,_0x558ea4;_classCallCheck(this,_0x4aef31),_0x558ea4=_0x30d7ac['call'](this,_0x312722,_0x5a3a2d,_0xce4c8b);if(!BaseLayer$1)return _possibleConstructorReturn(_0x558ea4);return _0x558ea4[_0x5e4c82(0xf0)]=_0x312722,_0x558ea4['scene']=_0x312722[_0x5e4c82(0xa4)],_0x558ea4[_0x5e4c82(0x97)]=_0x5a3a2d,_0xce4c8b=_0xce4c8b||{},_0x558ea4[_0x5e4c82(0x77)](_0xce4c8b),_0x558ea4['argCheck'](_0xce4c8b),_0x558ea4[_0x5e4c82(0x124)](),_0x558ea4[_0x5e4c82(0x7d)]=_0x2a6f6b,_0x558ea4[_0x5e4c82(0xaa)]=!0x1,_0x558ea4[_0x5e4c82(0x104)]=_0xce4c8b[_0x5e4c82(0x104)],_0x558ea4;}return _createClass(_0x4aef31,[{'key':_0x587bfb(0x124),'value':function _0x4421cf(){this['devicePixelRatio']=window['devicePixelRatio']||0x1;}},{'key':'addAnimatorEvent','value':function _0x551ff7(){}},{'key':_0x587bfb(0xa6),'value':function _0x2c2e93(){var _0x35723b=_0x587bfb,_0x3176ab=this['options']['animation'];this['isEnabledTime']()&&this['animator']&&(this[_0x35723b(0x11d)][_0x35723b(0xc3)]=_0x3176ab[_0x35723b(0xef)][_0x35723b(0x10b)]);}},{'key':_0x587bfb(0xca),'value':function _0x352277(){var _0x3cd476=_0x587bfb;this[_0x3cd476(0xb3)]()&&this[_0x3cd476(0x79)];}},{'key':_0x587bfb(0x12d),'value':function _0x130c59(){var _0x579b16=_0x587bfb;return this[_0x579b16(0x7d)][_0x579b16(0xc9)][_0x579b16(0x12d)](this[_0x579b16(0x9f)]);}},{'key':_0x587bfb(0x77),'value':function _0x4d563f(_0x5454d3){var _0x360a1e=_0x587bfb;this[_0x360a1e(0xc4)]=_0x5454d3,this[_0x360a1e(0x95)](_0x5454d3),this[_0x360a1e(0x9f)]=this[_0x360a1e(0xc4)]['context']||'2d',this[_0x360a1e(0xc4)]['zIndex']&&this[_0x360a1e(0x7d)]&&this[_0x360a1e(0x7d)]['setZIndex']&&this['canvasLayer']['setZIndex'](this[_0x360a1e(0xc4)][_0x360a1e(0x93)]),this[_0x360a1e(0x73)]();}},{'key':_0x587bfb(0x8f),'value':function _0xfdea53(_0x590fba){var _0x218ff5=_0x587bfb,_0x593c6f=this[_0x218ff5(0xa4)];if(this['canvasLayer']&&!this['stopAniamation']){var _0x4b368c=this[_0x218ff5(0xc4)][_0x218ff5(0x104)],_0x556b07=this[_0x218ff5(0x12d)]();if(this['isEnabledTime']()){if(void 0x0===_0x590fba)return void this[_0x218ff5(0xe9)](_0x556b07);this[_0x218ff5(0x9f)]==='2d'&&(_0x556b07[_0x218ff5(0x70)](),_0x556b07['globalCompositeOperation']=_0x218ff5(0xd8),_0x556b07[_0x218ff5(0xf7)]=_0x218ff5(0x81),_0x556b07[_0x218ff5(0x9e)](0x0,0x0,_0x556b07[_0x218ff5(0xc9)][_0x218ff5(0x91)],_0x556b07[_0x218ff5(0xc9)][_0x218ff5(0xfa)]),_0x556b07[_0x218ff5(0xcd)]());}else this['clear'](_0x556b07);if(this['context']==='2d')for(var _0x48fe39 in this[_0x218ff5(0xc4)]){_0x556b07[_0x48fe39]=this[_0x218ff5(0xc4)][_0x48fe39];}else _0x556b07[_0x218ff5(0xe9)](_0x556b07[_0x218ff5(0x10f)]);var _0x2a999a={'transferCoordinate':function _0x35a5ef(_0x262a37){var _0x8f0145=_0x218ff5,_0x58e71a=null,_0x1ca441=_0x593c6f[_0x8f0145(0x117)];_0x593c6f['mapvAutoHeight']&&(_0x1ca441=_0x593c6f[_0x8f0145(0xf2)][_0x8f0145(0x114)](Cesium$1[_0x8f0145(0xdc)]['fromDegrees'](_0x262a37[0x0],_0x262a37[0x1])));var _0x15a9dc=Cesium$1[_0x8f0145(0x106)]['fromDegrees'](_0x262a37[0x0],_0x262a37[0x1],_0x1ca441);if(!_0x15a9dc)return _0x58e71a;var _0x371805=_0x593c6f[_0x8f0145(0xd9)](_0x15a9dc);if(!_0x371805)return _0x58e71a;if(_0x593c6f['mapvDepthTest']&&_0x593c6f['mode']===Cesium$1[_0x8f0145(0xce)]['SCENE3D']){var _0x2e2eee=new Cesium$1[(_0x8f0145(0x108))](_0x593c6f[_0x8f0145(0xf2)][_0x8f0145(0xbc)],_0x593c6f[_0x8f0145(0x8e)][_0x8f0145(0x7b)]),_0x1e4bb7=_0x2e2eee[_0x8f0145(0xa0)](_0x15a9dc);if(!_0x1e4bb7)return _0x58e71a;}return[_0x371805['x'],_0x371805['y']];}};void 0x0!==_0x590fba&&(_0x2a999a[_0x218ff5(0xd2)]=function(_0x8ea316){var _0x2f32ce=_0x218ff5,_0x3e3bc4=_0x4b368c['trails']||0xa;return!!(_0x590fba&&_0x8ea316[_0x2f32ce(0xa9)]>_0x590fba-_0x3e3bc4&&_0x8ea316[_0x2f32ce(0xa9)]<_0x590fba);});var _0x5c99a6=this[_0x218ff5(0x97)][_0x218ff5(0x12b)](_0x2a999a);this[_0x218ff5(0xf9)](_0x5c99a6),this[_0x218ff5(0xc4)][_0x218ff5(0xc5)]==='m'&&this[_0x218ff5(0xc4)][_0x218ff5(0x94)],this[_0x218ff5(0xc4)]['_size']=this[_0x218ff5(0xc4)][_0x218ff5(0x94)];var _0x4d1afb=_0x593c6f[_0x218ff5(0xd9)](Cesium$1[_0x218ff5(0x106)][_0x218ff5(0xb0)](0x0,0x0));if(!_0x4d1afb)return;this[_0x218ff5(0x107)](_0x556b07,new mapv__namespace[(_0x218ff5(0xe3))](_0x5c99a6),this[_0x218ff5(0xc4)],_0x4d1afb),this[_0x218ff5(0xc4)]['updateCallback']&&this[_0x218ff5(0xc4)]['updateCallback'](_0x590fba);}}},{'key':_0x587bfb(0xf4),'value':function _0x334907(_0x16e4f9,_0x417454){var _0x1477f5=_0x587bfb,_0x57dc4f=_0x16e4f9;_0x57dc4f&&_0x57dc4f['get']&&(_0x57dc4f=_0x57dc4f[_0x1477f5(0x12b)]()),void 0x0!==_0x57dc4f&&this[_0x1477f5(0x97)]['set'](_0x57dc4f),_get(_getPrototypeOf(_0x4aef31[_0x1477f5(0xec)]),_0x1477f5(0x109),this)['call'](this,{'options':_0x417454});}},{'key':_0x587bfb(0x112),'value':function _0x4bbb31(_0x427e96,_0x579c1d){var _0x34505c=_0x587bfb,_0x3c0cef=_0x427e96;_0x427e96&&_0x427e96[_0x34505c(0x12b)]&&(_0x3c0cef=_0x427e96['get']()),this['dataSet'][_0x34505c(0xac)](_0x3c0cef),this[_0x34505c(0x109)]({'options':_0x579c1d});}},{'key':_0x587bfb(0xc8),'value':function _0x10e58a(){return this['dataSet'];}},{'key':_0x587bfb(0x121),'value':function _0x1bce3f(_0x27edd5){var _0x518796=_0x587bfb;if(this[_0x518796(0x97)]){var _0x5f4791=this[_0x518796(0x97)][_0x518796(0x12b)]({'filter':function _0x33a69b(_0x158402){var _0x39c13d=_0x518796;return _0x27edd5==null||typeof _0x27edd5!==_0x39c13d(0xad)||!_0x27edd5(_0x158402);}});this[_0x518796(0x97)][_0x518796(0x9b)](_0x5f4791),this[_0x518796(0x109)]({'options':null});}}},{'key':_0x587bfb(0x6f),'value':function _0x54605b(){var _0x243d6e=_0x587bfb;this[_0x243d6e(0x97)]&&this[_0x243d6e(0x97)][_0x243d6e(0xe9)](),this[_0x243d6e(0x109)]({'options':null});}},{'key':_0x587bfb(0xa1),'value':function _0x15d8d7(){var _0x2428a0=_0x587bfb;this[_0x2428a0(0x7d)][_0x2428a0(0xa1)]();}},{'key':_0x587bfb(0xe9),'value':function _0x16123d(_0x577ce4){var _0x4d5d4c=_0x587bfb;_0x577ce4&&_0x577ce4['clearRect']&&_0x577ce4[_0x4d5d4c(0xea)](0x0,0x0,_0x577ce4[_0x4d5d4c(0xc9)][_0x4d5d4c(0x91)],_0x577ce4[_0x4d5d4c(0xc9)][_0x4d5d4c(0xfa)]);}},{'key':_0x587bfb(0x111),'value':function _0x4ee12d(){var _0x19a351=_0x587bfb;this[_0x19a351(0xe9)](this[_0x19a351(0x12d)]()),this[_0x19a351(0x6f)](),this[_0x19a351(0x79)]&&this[_0x19a351(0x79)][_0x19a351(0x86)](),this['animator']=null,this[_0x19a351(0x7d)]=null;}}]),_0x4aef31;}(BaseLayer$1);if(mapv__namespace!==null&&mapv__namespace!==void 0x0&&mapv__namespace[_0x2464f6(0xe3)])mapv__namespace[_0x2464f6(0xe3)][_0x2464f6(0xec)][_0x2464f6(0xd4)]=function(_0x14a84b,_0x21d200,_0x5e76be,_0x450f0c){var _0x45f373=_0x2464f6;_0x450f0c=_0x450f0c||_0x45f373(0xdd),_0x5e76be=_0x5e76be||_0x45f373(0xf3);for(var _0x1fa0df=0x0;_0x1fa0df<_0x14a84b[_0x45f373(0x82)];_0x1fa0df++){var _0x1614d8=_0x14a84b[_0x1fa0df][_0x45f373(0x78)],_0x2005a1=_0x1614d8[_0x5e76be];switch(_0x1614d8[_0x45f373(0x88)]){case _0x45f373(0xcf):{var _0x218016=_0x21d200(_0x2005a1);_0x218016?_0x1614d8[_0x450f0c]=_0x218016:_0x1614d8[_0x450f0c]=[-0x3e7,-0x3e7];}break;case'LineString':{var _0x1b0fa3=[];for(var _0x374a92=0x0;_0x374a92<_0x2005a1[_0x45f373(0x82)];_0x374a92++){var _0xa46cff=_0x21d200(_0x2005a1[_0x374a92]);_0xa46cff&&_0x1b0fa3[_0x45f373(0xd7)](_0xa46cff);}_0x1614d8[_0x450f0c]=_0x1b0fa3;}break;case _0x45f373(0x8a):case'Polygon':{var _0xfe986c=_0x33fbfa(_0x2005a1);_0x1614d8[_0x450f0c]=_0xfe986c;}break;case _0x45f373(0x120):{var _0x42b0fd=[];for(var _0x2f5d95=0x0;_0x2f5d95<_0x2005a1['length'];_0x2f5d95++){var _0x10015a=_0x33fbfa(_0x2005a1[_0x2f5d95]);_0x10015a[_0x45f373(0x82)]>0x0&&_0x42b0fd[_0x45f373(0xd7)](_0x10015a);}_0x1614d8[_0x450f0c]=_0x42b0fd;}break;}}function _0x33fbfa(_0xa38d71){var _0x561a7a=_0x45f373,_0x441123=[];for(var _0x2fef03=0x0;_0x2fef03<_0xa38d71['length'];_0x2fef03++){var _0x5aca86=_0xa38d71[_0x2fef03],_0x166fbd=[];for(var _0x21b39e=0x0;_0x21b39e<_0x5aca86[_0x561a7a(0x82)];_0x21b39e++){var _0x11178e=_0x21d200(_0x5aca86[_0x21b39e]);_0x11178e&&_0x166fbd[_0x561a7a(0xd7)](_0x11178e);}_0x166fbd[_0x561a7a(0x82)]>0x0&&_0x441123[_0x561a7a(0xd7)](_0x166fbd);}return _0x441123;}return _0x14a84b;};else throw new Error('请引入\x20mapv\x20库\x20');var Cesium=mars3d__namespace[_0x2464f6(0xdf)],BaseLayer=mars3d__namespace[_0x2464f6(0xda)][_0x2464f6(0x11f)],divId=0x0,MapVLayer=function(_0x4c8537){var _0x282e5b=_0x2464f6;_inherits(_0x1c0f0e,_0x4c8537);var _0x4b5231=_createSuper(_0x1c0f0e);function _0x1c0f0e(_0x3bd964,_0x4e6909){var _0x5eb0c0=_0x4a58,_0x558a04;return _classCallCheck(this,_0x1c0f0e),_0x558a04=_0x4b5231[_0x5eb0c0(0x123)](this,_0x3bd964),_0x558a04[_0x5eb0c0(0x129)]=_0x558a04[_0x5eb0c0(0xc4)][_0x5eb0c0(0xb6)],_0x558a04[_0x5eb0c0(0x97)]=_0x4e6909||new mapv__namespace[(_0x5eb0c0(0xe3))](_0x3bd964[_0x5eb0c0(0xe6)]),_0x558a04['canvas']=null,_0x558a04;}return _createClass(_0x1c0f0e,[{'key':'pointerEvents','get':function _0x246d78(){var _0x180e16=_0x4a58;return this[_0x180e16(0x129)];},'set':function _0x22eaae(_0x1695b4){var _0xf4d118=_0x4a58;this[_0xf4d118(0x129)]=_0x1695b4,this[_0xf4d118(0xc9)]&&(_0x1695b4?this[_0xf4d118(0xc9)][_0xf4d118(0xae)]['pointerEvents']=_0xf4d118(0xff):this[_0xf4d118(0xc9)][_0xf4d118(0xae)][_0xf4d118(0xb6)]='none');}},{'key':_0x282e5b(0xa5),'value':function _0x3ac69c(_0x4bcaac){var _0x564f9e=_0x282e5b;_0x4bcaac?this[_0x564f9e(0xc9)]['style'][_0x564f9e(0xd3)]=_0x564f9e(0xaf):this['canvas'][_0x564f9e(0xae)][_0x564f9e(0xd3)]='none';}},{'key':'_mountedHook','value':function _0x4c229d(){var _0x566d69=_0x282e5b,_0x348778,_0x3e9387,_0x14a7c9;this[_0x566d69(0xed)]['scene'][_0x566d69(0x105)]=(_0x348778=this['options'][_0x566d69(0xee)])!==null&&_0x348778!==void 0x0?_0x348778:!![],this[_0x566d69(0xed)][_0x566d69(0xa4)][_0x566d69(0xa7)]=(_0x3e9387=this[_0x566d69(0xc4)][_0x566d69(0xc2)])!==null&&_0x3e9387!==void 0x0?_0x3e9387:![],this['_map'][_0x566d69(0xa4)][_0x566d69(0x117)]=(_0x14a7c9=this[_0x566d69(0xc4)][_0x566d69(0x6d)])!==null&&_0x14a7c9!==void 0x0?_0x14a7c9:0x0;}},{'key':_0x282e5b(0x118),'value':function _0x553cdf(){var _0x1c8ea1=_0x282e5b;this[_0x1c8ea1(0x97)]&&(!this[_0x1c8ea1(0x97)][_0x1c8ea1(0x9d)]||this[_0x1c8ea1(0x97)][_0x1c8ea1(0x9d)][_0x1c8ea1(0x82)]===0x0)&&(this[_0x1c8ea1(0x97)]['_data']=[]['concat'](this['dataSet'][_0x1c8ea1(0xe0)])),this[_0x1c8ea1(0xb4)]=new MapVRenderer(this['_map'],this[_0x1c8ea1(0x97)],this['options'],this),this['initDevicePixelRatio'](),this[_0x1c8ea1(0xc9)]=this[_0x1c8ea1(0x6c)](),this[_0x1c8ea1(0xb7)]=this[_0x1c8ea1(0xb7)][_0x1c8ea1(0xa3)](this),this[_0x1c8ea1(0x127)](),this[_0x1c8ea1(0xd6)]();}},{'key':_0x282e5b(0x8c),'value':function _0x4010dc(){var _0x9d260c=_0x282e5b;this[_0x9d260c(0xe7)](),this[_0x9d260c(0xb4)]&&(this[_0x9d260c(0xb4)]['destroy'](),this[_0x9d260c(0xb4)]=null),this[_0x9d260c(0xc9)][_0x9d260c(0x9a)][_0x9d260c(0xc7)](this[_0x9d260c(0xc9)]);}},{'key':_0x282e5b(0x124),'value':function _0x19f2ad(){var _0x312346=_0x282e5b;this[_0x312346(0x87)]=window['devicePixelRatio']||0x1;}},{'key':_0x282e5b(0x127),'value':function _0x16e5c0(){var _0x4966c9=_0x282e5b,_0x3223e9,_0xc068ed,_0x4f292f,_0x5ccfb1;this[_0x4966c9(0xed)]['on'](mars3d__namespace['EventType']['mouseDown'],this[_0x4966c9(0x6e)],this),this['_map']['on'](mars3d__namespace[_0x4966c9(0xfc)][_0x4966c9(0x101)],this['_onMoveStartEvent'],this),this['_map']['on'](mars3d__namespace['EventType']['cameraMoveEnd'],this[_0x4966c9(0x9c)],this),(_0x3223e9=this[_0x4966c9(0xc4)])!==null&&_0x3223e9!==void 0x0&&(_0xc068ed=_0x3223e9[_0x4966c9(0x83)])!==null&&_0xc068ed!==void 0x0&&_0xc068ed[_0x4966c9(0x98)]&&this['_map']['on'](mars3d__namespace[_0x4966c9(0xfc)]['click'],this[_0x4966c9(0x113)],this),(_0x4f292f=this[_0x4966c9(0xc4)])!==null&&_0x4f292f!==void 0x0&&(_0x5ccfb1=_0x4f292f[_0x4966c9(0x83)])!==null&&_0x5ccfb1!==void 0x0&&_0x5ccfb1[_0x4966c9(0xb2)]&&this['_map']['on'](mars3d__namespace['EventType']['mouseMove'],this[_0x4966c9(0x7c)],this);}},{'key':'unbindEvent','value':function _0x143c71(){var _0x2d34be=_0x282e5b,_0x5d9fa7,_0x1598e1,_0x5b899e,_0x4ea0de;this['_map']['off'](mars3d__namespace['EventType'][_0x2d34be(0x80)],this[_0x2d34be(0x6e)],this),this[_0x2d34be(0xed)][_0x2d34be(0x8b)](mars3d__namespace[_0x2d34be(0xfc)]['cameraMoveStart'],this[_0x2d34be(0x6e)],this),this[_0x2d34be(0xed)][_0x2d34be(0x8b)](mars3d__namespace[_0x2d34be(0xfc)][_0x2d34be(0xb5)],this['_onMoveEndEvent'],this),this['_map'][_0x2d34be(0x8b)](mars3d__namespace[_0x2d34be(0xfc)][_0x2d34be(0x119)],this[_0x2d34be(0xd6)],this),(_0x5d9fa7=this[_0x2d34be(0xc4)])!==null&&_0x5d9fa7!==void 0x0&&(_0x1598e1=_0x5d9fa7['methods'])!==null&&_0x1598e1!==void 0x0&&_0x1598e1[_0x2d34be(0x98)]&&this[_0x2d34be(0xed)]['off'](mars3d__namespace['EventType'][_0x2d34be(0x98)],this[_0x2d34be(0x113)],this),(_0x5b899e=this[_0x2d34be(0xc4)])!==null&&_0x5b899e!==void 0x0&&(_0x4ea0de=_0x5b899e[_0x2d34be(0x83)])!==null&&_0x4ea0de!==void 0x0&&_0x4ea0de[_0x2d34be(0xb2)]&&this[_0x2d34be(0xed)][_0x2d34be(0x8b)](mars3d__namespace[_0x2d34be(0xfc)]['mouseMove'],this[_0x2d34be(0x7c)],this);}},{'key':_0x282e5b(0x6e),'value':function _0x364691(){var _0x3223a7=_0x282e5b;this[_0x3223a7(0xb4)]&&(this['_mapVRenderer'][_0x3223a7(0xa6)](),this['_map'][_0x3223a7(0x8b)](mars3d__namespace[_0x3223a7(0xfc)][_0x3223a7(0x119)],this['_reset'],this),this[_0x3223a7(0xed)]['on'](mars3d__namespace['EventType']['postRender'],this[_0x3223a7(0xd6)],this));}},{'key':_0x282e5b(0x9c),'value':function _0x59abee(){var _0x4172d5=_0x282e5b;this[_0x4172d5(0xb4)]&&(this['_map']['off'](mars3d__namespace[_0x4172d5(0xfc)]['postRender'],this['_reset'],this),this[_0x4172d5(0xb4)][_0x4172d5(0xca)](),this[_0x4172d5(0xd6)]());}},{'key':_0x282e5b(0x128),'value':function _0x465c0d(_0x59e6ce){var _0x17e949=_0x282e5b;this[_0x17e949(0x8c)](),this[_0x17e949(0x118)]();}},{'key':_0x282e5b(0x112),'value':function _0x44b847(_0x170f61){var _0x3a403e=_0x282e5b;this['_mapVRenderer']&&this[_0x3a403e(0xb4)][_0x3a403e(0x112)](_0x170f61,this[_0x3a403e(0xc4)]);}},{'key':_0x282e5b(0xf4),'value':function _0x11f214(_0x67d1bb){var _0x4d27c9=_0x282e5b;this['_mapVRenderer']&&this[_0x4d27c9(0xb4)][_0x4d27c9(0xf4)](_0x67d1bb,this[_0x4d27c9(0xc4)]);}},{'key':_0x282e5b(0xc8),'value':function _0x1b60aa(){var _0x575f0d=_0x282e5b;return this['_mapVRenderer']&&(this[_0x575f0d(0x97)]=this[_0x575f0d(0xb4)][_0x575f0d(0xc8)]()),this[_0x575f0d(0x97)];}},{'key':_0x282e5b(0x121),'value':function _0x28a368(_0x4bf631){var _0x24a1a6=_0x282e5b;this['_mapVRenderer']&&this['_mapVRenderer'][_0x24a1a6(0x121)](_0x4bf631);}},{'key':'removeAllData','value':function _0x422861(){var _0x590f87=_0x282e5b;this[_0x590f87(0xb4)]&&this['_mapVRenderer'][_0x590f87(0x6f)]();}},{'key':_0x282e5b(0x6c),'value':function _0x585ab2(){var _0x60013e=_0x282e5b,_0x51d232=mars3d__namespace[_0x60013e(0x125)][_0x60013e(0x85)](_0x60013e(0xc9),_0x60013e(0x100),this[_0x60013e(0xed)][_0x60013e(0xb8)]);_0x51d232['id']=this[_0x60013e(0xc4)][_0x60013e(0x99)]||_0x60013e(0x102)+divId++,_0x51d232[_0x60013e(0xae)][_0x60013e(0xb9)]=_0x60013e(0x90),_0x51d232[_0x60013e(0xae)]['top']=_0x60013e(0x10d),_0x51d232[_0x60013e(0xae)][_0x60013e(0x11c)]=_0x60013e(0x10d),_0x51d232['style'][_0x60013e(0xb6)]=this[_0x60013e(0x129)]?_0x60013e(0xcb):_0x60013e(0xe8),_0x51d232[_0x60013e(0xae)][_0x60013e(0x93)]=this[_0x60013e(0xc4)]['zIndex']||0x64,_0x51d232[_0x60013e(0x91)]=parseInt(this[_0x60013e(0xed)][_0x60013e(0xc9)][_0x60013e(0x91)]),_0x51d232['height']=parseInt(this[_0x60013e(0xed)][_0x60013e(0xc9)]['height']),_0x51d232[_0x60013e(0xae)]['width']=this[_0x60013e(0xed)]['canvas'][_0x60013e(0xae)]['width'],_0x51d232['style']['height']=this[_0x60013e(0xed)][_0x60013e(0xc9)][_0x60013e(0xae)][_0x60013e(0xfa)];if(this[_0x60013e(0xc4)][_0x60013e(0x9f)]==='2d'){var _0x3b75d7=this[_0x60013e(0x87)];_0x51d232['getContext'](this[_0x60013e(0xc4)]['context'])['scale'](_0x3b75d7,_0x3b75d7);}return _0x51d232;}},{'key':_0x282e5b(0xd6),'value':function _0x50656d(){var _0xb86a15=_0x282e5b;this[_0xb86a15(0xd1)](),this['render']();}},{'key':_0x282e5b(0xa1),'value':function _0x30a025(){var _0x4bf5e1=_0x282e5b;this[_0x4bf5e1(0xd6)]();}},{'key':_0x282e5b(0x10c),'value':function _0x15076c(){var _0x316858=_0x282e5b;this[_0x316858(0xb4)]&&(this[_0x316858(0xb4)]['destroy'](),this[_0x316858(0xb4)]=null),this[_0x316858(0xc9)][_0x316858(0x9a)][_0x316858(0xc7)](this[_0x316858(0xc9)]);}},{'key':_0x282e5b(0xb7),'value':function _0x470991(){var _0x5783df=_0x282e5b;this[_0x5783df(0xb4)][_0x5783df(0x8f)]();}},{'key':_0x282e5b(0xd1),'value':function _0x24d486(){var _0x489eab=_0x282e5b;if(this[_0x489eab(0xc9)]){var _0x5eb816=this['canvas'];_0x5eb816[_0x489eab(0xae)]['position']=_0x489eab(0x90),_0x5eb816[_0x489eab(0xae)][_0x489eab(0x76)]='0px',_0x5eb816[_0x489eab(0xae)][_0x489eab(0x11c)]='0px',_0x5eb816['width']=parseInt(this['_map'][_0x489eab(0xc9)][_0x489eab(0x91)]),_0x5eb816[_0x489eab(0xfa)]=parseInt(this[_0x489eab(0xed)][_0x489eab(0xc9)][_0x489eab(0xfa)]),_0x5eb816[_0x489eab(0xae)]['width']=this['_map']['canvas']['style'][_0x489eab(0x91)],_0x5eb816['style'][_0x489eab(0xfa)]=this[_0x489eab(0xed)]['canvas'][_0x489eab(0xae)]['height'];}}},{'key':_0x282e5b(0x72),'value':function _0x34a582(_0x2996dc){var _0x326e39=_0x282e5b;if(!this[_0x326e39(0x97)]||!this[_0x326e39(0x97)][_0x326e39(0x9d)])return;var _0x1b4c6d=mars3d__namespace[_0x326e39(0x75)][_0x326e39(0xf8)]({'type':'FeatureCollection','features':this[_0x326e39(0x97)][_0x326e39(0x9d)]});if(!_0x1b4c6d)return;return _0x2996dc!==null&&_0x2996dc!==void 0x0&&_0x2996dc[_0x326e39(0xab)]?_0x1b4c6d:Cesium[_0x326e39(0xc6)][_0x326e39(0xb0)](_0x1b4c6d[_0x326e39(0xc1)],_0x1b4c6d[_0x326e39(0xa8)],_0x1b4c6d['xmax'],_0x1b4c6d[_0x326e39(0x96)]);}},{'key':_0x282e5b(0x113),'value':function _0xc06d10(_0x3e249d){var _0x36866a=_0x282e5b;this[_0x36866a(0xfb)]=_0x3e249d,this[_0x36866a(0xb4)]&&this['_mapVRenderer'][_0x36866a(0xd5)](_0x3e249d[_0x36866a(0x11b)],_0x3e249d);}},{'key':_0x282e5b(0x7c),'value':function _0x29fdcc(_0x2ec741){var _0x149eeb=_0x282e5b;this[_0x149eeb(0xfb)]=_0x2ec741,this[_0x149eeb(0xb4)]&&this[_0x149eeb(0xb4)][_0x149eeb(0xeb)](_0x2ec741[_0x149eeb(0x11b)],_0x2ec741);}},{'key':'on','value':function _0x58cc17(_0x306b9f,_0x409624,_0x265362){var _0x2df3ab=_0x282e5b,_0x50a371=this;this[_0x2df3ab(0xc4)]['methods']=this[_0x2df3ab(0xc4)][_0x2df3ab(0x83)]||{};if(_0x306b9f===mars3d__namespace[_0x2df3ab(0xfc)][_0x2df3ab(0x98)])this[_0x2df3ab(0xc4)][_0x2df3ab(0x83)][_0x2df3ab(0x98)]=function(_0x119ab8){var _0x54b97e=_0x2df3ab;_0x119ab8&&_0x409624[_0x54b97e(0xa3)](_0x265362)(_objectSpread2(_objectSpread2({},_0x50a371[_0x54b97e(0xfb)]),{},{'layer':_0x50a371,'data':_0x119ab8}));},this[_0x2df3ab(0xed)]['on'](mars3d__namespace[_0x2df3ab(0xfc)][_0x2df3ab(0x98)],this['_onMapClick'],this);else _0x306b9f===mars3d__namespace[_0x2df3ab(0xfc)][_0x2df3ab(0x126)]&&(this['options'][_0x2df3ab(0x83)][_0x2df3ab(0xb2)]=function(_0x5c82f1){var _0x940c87=_0x2df3ab;_0x5c82f1&&_0x409624[_0x940c87(0xa3)](_0x265362)(_objectSpread2(_objectSpread2({},_0x50a371['_cache_event']),{},{'layer':_0x50a371,'data':_0x5c82f1}));},this[_0x2df3ab(0xed)]['on'](mars3d__namespace[_0x2df3ab(0xfc)][_0x2df3ab(0x126)],this[_0x2df3ab(0x7c)],this));return this;}},{'key':_0x282e5b(0x8b),'value':function _0x4eacf0(_0x5be103,_0x159005){var _0x2ef7c6=_0x282e5b;if(_0x5be103===_0x2ef7c6(0x98)){var _0x23bac4;this['_map'][_0x2ef7c6(0x8b)](_0x5be103,this['_onMapClick'],this),(_0x23bac4=this[_0x2ef7c6(0xc4)]['methods'])!==null&&_0x23bac4!==void 0x0&&_0x23bac4['mousemove']&&delete this[_0x2ef7c6(0xc4)][_0x2ef7c6(0x83)][_0x2ef7c6(0x98)];}else{if(_0x5be103===_0x2ef7c6(0x126)){var _0x4450c2;this['_map'][_0x2ef7c6(0x8b)](_0x5be103,this['_onMapMouseMove'],this),(_0x4450c2=this[_0x2ef7c6(0xc4)][_0x2ef7c6(0x83)])!==null&&_0x4450c2!==void 0x0&&_0x4450c2['mousemove']&&delete this[_0x2ef7c6(0xc4)]['methods'][_0x2ef7c6(0xb2)];}}return this;}}]),_0x1c0f0e;}(BaseLayer);mars3d__namespace[_0x2464f6(0x7e)][_0x2464f6(0x115)](_0x2464f6(0x102),MapVLayer),mars3d__namespace[_0x2464f6(0xda)]['MapVLayer']=MapVLayer,exports['MapVLayer']=MapVLayer,Object[_0x2464f6(0xe5)](mapv)['forEach'](function(_0x12e543){var _0x30a918=_0x2464f6;if(_0x12e543!==_0x30a918(0x12a)&&!exports[_0x30a918(0xde)](_0x12e543))Object[_0x30a918(0xfd)](exports,_0x12e543,{'enumerable':!![],'get':function(){return mapv[_0x12e543];}});}),Object['defineProperty'](exports,'__esModule',{'value':!![]});
}));
