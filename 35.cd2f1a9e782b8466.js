"use strict";(self.webpackChunk_7house=self.webpackChunk_7house||[]).push([[35],{35:(c,r,i)=>{i.r(r);var g=i(3942),a=i(4859),t=i(1122);class o{constructor(e,n){this.app=e,this._delegate=n}get defaultConfig(){return this._delegate.defaultConfig}set defaultConfig(e){this._delegate.defaultConfig=e}get fetchTimeMillis(){return this._delegate.fetchTimeMillis}get lastFetchStatus(){return this._delegate.lastFetchStatus}get settings(){return this._delegate.settings}set settings(e){this._delegate.settings=e}activate(){return(0,t.QZ)(this._delegate)}ensureInitialized(){return(0,t.wX)(this._delegate)}fetch(){return(0,t.Q2)(this._delegate)}fetchAndActivate(){return(0,t.xS)(this._delegate)}getAll(){return(0,t.go)(this._delegate)}getBoolean(e){return(0,t.Pf)(this._delegate,e)}getNumber(e){return(0,t.Dx)(this._delegate,e)}getString(e){return(0,t.KF)(this._delegate,e)}getValue(e){return(0,t.NA)(this._delegate,e)}setLogLevel(e){(0,t.Ub)(this._delegate,e)}}function h(s,{instanceIdentifier:e}){const n=s.getProvider("app-compat").getImmediate(),m=s.getProvider("remote-config").getImmediate({identifier:e});return new o(n,m)}!function u(s){s.INTERNAL.registerComponent(new a.wA("remoteConfig-compat",h,"PUBLIC").setMultipleInstances(!0).setServiceProps({isSupported:t.Gb})),s.registerVersion("@firebase/remote-config-compat","0.2.4")}(g.Z)}}]);