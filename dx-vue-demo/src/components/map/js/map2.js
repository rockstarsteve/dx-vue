export function map() {
  /* eslint-disable */
  return new Promise(function(resolve, reject) {
    if (typeof (BMap) !== 'undefined') return resolve(BMap)
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `http://api.map.baidu.com/api?v=2.0&ak=O2EGjeM3kB7hjTu0AMg0OFMkQHzF7w6B&callback=init`
    script.onerror = reject
    document.head.appendChild(script)
    const timer = setInterval(() => {
      if (window.BMap) {
        resolve(BMap)
        clearInterval(timer)
      }
    }, 500)
  })
}
