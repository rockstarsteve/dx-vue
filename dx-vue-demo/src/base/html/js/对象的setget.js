
var obj = {
    name: '小明',
    age: 20,
    get(attr){
        if (this[attr]){
            return "暂无信息"
        }
        return this[attr]
    }

}

console.log(obj.get("name"))

