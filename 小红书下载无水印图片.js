// ==UserScript==
// @name         小红书下载无水印图片
// @namespace    https://github.com/ArcanusNEO/tampermonkey-script
// @version      0.1.0
// @description  小红书下载无水印图片
// @author       Lucas
// @match        https://www.xiaohongshu.com/discovery/item/*
// @icon         https://www.xiaohongshu.com/favicon.ico
// @grant        GM_download
// ==/UserScript==

(function () {
  'use strict'
  let url = unsafeWindow.location.href
  let urlV = url.split('?')
  if (urlV.length > 1)
    unsafeWindow.location.replace(urlV[0])
  let contentProto = unsafeWindow.__INITIAL_SSR_STATE__.NoteView.content
  let baseFileName = contentProto.id
  let imgV = contentProto.imageList
  let downloadV = []
  for (let i in imgV) {
    let url = 'http:' + imgV[i].url.split('?')[0]
    let file = `${baseFileName}_${i}.jpg`
    downloadV.push({ url, file })
  }
  console.log(downloadV)
})()