"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3558],{3558:(u,s,i)=>{i.r(s),i.d(s,{HapticsWeb:()=>c});var n=i(467),o=i(7464),r=i(9182);class c extends o.E_{constructor(){super(...arguments),this.selectionStarted=!1}impact(t){var e=this;return(0,n.A)(function*(){const a=e.patternForImpact(null==t?void 0:t.style);e.vibrateWithPattern(a)})()}notification(t){var e=this;return(0,n.A)(function*(){const a=e.patternForNotification(null==t?void 0:t.type);e.vibrateWithPattern(a)})()}vibrate(t){var e=this;return(0,n.A)(function*(){e.vibrateWithPattern([(null==t?void 0:t.duration)||300])})()}selectionStart(){var t=this;return(0,n.A)(function*(){t.selectionStarted=!0})()}selectionChanged(){var t=this;return(0,n.A)(function*(){t.selectionStarted&&t.vibrateWithPattern([70])})()}selectionEnd(){var t=this;return(0,n.A)(function*(){t.selectionStarted=!1})()}patternForImpact(t=r.kn.Heavy){return t===r.kn.Medium?[43]:t===r.kn.Light?[20]:[61]}patternForNotification(t=r._n.Success){return t===r._n.Warning?[30,40,30,50,60]:t===r._n.Error?[27,45,50]:[35,65,21]}vibrateWithPattern(t){if(!navigator.vibrate)throw this.unavailable("Browser does not support the vibrate API");navigator.vibrate(t)}}}}]);