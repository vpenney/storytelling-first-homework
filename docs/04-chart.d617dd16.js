parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"zcYB":[function(require,module,exports) {
!function(){var a=d3.select("#chart4").select("svg").attr("height",450).attr("width",450).append("g").attr("transform","translate(25, 25)"),t=d3.scaleLinear().domain([0,10]).range([0,400]),e=d3.scaleLinear().domain([0,10]).range([400,0]);a.selectAll("circle").data([{hotdogs:10,hamburgers:10,animal:"dog",name:"Stevie"},{hotdogs:3,hamburgers:3,animal:"cat",name:"Nicholas"},{hotdogs:2,hamburgers:2,animal:"cat",name:"Bubbletree"},{hotdogs:10,hamburgers:3,animal:"cow",name:"Particle"},{hotdogs:7,hamburgers:5,animal:"dog",name:"Jumpup"},{hotdogs:4,hamburgers:9,animal:"dog",name:"Parlay"},{hotdogs:3,hamburgers:1,animal:"cat",name:"Hio"}]).enter().append("circle").attr("r",10).attr("fill","#FFB6C1").attr("cx",function(a){return t(a.hamburgers)}).attr("cy",function(a){return e(a.hotdogs)})}();
},{}]},{},["zcYB"], null)
//# sourceMappingURL=/04-chart.d617dd16.map