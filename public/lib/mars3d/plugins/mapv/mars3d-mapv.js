/**
 * Mars3D平台插件,结合mapv可视化功能插件  mars3d-mapv
 *
 * 版本信息：v3.3.9
 * 编译日期：2022-05-17 11:16:09
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-02-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';function _0x3b66(){var _0x564826=['x2nHBNzHC1vWzgf0zq','tgLUzvn0CMLUzW','z2v0','EKLUzgv4','zNvUy3rPB24','C3rLChnsyw5Nzq','DxbKyxrLq2fSBgjHy2S','zgvZDgLUyxrPB24TB3v0','yMfPzhvnyxbmyxLLCG','y29UzMLNDxjHyMXL','ChjVDg90ExbL','y2fSBa','D2LKDgG','zgf0yq','BwfW','txvSDgLqB2X5z29U','Aw5PDa','z2v0uhjVDg90ExbLt2y','zMLSDgvY','zgv2AwnLugL4zwXsyxrPBW','y2XLyxjszwn0','DhvYzG','nJq1mti2uK54CurS','y2XHBxbuB0DYB3vUza','6k+35BYv5ywLig1HChyG5BQtia','Dg9W','yw5PBwf0Aw9U','x3jLC2v0','zMLSBfn0EwXL','Bw91C2vnB3zL','zgvMyxvSDa','yw5PBwf0B3i','zgf0yvnLDa','zMLSBfjLy3q','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','y2fTzxjHtw92zvn0yxj0','y2fUDMfZtgf5zxi','CMvTB3zLq2HPBgq','A2v5CW','C2nLBMu','zgvMAw5LuhjVCgvYDhK','BgvUz3rO','yMLUza','rwXSAxbZB2LKywXpy2nSDwrLCG','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','CMvNAxn0zxi','z2v0t3DUuhjVCgvYDhLtEw1IB2XZ','Cg9ZAxrPB24','tgf5zxjvDgLS','Dw5PDa','x3nLDe9WDgLVBNniB29R','rxzLBNruExbL','AxngB3jTyxq','x2rHDge','z2vVBwv0CNK','yxbWBhK','y2XPy2TfDMvUDa','uMvJDgfUz2XL','yMjVEa','C2f2zq','yw5PBwf0B3jnB3zLC3rHCNrfDMvUDa','yxbWzw5Kq2HPBgq','C3rLCa','ntK1mtu0ogzUs1vXzW','C3r5Bgu','q2fYDgvZAwfUmW','AxnfBMfIBgvKvgLTzq','ywrKsw5UzxjdB250ywLUzxi','x3nOB3DiB29R','Bw91C2vTB3zL','C2v0','CMvUzgvY','y29UC3rYDwn0','z2v0q29UDgv4Da','z2XVyMu','zgvMAw5LuhjVCgvYDgLLCW','B3b0Aw9UCW','y29VCMrPBMf0zxm','ChjVy2vZC0rHDge','zw51BwvYywjSzq','mhb4','mtK4ota4DKD3ALrd','z2v0sgvPz2H0','BM9Uzq','x3bVAw50zxjfDMvUDhm','x21HCfzszw5KzxjLCG','BgvMDa','C2L6zq','x21VDw50zwriB29R','x29Utw92zvn0yxj0rxzLBNq','z2XVyMfSq29TCg9ZAxrLt3bLCMf0Aw9U','ug9SEwDVBG','CMvTB3zLrgf0yq','z2v0rgf0yq','DMfSDwvpzG','C2v0wKLUzgv4','Cg9ZDfjLBMrLCG','A2v5','Bwv0Ag9KCW','x21HCa','C3rHCNq','yMXVy2S','y2XPy2S','DxbKyxrL','D2LUzg93ug9ZAxrPB24','y2fTzxjH','zgvZDhjVEq','x2nYzwf0zunHBNzHCW','ywjZB2X1Dgu','ChvZAa','Aw5PDerLDMLJzvbPEgvSuMf0Aw8','Bg9Nv2fYBG','Aw5PDefUAw1HDg9Y','Cg9ZAxrPB25xqW','x19WCM90B19F','x29UtwfWtw91C2vnB3zL','CMvTB3zL','AxnqB2LUDfzPC2LIBgu','Bgf5zxi','yxv0BW','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','ywrKqw5PBwf0B3jfDMvUDa','B2jQzwn0','Bw91C2vTB3zLrxzLBNq','oe15vePqtq','zwXSAxbZB2LK','Bw9Kzq','DgLTzq','BwfWDG','ywrK','x29Utw92zuvUzev2zw50','nZK2otm4murOBeHtqW','x3nPEMu','zM9YrwfJAa','x29UtwfWq2XPy2S','ywrKrgf0yq','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9YCW','q2vZAxvT','y29UDgfPBMvY','C3rLChm','DhLWzq','x19LC01VzhvSzq','Dw5KzwzPBMvK','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','AgvPz2H0','yMLUzev2zw50','B2zM','ndKZmJu5nfHWrunrAW','x2fKzgvKsg9VAW','mJqXodi2odvYDwzjvLq','DhjHBNnMzxjdB29YzgLUyxrL','zhjHD0nVBNrLEhq','u2nLBMvnB2rL','y2XLyxjeyxrH','Aw5PDerHDgfsyw5Nzq','yw5PBwf0B3jnB3zLzw5KrxzLBNq','DMfSDwu','y2XLyxi','Cg9PBNrLCKv2zw50CW','C3rVCa','BwfWDKrLChrOvgvZDa','twfWvKXHEwvY','x2nHy2HLx2v2zw50','y2fUDMfZ','DhjHAwXZ','tg9N','x3jLBw92zwriB29R','BwfWDKf1Dg9izwLNAhq','DxbKyxrLrgf0yq','rgf0yvnLDa','zNjVBurLz3jLzxm','y29UDgv4Da','zhjHDW','y2fTzxjHtw92zuvUza','yxjNq2HLy2S','y2fYDgvZAwfUvg9dyw52yxndB29YzgLUyxrLCW','C3rVCefUAwfTyxrPB24','ntvgrgvNAuW','zgvMyxvSDfzHBhvL','y29UC3rYDwn0B3i','zML4zwrizwLNAhq','Bw91C2veB3DU','mJy0mdu4nhDirwH5uG','y3jLyxrL'];_0x3b66=function(){return _0x564826;};return _0x3b66();}var _0x282569=_0x5e5c;(function(_0x9f79fb,_0x70f06){var _0x35f0d2=_0x5e5c,_0xc1fc2e=_0x9f79fb();while(!![]){try{var _0x42e411=-parseInt(_0x35f0d2(0x20a))/0x1+-parseInt(_0x35f0d2(0x1b7))/0x2+-parseInt(_0x35f0d2(0x24c))/0x3+parseInt(_0x35f0d2(0x1f8))/0x4+parseInt(_0x35f0d2(0x1b2))/0x5*(-parseInt(_0x35f0d2(0x1cf))/0x6)+-parseInt(_0x35f0d2(0x23c))/0x7*(-parseInt(_0x35f0d2(0x235))/0x8)+parseInt(_0x35f0d2(0x24e))/0x9;if(_0x42e411===_0x70f06)break;else _0xc1fc2e['push'](_0xc1fc2e['shift']());}catch(_0x35ce3c){_0xc1fc2e['push'](_0xc1fc2e['shift']());}}}(_0x3b66,0xec226));function _interopNamespace(_0x50d9b7){var _0x5a2475=_0x5e5c;if(_0x50d9b7&&_0x50d9b7['__esModule'])return _0x50d9b7;var _0x49a3be=Object[_0x5a2475(0x1b8)](null);return _0x50d9b7&&Object['keys'](_0x50d9b7)[_0x5a2475(0x23e)](function(_0x15a8ab){var _0x1cc73e=_0x5a2475;if(_0x15a8ab!==_0x1cc73e(0x1d7)){var _0x281b1d=Object['getOwnPropertyDescriptor'](_0x50d9b7,_0x15a8ab);Object[_0x1cc73e(0x1e1)](_0x49a3be,_0x15a8ab,_0x281b1d[_0x1cc73e(0x1bb)]?_0x281b1d:{'enumerable':!![],'get':function(){return _0x50d9b7[_0x15a8ab];}});}}),_0x49a3be[_0x5a2475(0x1d7)]=_0x50d9b7,_0x49a3be;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);function ownKeys(_0xc896c0,_0x1f9e03){var _0x350933=_0x5e5c,_0x1bcf22=Object[_0x350933(0x1df)](_0xc896c0);if(Object[_0x350933(0x1e7)]){var _0x17b256=Object[_0x350933(0x1e7)](_0xc896c0);_0x1f9e03&&(_0x17b256=_0x17b256[_0x350933(0x1cb)](function(_0x469fb0){var _0x339d04=_0x350933;return Object[_0x339d04(0x1e5)](_0xc896c0,_0x469fb0)[_0x339d04(0x208)];})),_0x1bcf22['push'][_0x350933(0x1f0)](_0x1bcf22,_0x17b256);}return _0x1bcf22;}function _objectSpread2(_0x26ce8f){var _0x3bbc2b=_0x5e5c;for(var _0x40cdf1=0x1;_0x40cdf1<arguments[_0x3bbc2b(0x1e2)];_0x40cdf1++){var _0x5d5071=null!=arguments[_0x40cdf1]?arguments[_0x40cdf1]:{};_0x40cdf1%0x2?ownKeys(Object(_0x5d5071),!0x0)[_0x3bbc2b(0x23e)](function(_0x30aa96){_defineProperty(_0x26ce8f,_0x30aa96,_0x5d5071[_0x30aa96]);}):Object[_0x3bbc2b(0x241)]?Object[_0x3bbc2b(0x204)](_0x26ce8f,Object[_0x3bbc2b(0x241)](_0x5d5071)):ownKeys(Object(_0x5d5071))[_0x3bbc2b(0x23e)](function(_0x260458){var _0xe3a129=_0x3bbc2b;Object[_0xe3a129(0x1e1)](_0x26ce8f,_0x260458,Object[_0xe3a129(0x1e5)](_0x5d5071,_0x260458));});}return _0x26ce8f;}function _classCallCheck(_0x57f8b4,_0x5c1228){var _0x43b2b5=_0x5e5c;if(!(_0x57f8b4 instanceof _0x5c1228))throw new TypeError(_0x43b2b5(0x248));}function _defineProperties(_0x45ce65,_0x1a8492){var _0x177606=_0x5e5c;for(var _0x31d346=0x0;_0x31d346<_0x1a8492[_0x177606(0x1e2)];_0x31d346++){var _0x3401dc=_0x1a8492[_0x31d346];_0x3401dc[_0x177606(0x208)]=_0x3401dc[_0x177606(0x208)]||![],_0x3401dc[_0x177606(0x1c2)]=!![];if(_0x177606(0x19d)in _0x3401dc)_0x3401dc['writable']=!![];Object[_0x177606(0x1e1)](_0x45ce65,_0x3401dc[_0x177606(0x21a)],_0x3401dc);}}function _createClass(_0x2d6b0d,_0x202d2c,_0x556c01){var _0x3f2727=_0x5e5c;if(_0x202d2c)_defineProperties(_0x2d6b0d['prototype'],_0x202d2c);if(_0x556c01)_defineProperties(_0x2d6b0d,_0x556c01);return Object[_0x3f2727(0x1e1)](_0x2d6b0d,_0x3f2727(0x1c3),{'writable':![]}),_0x2d6b0d;}function _defineProperty(_0x146a5c,_0x5bcc60,_0x1f6728){var _0x12df23=_0x5e5c;return _0x5bcc60 in _0x146a5c?Object[_0x12df23(0x1e1)](_0x146a5c,_0x5bcc60,{'value':_0x1f6728,'enumerable':!![],'configurable':!![],'writable':!![]}):_0x146a5c[_0x5bcc60]=_0x1f6728,_0x146a5c;}function _inherits(_0x3d0fc8,_0x14f9b7){var _0x143d25=_0x5e5c;if(typeof _0x14f9b7!==_0x143d25(0x1bd)&&_0x14f9b7!==null)throw new TypeError(_0x143d25(0x231));_0x3d0fc8[_0x143d25(0x1c3)]=Object[_0x143d25(0x1b8)](_0x14f9b7&&_0x14f9b7['prototype'],{'constructor':{'value':_0x3d0fc8,'writable':!![],'configurable':!![]}}),Object[_0x143d25(0x1e1)](_0x3d0fc8,_0x143d25(0x1c3),{'writable':![]});if(_0x14f9b7)_setPrototypeOf(_0x3d0fc8,_0x14f9b7);}function _getPrototypeOf(_0x406c34){var _0xfc8340=_0x5e5c;return _getPrototypeOf=Object['setPrototypeOf']?Object[_0xfc8340(0x1ca)]:function _0x3e8a48(_0x2d886d){var _0x395dda=_0xfc8340;return _0x2d886d['__proto__']||Object[_0x395dda(0x1ca)](_0x2d886d);},_getPrototypeOf(_0x406c34);}function _setPrototypeOf(_0x3d26bf,_0x5d2648){return _setPrototypeOf=Object['setPrototypeOf']||function _0x543378(_0x2d623c,_0x4b038d){var _0x549f42=_0x5e5c;return _0x2d623c[_0x549f42(0x22b)]=_0x4b038d,_0x2d623c;},_setPrototypeOf(_0x3d26bf,_0x5d2648);}function _isNativeReflectConstruct(){var _0x252bab=_0x5e5c;if(typeof Reflect==='undefined'||!Reflect[_0x252bab(0x201)])return![];if(Reflect[_0x252bab(0x201)]['sham'])return![];if(typeof Proxy==='function')return!![];try{return Boolean[_0x252bab(0x1c3)][_0x252bab(0x217)][_0x252bab(0x1c4)](Reflect[_0x252bab(0x201)](Boolean,[],function(){})),!![];}catch(_0x16cc1c){return![];}}function _assertThisInitialized(_0x14f69f){if(_0x14f69f===void 0x0)throw new ReferenceError('this\x20hasn\x27t\x20been\x20initialised\x20-\x20super()\x20hasn\x27t\x20been\x20called');return _0x14f69f;}function _possibleConstructorReturn(_0x386949,_0x8ccaff){var _0xfbba72=_0x5e5c;if(_0x8ccaff&&(typeof _0x8ccaff===_0xfbba72(0x233)||typeof _0x8ccaff===_0xfbba72(0x1bd)))return _0x8ccaff;else{if(_0x8ccaff!==void 0x0)throw new TypeError(_0xfbba72(0x1db));}return _assertThisInitialized(_0x386949);}function _createSuper(_0x376bb3){var _0x17c78b=_isNativeReflectConstruct();return function _0x3804fc(){var _0x35761d=_0x5e5c,_0x474272=_getPrototypeOf(_0x376bb3),_0x264c1c;if(_0x17c78b){var _0x23eb0a=_getPrototypeOf(this)[_0x35761d(0x1b4)];_0x264c1c=Reflect[_0x35761d(0x201)](_0x474272,arguments,_0x23eb0a);}else _0x264c1c=_0x474272[_0x35761d(0x1f0)](this,arguments);return _possibleConstructorReturn(this,_0x264c1c);};}function _superPropBase(_0x2f0327,_0x1e1468){var _0x23a4ad=_0x5e5c;while(!Object[_0x23a4ad(0x1c3)]['hasOwnProperty'][_0x23a4ad(0x1c4)](_0x2f0327,_0x1e1468)){_0x2f0327=_getPrototypeOf(_0x2f0327);if(_0x2f0327===null)break;}return _0x2f0327;}function _get(){var _0x418d6c=_0x5e5c;return typeof Reflect!==_0x418d6c(0x247)&&Reflect[_0x418d6c(0x1bb)]?_get=Reflect['get']:_get=function _0x3732fd(_0x3ab4f6,_0x35a4ab,_0x3f995c){var _0x1f7700=_0x418d6c,_0x2ddba5=_superPropBase(_0x3ab4f6,_0x35a4ab);if(!_0x2ddba5)return;var _0x218309=Object['getOwnPropertyDescriptor'](_0x2ddba5,_0x35a4ab);if(_0x218309[_0x1f7700(0x1bb)])return _0x218309[_0x1f7700(0x1bb)][_0x1f7700(0x1c4)](arguments[_0x1f7700(0x1e2)]<0x3?_0x3ab4f6:_0x3f995c);return _0x218309[_0x1f7700(0x19d)];},_get['apply'](this,arguments);}var Cesium$1=mars3d__namespace['Cesium'],baiduMapLayer=mapv__namespace?mapv__namespace[_0x282569(0x1c1)]:null,BaseLayer$1=baiduMapLayer?baiduMapLayer['__proto__']:Function,MapVRenderer=function(_0xf96013){var _0x3e5f8b=_0x282569;_inherits(_0x315b38,_0xf96013);var _0x26c7b9=_createSuper(_0x315b38);function _0x315b38(_0xbb93fe,_0x2058df,_0x176994,_0x43e5e9){var _0x21d001=_0x5e5c,_0x4a1f95;_classCallCheck(this,_0x315b38),_0x4a1f95=_0x26c7b9[_0x21d001(0x1c4)](this,_0xbb93fe,_0x2058df,_0x176994);if(!BaseLayer$1)return _possibleConstructorReturn(_0x4a1f95);return _0x4a1f95[_0x21d001(0x1c7)]=_0xbb93fe,_0x4a1f95['scene']=_0xbb93fe[_0x21d001(0x1e0)],_0x4a1f95['dataSet']=_0x2058df,_0x176994=_0x176994||{},_0x4a1f95[_0x21d001(0x1c9)](_0x176994),_0x4a1f95[_0x21d001(0x1af)](_0x176994),_0x4a1f95['initDevicePixelRatio'](),_0x4a1f95[_0x21d001(0x1dd)]=_0x43e5e9,_0x4a1f95['stopAniamation']=!0x1,_0x4a1f95['animation']=_0x176994[_0x21d001(0x1d3)],_0x4a1f95;}return _createClass(_0x315b38,[{'key':_0x3e5f8b(0x227),'value':function _0x5ed3bb(){var _0x2077ba=_0x3e5f8b;this[_0x2077ba(0x1cc)]=window['devicePixelRatio']||0x1;}},{'key':_0x3e5f8b(0x232),'value':function _0x7b3a27(){}},{'key':_0x3e5f8b(0x1f5),'value':function _0x19dd94(){var _0x5cae4a=_0x3e5f8b,_0x5ccab9=this[_0x5cae4a(0x205)]['animation'];this['isEnabledTime']()&&this[_0x5cae4a(0x1d8)]&&(this[_0x5cae4a(0x244)][_0x5cae4a(0x1f7)]=_0x5ccab9[_0x5cae4a(0x1be)][_0x5cae4a(0x21d)]);}},{'key':_0x3e5f8b(0x19c),'value':function _0x44bc53(){var _0x4011cf=_0x3e5f8b;this[_0x4011cf(0x1fb)]()&&this[_0x4011cf(0x1d8)];}},{'key':_0x3e5f8b(0x202),'value':function _0x3d2c94(){var _0x5a26e3=_0x3e5f8b;return this['canvasLayer'][_0x5a26e3(0x1a4)][_0x5a26e3(0x202)](this[_0x5a26e3(0x1ac)]);}},{'key':_0x3e5f8b(0x1c9),'value':function _0xbe4b27(_0xb9128f){var _0x151f44=_0x3e5f8b;this[_0x151f44(0x205)]=_0xb9128f,this[_0x151f44(0x19b)](_0xb9128f),this['context']=this[_0x151f44(0x205)][_0x151f44(0x1ac)]||'2d',this['options'][_0x151f44(0x1bc)]&&this[_0x151f44(0x1dd)]&&this['canvasLayer'][_0x151f44(0x218)]&&this[_0x151f44(0x1dd)][_0x151f44(0x218)](this['options'][_0x151f44(0x1bc)]),this[_0x151f44(0x229)]();}},{'key':_0x3e5f8b(0x1b9),'value':function _0x2b13a9(_0x31b88a){var _0x416c0c=_0x3e5f8b,_0x1915a6=this[_0x416c0c(0x1e0)];if(this[_0x416c0c(0x1dd)]&&!this[_0x416c0c(0x1b1)]){var _0x4cbda0=this[_0x416c0c(0x205)][_0x416c0c(0x1d3)],_0x48995c=this[_0x416c0c(0x202)]();if(this[_0x416c0c(0x1fb)]()){if(void 0x0===_0x31b88a)return void this[_0x416c0c(0x19e)](_0x48995c);this[_0x416c0c(0x1ac)]==='2d'&&(_0x48995c[_0x416c0c(0x1f4)](),_0x48995c[_0x416c0c(0x213)]=_0x416c0c(0x1c0),_0x48995c[_0x416c0c(0x1d5)]='rgba(0,\x200,\x200,\x20.1)',_0x48995c[_0x416c0c(0x1da)](0x0,0x0,_0x48995c[_0x416c0c(0x1a4)][_0x416c0c(0x1c5)],_0x48995c[_0x416c0c(0x1a4)]['height']),_0x48995c['restore']());}else this[_0x416c0c(0x19e)](_0x48995c);if(this['context']==='2d')for(var _0x510db6 in this[_0x416c0c(0x205)]){_0x48995c[_0x510db6]=this[_0x416c0c(0x205)][_0x510db6];}else _0x48995c[_0x416c0c(0x19e)](_0x48995c['COLOR_BUFFER_BIT']);var _0x39eb7a={'transferCoordinate':function _0x3a57cc(_0x23387c){var _0xf0f553=_0x416c0c,_0x54c4c2=null,_0x313cde=_0x1915a6['mapvFixedHeight'];_0x1915a6[_0xf0f553(0x1a8)]&&(_0x313cde=_0x1915a6[_0xf0f553(0x203)][_0xf0f553(0x20b)](Cesium$1['Cartographic']['fromDegrees'](_0x23387c[0x0],_0x23387c[0x1])));var _0x19f481=Cesium$1[_0xf0f553(0x1fa)][_0xf0f553(0x1ab)](_0x23387c[0x0],_0x23387c[0x1],_0x313cde);if(!_0x19f481)return _0x54c4c2;var _0x69030=_0x1915a6[_0xf0f553(0x1b0)](_0x19f481);if(!_0x69030)return _0x54c4c2;if(_0x1915a6[_0xf0f553(0x1a1)]&&_0x1915a6[_0xf0f553(0x237)]===Cesium$1[_0xf0f553(0x251)]['SCENE3D']){var _0x2ece6e=new Cesium$1[(_0xf0f553(0x1e4))](_0x1915a6[_0xf0f553(0x203)][_0xf0f553(0x236)],_0x1915a6[_0xf0f553(0x222)][_0xf0f553(0x22a)]),_0x496a41=_0x2ece6e[_0xf0f553(0x22e)](_0x19f481);if(!_0x496a41)return _0x54c4c2;}return[_0x69030['x'],_0x69030['y']];}};void 0x0!==_0x31b88a&&(_0x39eb7a['filter']=function(_0x31eeb1){var _0x53e12a=_0x416c0c,_0x2d6abe=_0x4cbda0[_0x53e12a(0x1a5)]||0xa;return!!(_0x31b88a&&_0x31eeb1[_0x53e12a(0x238)]>_0x31b88a-_0x2d6abe&&_0x31eeb1['time']<_0x31b88a);});var _0x2ec791=this[_0x416c0c(0x1d9)][_0x416c0c(0x1bb)](_0x39eb7a);this[_0x416c0c(0x207)](_0x2ec791),this['options'][_0x416c0c(0x1ea)]==='m'&&this[_0x416c0c(0x205)][_0x416c0c(0x210)],this[_0x416c0c(0x205)][_0x416c0c(0x23d)]=this['options'][_0x416c0c(0x210)];var _0x183853=_0x1915a6['cartesianToCanvasCoordinates'](Cesium$1[_0x416c0c(0x1fa)]['fromDegrees'](0x0,0x0));if(!_0x183853)return;this[_0x416c0c(0x250)](_0x48995c,new mapv__namespace[(_0x416c0c(0x1aa))](_0x2ec791),this['options'],_0x183853),this[_0x416c0c(0x205)][_0x416c0c(0x1bf)]&&this['options'][_0x416c0c(0x1bf)](_0x31b88a);}}},{'key':'updateData','value':function _0x466e57(_0x443e29,_0x49b57e){var _0x238e81=_0x3e5f8b,_0x1e5cfd=_0x443e29;_0x1e5cfd&&_0x1e5cfd[_0x238e81(0x1bb)]&&(_0x1e5cfd=_0x1e5cfd[_0x238e81(0x1bb)]()),void 0x0!==_0x1e5cfd&&this[_0x238e81(0x1d9)][_0x238e81(0x1ff)](_0x1e5cfd),_get(_getPrototypeOf(_0x315b38['prototype']),_0x238e81(0x220),this)[_0x238e81(0x1c4)](this,{'options':_0x49b57e});}},{'key':_0x3e5f8b(0x240),'value':function _0x515364(_0x20f0ad,_0xdc8f56){var _0x2d4a1e=_0x3e5f8b,_0x4c681c=_0x20f0ad;_0x20f0ad&&_0x20f0ad[_0x2d4a1e(0x1bb)]&&(_0x4c681c=_0x20f0ad['get']()),this[_0x2d4a1e(0x1d9)][_0x2d4a1e(0x23a)](_0x4c681c),this[_0x2d4a1e(0x220)]({'options':_0xdc8f56});}},{'key':_0x3e5f8b(0x216),'value':function _0x5cde3a(){var _0xcc8df2=_0x3e5f8b;return this[_0xcc8df2(0x1d9)];}},{'key':_0x3e5f8b(0x215),'value':function _0x3907b1(_0x43256e){var _0x503ded=_0x3e5f8b;if(this['dataSet']){var _0x1d26be=this['dataSet'][_0x503ded(0x1bb)]({'filter':function _0x4965a8(_0x5807fe){return _0x43256e==null||typeof _0x43256e!=='function'||!_0x43256e(_0x5807fe);}});this[_0x503ded(0x1d9)][_0x503ded(0x1ff)](_0x1d26be),this[_0x503ded(0x220)]({'options':null});}}},{'key':_0x3e5f8b(0x252),'value':function _0x33d323(){var _0x5d5d20=_0x3e5f8b;this[_0x5d5d20(0x1d9)]&&this['dataSet'][_0x5d5d20(0x19e)](),this[_0x5d5d20(0x220)]({'options':null});}},{'key':_0x3e5f8b(0x1ad),'value':function _0x4590b7(){var _0x4e6b40=_0x3e5f8b;this[_0x4e6b40(0x1dd)][_0x4e6b40(0x1ad)]();}},{'key':_0x3e5f8b(0x19e),'value':function _0x5c9d46(_0x14004f){var _0x4eb0e8=_0x3e5f8b;_0x14004f&&_0x14004f[_0x4eb0e8(0x1cd)]&&_0x14004f[_0x4eb0e8(0x1cd)](0x0,0x0,_0x14004f['canvas']['width'],_0x14004f[_0x4eb0e8(0x1a4)]['height']);}},{'key':_0x3e5f8b(0x223),'value':function _0x477c59(){var _0xb4e937=_0x3e5f8b;this['clear'](this[_0xb4e937(0x202)]()),this[_0xb4e937(0x252)](),this[_0xb4e937(0x1d8)]&&this[_0xb4e937(0x1d8)][_0xb4e937(0x1a0)](),this[_0xb4e937(0x1d8)]=null,this[_0xb4e937(0x1dd)]=null;}}]),_0x315b38;}(BaseLayer$1);function _0x5e5c(_0x4b55b3,_0x21b0e8){var _0x3b6610=_0x3b66();return _0x5e5c=function(_0x5e5c93,_0x42b19b){_0x5e5c93=_0x5e5c93-0x19b;var _0x1d3a5e=_0x3b6610[_0x5e5c93];if(_0x5e5c['zWoGsl']===undefined){var _0x5d7f95=function(_0x50d9b7){var _0x49a3be='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x15a8ab='',_0x281b1d='';for(var _0xc896c0=0x0,_0x1f9e03,_0x1bcf22,_0x17b256=0x0;_0x1bcf22=_0x50d9b7['charAt'](_0x17b256++);~_0x1bcf22&&(_0x1f9e03=_0xc896c0%0x4?_0x1f9e03*0x40+_0x1bcf22:_0x1bcf22,_0xc896c0++%0x4)?_0x15a8ab+=String['fromCharCode'](0xff&_0x1f9e03>>(-0x2*_0xc896c0&0x6)):0x0){_0x1bcf22=_0x49a3be['indexOf'](_0x1bcf22);}for(var _0x469fb0=0x0,_0x26ce8f=_0x15a8ab['length'];_0x469fb0<_0x26ce8f;_0x469fb0++){_0x281b1d+='%'+('00'+_0x15a8ab['charCodeAt'](_0x469fb0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x281b1d);};_0x5e5c['bXtKWn']=_0x5d7f95,_0x4b55b3=arguments,_0x5e5c['zWoGsl']=!![];}var _0x561a6a=_0x3b6610[0x0],_0x42f2a8=_0x5e5c93+_0x561a6a,_0x507bfc=_0x4b55b3[_0x42f2a8];return!_0x507bfc?(_0x1d3a5e=_0x5e5c['bXtKWn'](_0x1d3a5e),_0x4b55b3[_0x42f2a8]=_0x1d3a5e):_0x1d3a5e=_0x507bfc,_0x1d3a5e;},_0x5e5c(_0x4b55b3,_0x21b0e8);}if(mapv__namespace!==null&&mapv__namespace!==void 0x0&&mapv__namespace[_0x282569(0x1aa)])mapv__namespace[_0x282569(0x1aa)]['prototype'][_0x282569(0x24f)]=function(_0xcd467a,_0x678146,_0x53b32e,_0x1503a8){var _0x1f9772=_0x282569;_0x1503a8=_0x1503a8||'_coordinates',_0x53b32e=_0x53b32e||_0x1f9772(0x206);for(var _0xd5f13d=0x0;_0xd5f13d<_0xcd467a['length'];_0xd5f13d++){var _0xc3f1a9=_0xcd467a[_0xd5f13d][_0x1f9772(0x1ef)],_0xb59458=_0xc3f1a9[_0x53b32e];switch(_0xc3f1a9[_0x1f9772(0x245)]){case'Point':{var _0xe5caed=_0x678146(_0xb59458);_0xe5caed?_0xc3f1a9[_0x1503a8]=_0xe5caed:_0xc3f1a9[_0x1503a8]=[-0x3e7,-0x3e7];}break;case _0x1f9772(0x1ba):{var _0x380132=[];for(var _0x293893=0x0;_0x293893<_0xb59458[_0x1f9772(0x1e2)];_0x293893++){var _0x4145d5=_0x678146(_0xb59458[_0x293893]);_0x4145d5&&_0x380132[_0x1f9772(0x226)](_0x4145d5);}_0xc3f1a9[_0x1503a8]=_0x380132;}break;case'MultiLineString':case _0x1f9772(0x214):{var _0x3386c8=_0x3f9d17(_0xb59458);_0xc3f1a9[_0x1503a8]=_0x3386c8;}break;case _0x1f9772(0x1c8):{var _0x25c071=[];for(var _0x1d6ef0=0x0;_0x1d6ef0<_0xb59458['length'];_0x1d6ef0++){var _0x1eeae4=_0x3f9d17(_0xb59458[_0x1d6ef0]);_0x1eeae4[_0x1f9772(0x1e2)]>0x0&&_0x25c071[_0x1f9772(0x226)](_0x1eeae4);}_0xc3f1a9[_0x1503a8]=_0x25c071;}break;}}function _0x3f9d17(_0x5859da){var _0x4c54bf=_0x1f9772,_0x5178bd=[];for(var _0x1328d6=0x0;_0x1328d6<_0x5859da[_0x4c54bf(0x1e2)];_0x1328d6++){var _0x36edd3=_0x5859da[_0x1328d6],_0x48572c=[];for(var _0x286ead=0x0;_0x286ead<_0x36edd3['length'];_0x286ead++){var _0x3fecff=_0x678146(_0x36edd3[_0x286ead]);_0x3fecff&&_0x48572c[_0x4c54bf(0x226)](_0x3fecff);}_0x48572c['length']>0x0&&_0x5178bd[_0x4c54bf(0x226)](_0x48572c);}return _0x5178bd;}return _0xcd467a;};else throw new Error(_0x282569(0x1d1));var Cesium=mars3d__namespace[_0x282569(0x242)],BaseLayer=mars3d__namespace[_0x282569(0x22f)]['BaseLayer'],divId=0x0,MapVLayer=function(_0x3bcddb){var _0x3d7b1e=_0x282569;_inherits(_0x5de1e0,_0x3bcddb);var _0x2250f6=_createSuper(_0x5de1e0);function _0x5de1e0(_0x20450c,_0x23bc0b){var _0x13aa66=_0x5e5c,_0x23afc8;return _classCallCheck(this,_0x5de1e0),_0x23afc8=_0x2250f6[_0x13aa66(0x1c4)](this,_0x20450c),_0x23afc8[_0x13aa66(0x20d)]=_0x23afc8[_0x13aa66(0x205)][_0x13aa66(0x19f)],_0x23afc8[_0x13aa66(0x1d9)]=_0x23bc0b||new mapv__namespace['DataSet'](_0x20450c[_0x13aa66(0x1c6)]),_0x23afc8['canvas']=null,_0x23afc8;}return _createClass(_0x5de1e0,[{'key':'pointerEvents','get':function _0xc8f7a(){var _0x5b5efa=_0x5e5c;return this[_0x5b5efa(0x20d)];},'set':function _0x16f209(_0x52c04c){var _0x4a0322=_0x5e5c;this[_0x4a0322(0x20d)]=_0x52c04c,this['canvas']&&(_0x52c04c?this['canvas']['style'][_0x4a0322(0x19f)]='all':this['canvas'][_0x4a0322(0x1f9)][_0x4a0322(0x19f)]=_0x4a0322(0x20c));}},{'key':_0x3d7b1e(0x1fd),'value':function _0x24df20(_0x3ed3fd){var _0x4d9e79=_0x3d7b1e;_0x3ed3fd?this[_0x4d9e79(0x1a4)][_0x4d9e79(0x1f9)]['display']=_0x4d9e79(0x21e):this['canvas']['style']['display']=_0x4d9e79(0x20c);}},{'key':_0x3d7b1e(0x211),'value':function _0x60fca3(){var _0x1a6b9a=_0x3d7b1e;this[_0x1a6b9a(0x21c)][_0x1a6b9a(0x1e0)][_0x1a6b9a(0x1a1)]=Cesium[_0x1a6b9a(0x1b3)](this[_0x1a6b9a(0x205)]['depthTest'],!![]),this[_0x1a6b9a(0x21c)][_0x1a6b9a(0x1e0)][_0x1a6b9a(0x1a8)]=Cesium[_0x1a6b9a(0x1b3)](this[_0x1a6b9a(0x205)][_0x1a6b9a(0x1d0)],![]),this['_map'][_0x1a6b9a(0x1e0)]['mapvFixedHeight']=Cesium[_0x1a6b9a(0x1b3)](this[_0x1a6b9a(0x205)][_0x1a6b9a(0x1b5)],0x0);}},{'key':_0x3d7b1e(0x24d),'value':function _0x47c010(){var _0x5d33a0=_0x3d7b1e;this[_0x5d33a0(0x1d9)]&&(!this[_0x5d33a0(0x1d9)][_0x5d33a0(0x1ee)]||this[_0x5d33a0(0x1d9)][_0x5d33a0(0x1ee)][_0x5d33a0(0x1e2)]===0x0)&&(this[_0x5d33a0(0x1d9)][_0x5d33a0(0x1ee)]=[]['concat'](this['dataSet']['_dataCache'])),this[_0x5d33a0(0x20e)]=new MapVRenderer(this['_map'],this[_0x5d33a0(0x1d9)],this[_0x5d33a0(0x205)],this),this['initDevicePixelRatio'](),this[_0x5d33a0(0x1a4)]=this[_0x5d33a0(0x224)](),this[_0x5d33a0(0x200)]=this[_0x5d33a0(0x200)]['bind'](this),this[_0x5d33a0(0x243)]=this[_0x5d33a0(0x21c)][_0x5d33a0(0x243)],this[_0x5d33a0(0x1fc)](),this[_0x5d33a0(0x24a)](),this[_0x5d33a0(0x1d4)]();}},{'key':_0x3d7b1e(0x1a7),'value':function _0x514a2c(){var _0x38dabd=_0x3d7b1e;this['unbindEvent'](),this[_0x38dabd(0x20e)]&&(this[_0x38dabd(0x20e)][_0x38dabd(0x223)](),this[_0x38dabd(0x20e)]=null),this[_0x38dabd(0x1a4)]['parentElement']['removeChild'](this[_0x38dabd(0x1a4)]);}},{'key':_0x3d7b1e(0x227),'value':function _0x4128ff(){var _0x3a9fce=_0x3d7b1e;this[_0x3a9fce(0x1cc)]=window[_0x3a9fce(0x1cc)]||0x1;}},{'key':'addInnerContainer','value':function _0x18455c(){var _0x211fb0=_0x3d7b1e;this[_0x211fb0(0x243)][_0x211fb0(0x1f6)](this[_0x211fb0(0x1a4)]);}},{'key':_0x3d7b1e(0x24a),'value':function _0x425af9(){var _0x11412c=_0x3d7b1e,_0x36efda,_0x54b910,_0x36fb5e,_0x210630;this[_0x11412c(0x21c)]['on'](mars3d__namespace['EventType'][_0x11412c(0x1b6)],this[_0x11412c(0x212)],this),this[_0x11412c(0x21c)]['on'](mars3d__namespace[_0x11412c(0x1ec)][_0x11412c(0x1dc)],this['_onMoveStartEvent'],this),this['_map']['on'](mars3d__namespace[_0x11412c(0x1ec)][_0x11412c(0x1ae)],this[_0x11412c(0x23b)],this),(_0x36efda=this[_0x11412c(0x205)])!==null&&_0x36efda!==void 0x0&&(_0x54b910=_0x36efda['methods'])!==null&&_0x54b910!==void 0x0&&_0x54b910[_0x11412c(0x21f)]&&this[_0x11412c(0x21c)]['on'](mars3d__namespace[_0x11412c(0x1ec)]['click'],this[_0x11412c(0x23f)],this),(_0x36fb5e=this[_0x11412c(0x205)])!==null&&_0x36fb5e!==void 0x0&&(_0x210630=_0x36fb5e[_0x11412c(0x21b)])!==null&&_0x210630!==void 0x0&&_0x210630[_0x11412c(0x1fe)]&&this[_0x11412c(0x21c)]['on'](mars3d__namespace[_0x11412c(0x1ec)][_0x11412c(0x1d6)],this[_0x11412c(0x22c)],this);}},{'key':'unbindEvent','value':function _0x1b0d3b(){var _0x4484a6=_0x3d7b1e,_0x143acb,_0x3b0e09,_0x3c88eb,_0x180de8;this[_0x4484a6(0x21c)]['off'](mars3d__namespace[_0x4484a6(0x1ec)]['mouseDown'],this[_0x4484a6(0x212)],this),this[_0x4484a6(0x21c)][_0x4484a6(0x24b)](mars3d__namespace[_0x4484a6(0x1ec)][_0x4484a6(0x1dc)],this[_0x4484a6(0x212)],this),this[_0x4484a6(0x21c)][_0x4484a6(0x24b)](mars3d__namespace['EventType'][_0x4484a6(0x1ae)],this[_0x4484a6(0x23b)],this),this['_map'][_0x4484a6(0x24b)](mars3d__namespace[_0x4484a6(0x1ec)][_0x4484a6(0x219)],this[_0x4484a6(0x1d4)],this),(_0x143acb=this[_0x4484a6(0x205)])!==null&&_0x143acb!==void 0x0&&(_0x3b0e09=_0x143acb[_0x4484a6(0x21b)])!==null&&_0x3b0e09!==void 0x0&&_0x3b0e09[_0x4484a6(0x21f)]&&this[_0x4484a6(0x21c)][_0x4484a6(0x24b)](mars3d__namespace[_0x4484a6(0x1ec)][_0x4484a6(0x21f)],this[_0x4484a6(0x23f)],this),(_0x3c88eb=this[_0x4484a6(0x205)])!==null&&_0x3c88eb!==void 0x0&&(_0x180de8=_0x3c88eb[_0x4484a6(0x21b)])!==null&&_0x180de8!==void 0x0&&_0x180de8['mousemove']&&this[_0x4484a6(0x21c)][_0x4484a6(0x24b)](mars3d__namespace[_0x4484a6(0x1ec)][_0x4484a6(0x1d6)],this[_0x4484a6(0x22c)],this);}},{'key':_0x3d7b1e(0x212),'value':function _0x1066e8(){var _0x57137f=_0x3d7b1e;this[_0x57137f(0x20e)]&&(this[_0x57137f(0x20e)][_0x57137f(0x1f5)](),this[_0x57137f(0x21c)][_0x57137f(0x24b)](mars3d__namespace[_0x57137f(0x1ec)][_0x57137f(0x219)],this['_reset'],this),this['_map']['on'](mars3d__namespace[_0x57137f(0x1ec)]['postRender'],this['_reset'],this));}},{'key':_0x3d7b1e(0x23b),'value':function _0x37631f(){var _0x3c5558=_0x3d7b1e;this['_mapVRenderer']&&(this['_map'][_0x3c5558(0x24b)](mars3d__namespace['EventType'][_0x3c5558(0x219)],this[_0x3c5558(0x1d4)],this),this[_0x3c5558(0x20e)][_0x3c5558(0x19c)](),this[_0x3c5558(0x1d4)]());}},{'key':_0x3d7b1e(0x1eb),'value':function _0x12fa08(_0x4e911b){var _0x4e96ae=_0x3d7b1e;this[_0x4e96ae(0x1a7)](),this['_addedHook']();}},{'key':_0x3d7b1e(0x240),'value':function _0x282420(_0x39ca4e){var _0x4db12b=_0x3d7b1e;this[_0x4db12b(0x20e)]&&this[_0x4db12b(0x20e)][_0x4db12b(0x240)](_0x39ca4e,this[_0x4db12b(0x205)]);}},{'key':_0x3d7b1e(0x1a9),'value':function _0x32ca20(_0x284fc2){var _0x194884=_0x3d7b1e;this[_0x194884(0x20e)]&&this[_0x194884(0x20e)]['updateData'](_0x284fc2,this[_0x194884(0x205)]);}},{'key':_0x3d7b1e(0x216),'value':function _0x157bc9(){var _0x195d1c=_0x3d7b1e;return this['_mapVRenderer']&&(this['dataSet']=this[_0x195d1c(0x20e)][_0x195d1c(0x216)]()),this['dataSet'];}},{'key':_0x3d7b1e(0x215),'value':function _0x2201a4(_0x57a26b){var _0x1d3844=_0x3d7b1e;this[_0x1d3844(0x20e)]&&this[_0x1d3844(0x20e)][_0x1d3844(0x215)](_0x57a26b);}},{'key':'removeAllData','value':function _0x1ff44b(){var _0x2d6ed5=_0x3d7b1e;this[_0x2d6ed5(0x20e)]&&this[_0x2d6ed5(0x20e)][_0x2d6ed5(0x252)]();}},{'key':_0x3d7b1e(0x224),'value':function _0x2fd7f5(){var _0x5d5ce2=_0x3d7b1e,_0x32ec7c=document['createElement']('canvas');_0x32ec7c['id']=this['options']['layerid']||_0x5d5ce2(0x239)+divId++,_0x32ec7c[_0x5d5ce2(0x1f9)][_0x5d5ce2(0x1e8)]=_0x5d5ce2(0x225),_0x32ec7c['style'][_0x5d5ce2(0x1d2)]=_0x5d5ce2(0x209),_0x32ec7c[_0x5d5ce2(0x1f9)][_0x5d5ce2(0x20f)]=_0x5d5ce2(0x209),_0x32ec7c[_0x5d5ce2(0x1f9)][_0x5d5ce2(0x19f)]=this[_0x5d5ce2(0x20d)]?_0x5d5ce2(0x230):_0x5d5ce2(0x20c),_0x32ec7c['style'][_0x5d5ce2(0x1bc)]=this[_0x5d5ce2(0x205)][_0x5d5ce2(0x1bc)]||0x64,_0x32ec7c[_0x5d5ce2(0x1c5)]=parseInt(this['_map'][_0x5d5ce2(0x1a4)]['width']),_0x32ec7c[_0x5d5ce2(0x249)]=parseInt(this[_0x5d5ce2(0x21c)]['canvas']['height']),_0x32ec7c[_0x5d5ce2(0x1f9)]['width']=this[_0x5d5ce2(0x21c)]['canvas']['style']['width'],_0x32ec7c[_0x5d5ce2(0x1f9)][_0x5d5ce2(0x249)]=this[_0x5d5ce2(0x21c)][_0x5d5ce2(0x1a4)]['style'][_0x5d5ce2(0x249)];if(this['options'][_0x5d5ce2(0x1ac)]==='2d'){var _0x56770c=this['devicePixelRatio'];_0x32ec7c[_0x5d5ce2(0x202)](this[_0x5d5ce2(0x205)][_0x5d5ce2(0x1ac)])['scale'](_0x56770c,_0x56770c);}return _0x32ec7c;}},{'key':_0x3d7b1e(0x1d4),'value':function _0x1a2782(){var _0x50c3ef=_0x3d7b1e;this['resize'](),this[_0x50c3ef(0x200)]();}},{'key':_0x3d7b1e(0x1ad),'value':function _0x8c653(){var _0x2030d8=_0x3d7b1e;this[_0x2030d8(0x1d4)]();}},{'key':_0x3d7b1e(0x22d),'value':function _0x14c3d5(){var _0x23e325=_0x3d7b1e;this[_0x23e325(0x20e)]&&(this[_0x23e325(0x20e)][_0x23e325(0x223)](),this[_0x23e325(0x20e)]=null),this[_0x23e325(0x1a4)]['parentElement'][_0x23e325(0x1de)](this[_0x23e325(0x1a4)]);}},{'key':'render','value':function _0x2f2d0c(){var _0x35b9d0=_0x3d7b1e;this[_0x35b9d0(0x20e)][_0x35b9d0(0x1b9)]();}},{'key':'resize','value':function _0x17a6b4(){var _0x535609=_0x3d7b1e;if(this[_0x535609(0x1a4)]){var _0x4d5cbd=this[_0x535609(0x1a4)];_0x4d5cbd[_0x535609(0x1f9)][_0x535609(0x1e8)]='absolute',_0x4d5cbd[_0x535609(0x1f9)]['top']=_0x535609(0x209),_0x4d5cbd['style']['left']=_0x535609(0x209),_0x4d5cbd[_0x535609(0x1c5)]=parseInt(this[_0x535609(0x21c)][_0x535609(0x1a4)][_0x535609(0x1c5)]),_0x4d5cbd[_0x535609(0x249)]=parseInt(this[_0x535609(0x21c)][_0x535609(0x1a4)][_0x535609(0x249)]),_0x4d5cbd['style'][_0x535609(0x1c5)]=this['_map']['canvas']['style'][_0x535609(0x1c5)],_0x4d5cbd['style'][_0x535609(0x249)]=this[_0x535609(0x21c)][_0x535609(0x1a4)][_0x535609(0x1f9)][_0x535609(0x249)];}}},{'key':'getRectangle','value':function _0xc725f5(_0x2f078e){var _0x81d3cb=_0x3d7b1e;if(!window[_0x81d3cb(0x1ce)]){mars3d__namespace[_0x81d3cb(0x1a6)][_0x81d3cb(0x228)]('需要引入turf库才能计算geojson的bbox边界！');return;}if(!this[_0x81d3cb(0x1d9)]||!this[_0x81d3cb(0x1d9)][_0x81d3cb(0x1ee)])return;var _0x2e9780=window['turf'][_0x81d3cb(0x1f3)](window[_0x81d3cb(0x1ce)]['featureCollection'](this['dataSet']['_data']));if(!_0x2e9780)return;return _0x2f078e!==null&&_0x2f078e!==void 0x0&&_0x2f078e[_0x81d3cb(0x1ed)]?{'xmin':_0x2e9780[0x0],'xmax':_0x2e9780[0x1],'ymin':_0x2e9780[0x2],'ymax':_0x2e9780[0x3]}:Cesium[_0x81d3cb(0x1f2)]['fromDegrees'](_0x2e9780[0x0],_0x2e9780[0x1],_0x2e9780[0x2],_0x2e9780[0x3]);}},{'key':_0x3d7b1e(0x23f),'value':function _0xa34bde(_0x378729){var _0x5392fc=_0x3d7b1e;this['_cache_event']=_0x378729,this[_0x5392fc(0x20e)]&&this[_0x5392fc(0x20e)][_0x5392fc(0x1f1)](_0x378729[_0x5392fc(0x221)],_0x378729);}},{'key':_0x3d7b1e(0x22c),'value':function _0x3aa10d(_0x2011e7){var _0x580db0=_0x3d7b1e;this[_0x580db0(0x1a3)]=_0x2011e7,this[_0x580db0(0x20e)]&&this[_0x580db0(0x20e)][_0x580db0(0x234)](_0x2011e7[_0x580db0(0x221)],_0x2011e7);}},{'key':'on','value':function _0x362901(_0x4d65b3,_0x36cf80,_0x355f5e){var _0x3f4989=_0x3d7b1e,_0x538c70=this;this['options'][_0x3f4989(0x21b)]=this[_0x3f4989(0x205)][_0x3f4989(0x21b)]||{};if(_0x4d65b3===mars3d__namespace[_0x3f4989(0x1ec)]['click'])this[_0x3f4989(0x205)][_0x3f4989(0x21b)][_0x3f4989(0x21f)]=function(_0x11e1f0){var _0x7d38aa=_0x3f4989;_0x11e1f0&&_0x36cf80[_0x7d38aa(0x1e3)](_0x355f5e)(_objectSpread2(_objectSpread2({},_0x538c70[_0x7d38aa(0x1a3)]),{},{'layer':_0x538c70,'data':_0x11e1f0}));},this[_0x3f4989(0x21c)]['on'](mars3d__namespace[_0x3f4989(0x1ec)][_0x3f4989(0x21f)],this[_0x3f4989(0x23f)],this);else _0x4d65b3===mars3d__namespace[_0x3f4989(0x1ec)][_0x3f4989(0x1d6)]&&(this[_0x3f4989(0x205)]['methods'][_0x3f4989(0x1fe)]=function(_0x2b2c01){var _0x5d0be4=_0x3f4989;_0x2b2c01&&_0x36cf80['bind'](_0x355f5e)(_objectSpread2(_objectSpread2({},_0x538c70[_0x5d0be4(0x1a3)]),{},{'layer':_0x538c70,'data':_0x2b2c01}));},this[_0x3f4989(0x21c)]['on'](mars3d__namespace['EventType'][_0x3f4989(0x1d6)],this[_0x3f4989(0x22c)],this));return this;}},{'key':_0x3d7b1e(0x24b),'value':function _0x4defba(_0xb9eff,_0x4e7fae){var _0x3345b5=_0x3d7b1e;if(_0xb9eff===_0x3345b5(0x21f)){var _0x5cf49c;this['_map'][_0x3345b5(0x24b)](_0xb9eff,this[_0x3345b5(0x23f)],this),(_0x5cf49c=this['options'][_0x3345b5(0x21b)])!==null&&_0x5cf49c!==void 0x0&&_0x5cf49c[_0x3345b5(0x1fe)]&&delete this[_0x3345b5(0x205)][_0x3345b5(0x21b)][_0x3345b5(0x21f)];}else{if(_0xb9eff===_0x3345b5(0x1d6)){var _0x5032d5;this[_0x3345b5(0x21c)][_0x3345b5(0x24b)](_0xb9eff,this[_0x3345b5(0x22c)],this),(_0x5032d5=this['options'][_0x3345b5(0x21b)])!==null&&_0x5032d5!==void 0x0&&_0x5032d5[_0x3345b5(0x1fe)]&&delete this['options'][_0x3345b5(0x21b)]['mousemove'];}}return this;}}]),_0x5de1e0;}(BaseLayer);mars3d__namespace[_0x282569(0x1e9)][_0x282569(0x1e6)](_0x282569(0x239),MapVLayer),mars3d__namespace['layer'][_0x282569(0x1a2)]=MapVLayer,exports['MapVLayer']=MapVLayer,Object[_0x282569(0x1df)](mapv)[_0x282569(0x23e)](function(_0x59731f){var _0x2f7109=_0x282569;if(_0x59731f!==_0x2f7109(0x1d7)&&!exports['hasOwnProperty'](_0x59731f))Object[_0x2f7109(0x1e1)](exports,_0x59731f,{'enumerable':!![],'get':function(){return mapv[_0x59731f];}});}),Object[_0x282569(0x1e1)](exports,_0x282569(0x246),{'value':!![]});
}));
