let list = [
  {
    id: '1',
    flag: true,
    childs: [
      {
        id: '2',
        flag: true,
        childs: []
      },
      {
        id: '3',
        flag: false,
        childs: []
      }
    ]
  },
  {
    id: '20',
    flag: false,
    childs: []
  },
  {
    id: '30',
    flag: true,
    childs: [{
      id: '3',
      flag: false,
      childs: []
    }]
  },
  {
    id: '40',
    flag: false,
    childs: []
  },
  {
    id: '50',
    flag: true,
    childs: [{
      id: '51',
      flag: true,
      childs: [
        {
          id: '511',
          flag: true,
          childs: []
        }, {
          id: '512',
          flag: false,
          childs: []
        }
      ]
    }]
  },
]


function remove(list) {

  for (let i = 0; i < list.length; i++) {
    let childs = list[i].childs
    // 删除
    if (!list[i].flag) {
      list.splice(i, 1)
      i--
    }
    if (childs != null) {
      remove(childs)
    }
  }
}

remove(list)

console.log(list)
