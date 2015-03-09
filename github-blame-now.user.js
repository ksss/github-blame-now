// ==UserScript==
// @name        github-blame-now
// @namespace   https://github.com/ksss/github-blame-now
// @description add link to blame page on selected hash commit
// @include     *://github.com/*/blame/*
// @author      ksss
// @version     0.1
// ==/UserScript==

(function () {

var as = document.querySelectorAll('.blame-sha');
var filepath = location.pathname.replace(/.*\/blame\/.*?(\/.*)/, '$1')

for(var i=0; i<as.length; i++){
  var a = as[i];
  var href = a.getAttribute('href');
  if (!href) continue;
  var parent_link = href.replace("/commit/", "/blame/") + filepath
  a.setAttribute("href", parent_link);
}

})();
