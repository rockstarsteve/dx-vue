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
console.log(obj === obj2)

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

// 安全的JSON.parse    attempt函数
function safeParse(str, defaultValue) {
  let result = _.attempt(function (str) {
    return JSON.parse(str)
  }, str)
  return _.isError(result) ? defaultValue : result
}

safeParse("{'a':1}", {}); // { a: 1 }


console.log(
    safeParse('{"a:1}', {}) // {  }//少了一个双引号
)
