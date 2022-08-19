// ==UserScript==
// @name         百度网盘自动回到旧版
// @namespace    https://github.com/ArcanusNEO/tampermonkey-script
// @version      0.1.0
// @description  百度网盘自动回到旧版
// @author       Lucas
// @match        https://pan.baidu.com/disk/main*
// @icon         https://www.baidu.com/favicon.ico
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  let url = unsafeWindow.location.href
  let urlV = url.split('main')
  if (urlV.length <= 1) return
  let newUrl = urlV[0]
  newUrl += 'home?stayAtHome=true#/all'
  let pathMatch = urlV[1].match('path=.*')
  if (pathMatch) newUrl += '?' + pathMatch[0]
  unsafeWindow.location.replace(newUrl)
  // Your code here...
})();