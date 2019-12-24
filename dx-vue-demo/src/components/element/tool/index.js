/**
 * 打印
 * @param obj
 */
let writeObj = function writeObj(obj) {
    var description = "";
    for (var i in obj) {
        var property = obj[i];
        description += i + " = " + property + "\n";
    }
    console.log("你要打印的object对象是：" + description);
}


const tool = {writeObj}


export default tool
