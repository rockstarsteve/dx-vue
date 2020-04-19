# dx-vue-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 目录结构
    - base 基础的html，css，js测试demo
    - components 基础的插件库测试demo ，引用在App.vue中修改 
    - nodejs 直接测试js








子组件向父组件传递方法时候：
    使用v-on或@的事件绑定才能让父组件接受到子组件的方法,使用方法传递参数


工作中常用的npm包
https://segmentfault.com/a/1190000019433559



### 工具类
    - lodash https://lodash.com/，https://www.npmjs.com/package/lodash
    - is-type-of https://www.npmjs.com/package/is-type-of
    - numeraljs: http://numeraljs.com/


#### lodash
工具库，封装了处理arrays，numbers，objects，string等常见的函数，是对标准库的补充。业务开发中常用的函数有很多，如：assign, times, debounce, get, find, filter, keyBy, cloneDeep, groupBy, omit, pick等。示例如下：

const _ = require('lodash');

const obj = {
    name: 'zhangsan',
    age: 20,
    friends: [{
        name: 'lisi',
        age: 18
    }, {
        name: 'wanger',
        age: 19
    }]
};

// 深复制，等价于JSON.parse(JSON.stringify(obj))，但是JSON.parse的形式无法复制函数
const obj2 = _.cloneDeep(obj); 
obj === obj2; // false

// 深获取属性，业务开发中可以取代if(a && a.b && a.b.c)的形式
_.get(obj, 'friends[0].age', 0); // 18

// extend properties
_.assign({}, {
    name: 'zhangsan'
}, {
    age: 20
}); // { name: 'zhangsan', age: 20 }

// remove properties
_.omit({
    name: 'zhangsan',
    age: 20
}, ['age']); // { name: 'zhangsan'}

// pick properties
_.pick({
    name: 'zhangsan',
    age: 20
}, ['age']); // { age: 20}

const arr = [{
        name: 'zhangsan',
        age: 20
    },
    {
        name: 'lisi',
        age: 19
    },
    {
        name: 'wanger',
        age: 18
    }
];

_.keyBy(arr, 'name'); // { zhangsan: { name: 'zhangsan', age: 20 }, lisi: { name: 'lisi', age: 19 }, wanger: { name: 'wanger', age: 18 } }

// debounce(消抖，停止的时候执行一次)和throttle(节流，每间隔一定时候执行一次)
_.debounce(keyword => {
    console.log(keyword);
}, 500);

// N loop
_.times(6, _.uniqueId.bind(null, 'key_')); // [ 'key_1', 'key_2', 'key_3', 'key_4', 'key_5', 'key_6' ]

// 安全的JSON.parse
function safeParse(str, defaultValue) {
    let result = _.attempt(function(str) {
        return JSON.parse(str)
    }, str)

    return _.isError(result) ? defalutValue : result
}

safeParse(JSON.stringify({
    a: 1
}), {}); // { a: 1 }
is-type-of
js类型判断库，可判断js中的类型，包括promise，generator等。示例如下：

is.array([1]) // => true
is.null(null) // => true
is.undefined(undefined) // => true
is.object({a: 1}) // => true
numeral
格式化处理数字。示例如下：

const TEN_THOUSANDS = 10000
const HUNDRED_MILLION = 100000000

numeral(345333).format('0,0’) => ‘345,333’ // 整数处理
numeral(3.45333).format('0.00’) => ‘3.45'   // 保留两位小数
numeral(0.9756).format('0.00%’) => ’97.56%’ // 百分比处理

numeral(14321235334343).divide(HUNDRED_MILLION).format('0,0.00’) => ‘143,212.35亿’ //亿处理
numeral(143212353).divide(TEN_THOUSANDS).format('￥0,0.00') => '14,321.24'万 //万处理

// 格式化数字, 大于亿的展示为亿，大于万的展示为万...
formatNum() {
    if(number > HUNDREND_MILLION) {
        return numeral(number).divide(HUNDREND_MILLION).format(‘0,0.00’) + ‘亿'
    } else if(number > TEN_THOUSANDS) {
        return numeral(number).divide(TEN_THOUSANDS).format(‘0,0.00’) + ‘万'    
    } else {
        return numeral(number).format(‘0,0.00')
    }
}
moment.js/day.js
时间处理库。示例如下：

moment().format(‘YYYY-MM-DD')
Excel处理
json文件转excel文件
excel-export库，基于node.js将数据生成excel文件，生成格式为xlsx。

// json转excel
const nodeExcel = require('excel-export');
const _ = require('lodash');
const fs = require('co-fs');
const co = require('co');
/** 
 * 使用场景:
 * 导出Excel
 * 
 * 用法:
 * params:
 *  - name: excel文件名称
 *  - path: 导出的excel路径
 * 
 * rows:
 * [
 *    {
 *      name: ''
 *      _created_at: ''
 *    },
 * .....
 * ]
 * 
 * cols:
 * [
 *   {
 *     key: 'name',
 *     text: '名称'
 *   },
 *   {
 *     key: '_created_at',
 *     text: '提交时间',
 *     filter: dateStr => {
 *        return dateStr.length === 0 ? dateStr : dateStr.split('.')[0].replace('T', ' ');
 *     }
 *   }
 * ];
 */
function wrapConf(rows, cols) {
    let conf = {};
    conf.name = 'sheet1';
    conf.cols = cols.map(item => {
        return {
            caption: item.text,
            type: item.type || 'string',
            width: item.width || 20
        };
    });

    conf.rows = rows.map((row) => {
        return cols.map((col) => {
            if (col.filter) {
                return col.filter(_.get(row, col.key), row);
            } else {
                return _.get(row, col.key);
            }
        });
    });

    return conf;
}

function* exportExcel(path, rows, cols) {
    let conf = wrapConf(rows, cols); // 配置项
    let result = nodeExcel.execute(conf); // 导出excel
    return yield fs.writeFile(path, result, 'binary'); // 写入到路径
}

module.exports = exportExcel;
excel文件转json文件
js-xlsx库，读取和解析多种格式表格的js库。

// excel转json
const fs = require('co-fs');
const co = require('co');
const XLSX = require('xlsx');
// {
//     SheetNames: ['sheet1', 'sheet2'],
//     Sheets: {
//         // worksheet
//         'sheet1': {
//             // cell
//             'A1': { ... },
//             // cell
//             'A2': { ... },
//             ...
//         },
//         // worksheet
//         'sheet2': {
//             // cell
//             'A1': { ... },
//             // cell
//             'A2': { ... },
//             ...
//         }
//     }
// }
function toJson(workbook, keys) {
    let result = {};
    let sheetNames = workbook.SheetNames;
    sheetNames.forEach(sheetName => {
        let worksheet = workbook.Sheets[sheetName];
        result[sheetName] = XLSX.utils.sheet_to_json(worksheet, {
            header: keys
        });
    });

    return result;
};
/**
 * 
 * 
 * @param {any} src: excel文件地址
 * @param {any} dest: 导出json文件地址
 * @param {any} keys: excel列名映射到json的keys 
 * @returns 
 */
function* excelToJson(src, dest, keys) {
    let data = yield fs.readFile(src)
    let json = toJson(XLSX.read(data))
    return yield fs.writeFile(dest, JSON.stringify(json, 2, 2))
}

module.exports = excelToJson;
Markdown
markdown文件转html文件，使用marked-toc(生成文件目录)，marked(markdown解析库)，hightlight(代码高亮)。

const md5 = require('md5');
const markedToc = require('marked-toc');
const marked = require('marked');
const highlight = require('highlight');
const fs = require('fs');

function generateTocName(name) {
    name = name.trim().replace(/\s+/g, '').replace(/\)/g, '').replace(/[\(\,]/g, '-').toLowerCase();
    if (/^[\w\-]+$/.test(name)) {
        return name;
    }

    return `toc-${md5(name).slice(0, 3)}`;
}

// filePath为markdown文件目录
function markdownToHtml(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    let tocContent = marked(markedToc(content)).replace(/<a\s+href="#([^\"]+)">([^<>]+)<\/a>/g, (a, b, c) => {
        return `<a href="#${generateTocName(c)}">${c}</a>`;
    });

    let markedContent = marked(content).replace(/<h(\d)[^<>]*>(.*?)<\/h\1>/g, (a, b, c) => {
        if (b == 2) {
            return `<h${b} id="${generateTocName(c)}">${c}</h${b}>`;
        }
        return `<h${b} id="${generateTocName(c)}"><a class="anchor" href="#${generateTocName(c)}"></a>${c}</h${b}>`;
    });
    markedContent = markedContent.replace(/<h(\d)[^<>]*>([^<>]+)<\/h\1>/, (a, b, c) => {
        return `${a}<div class="toc">${tocContent}</div>`;
    });

    let highlightContent = markedContent.replace(/<pre><code\s*(?:class="lang-(\w+)")?>([\s\S]+?)<\/code><\/pre>/mg, (a, language, text) => {
        text = text.replace(/&#39;/g, '\'').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/\&quot;/g, '"').replace(/\&amp;/g, "&");
        var result = highlight.highlightAuto(text, language ? [language] : undefined);
        return `<pre><code class="hljs lang-${result.language}">${result.value}</code></pre>`;
    });

    return highlightContent;
}
阅读 834发布于 2019-06-10
