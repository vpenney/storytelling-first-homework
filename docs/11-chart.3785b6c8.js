parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"pu/k":[function(require,module,exports) {
!function(){var a=40,t=40,r=40,e=40,n=400-e-t,c=400-a-r,i=d3.select("#chart11").append("svg").attr("width",n+e+t).attr("height",c+a+r).append("g").attr("transform","translate("+e+","+a+")"),s=d3.scaleLinear().domain([0,10]).range([0,n]),l=d3.scalePoint().domain(["","cat","cow","dog"," "]).range([c,0]);d3.csv("eating-data.csv").then(function(a){i.selectAll("circle").data(a).enter().append("circle").attr("r",7).attr("fill","#FFB6C1").attr("cx",function(a){return s(a.hamburgers)}).attr("cy",function(a){return l(a.animal)});var t=d3.axisLeft(l);i.append("g").attr("class","axis y-axis").call(t),d3.select(".y-axis .domain").remove();var r=d3.axisBottom(s).ticks(7);i.append("g").attr("class","axis x-axis").attr("transform","translate(0,"+c+")").call(r)}).catch(function(a){console.log("Failed with",a)})}();
},{}]},{},["pu/k"], null)
//# sourceMappingURL=storytelling-first-homework/11-chart.3785b6c8.map