const cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context('./components/', true, /\.vue$/));
// 在构建时(build-time)，所有被 require 的模块都会被填充到 cache 对象中。

console.log(cache)
