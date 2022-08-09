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
  const download = (downloadList) => {
    let headers = { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Snapchat/10.77.5.59 (like Safari/604.1)' }
    for (let ir of downloadList)
      setImmediate(() => GM_download(ir.url, ir.file, headers))
  }
  download(downloadV)
})()