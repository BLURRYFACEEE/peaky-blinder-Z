import request from '@/utils/request233'
export function getChild(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}
export function forRealUserTable() {
  return request({
    url: '/getData/userTable',
    methods: 'get'
  })
}
export function insertUserTable(data) {
  return request({
    url: '/getData/userTable/insert',
    methods: 'post',
    data
  })
}
export function tableJoke() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve([{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        login: '2020-11-26 16:09:28',
        charge: ['王大帅', '赵天才'],
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        login: '2020-11-24 17:04:28',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '家'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }])
    }, 1000)
  //   reject('hahahha')
  })
}
export function workPage() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve([{
        id: 'i-bp14yxn8vhv3f22kgb0p',
        name: '王小虎',
        rule: '我是王小虎我超虎的',
        alarmType: '红灯呼呼呼',
        alarmTime: ['20210105', '20210306'],
        workPageState: '正常',
        dealState: '正常',
        resourceKind: 'ECS资源',
        belongSystem: '业务系统1'
      },
      {
        id: 'i-bp14yxn8vhv3f22kgb0p233',
        name: '王小虎',
        rule: '我是王小虎我超虎的',
        alarmType: '红灯呼呼呼',
        alarmTime: ['20210105', '20210306'],
        workpageState: '正常',
        dealState: '正常',
        resourceKind: 'ECS资源',
        belongSystem: '业务系统1'
      },
      {
        id: 'i-bp14yxn8vhv3f22kgb0p666',
        name: '王小虎',
        rule: '我是王小虎我超虎的',
        alarmType: '红灯呼呼呼',
        alarmTime: ['20210105', '20210306'],
        workpageState: '正常',
        dealState: '正常',
        resourceKind: 'ECS资源',
        belongSystem: '业务系统1'
      },
      {
        id: 'i-bp14yxn8vhv3f22kgb0p666',
        name: '王小虎',
        rule: '我是王小虎我超虎的',
        alarmType: '红灯呼呼呼',
        alarmTime: ['20210105', '20210306'],
        workpageState: '正常',
        dealState: '正常',
        resourceKind: 'ECS资源',
        belongSystem: '业务系统1'
      },
      {
        id: 'i-bp14yxn8vhv3f22kgb0p666',
        name: '王小虎',
        rule: '我是王小虎我超虎的',
        alarmType: '红灯呼呼呼',
        alarmTime: ['20210105', '20210306'],
        workpageState: '正常',
        dealState: '正常',
        resourceKind: 'ECS资源',
        belongSystem: '业务系统1'
      },
      {
        id: 'i-bp14yxn8vhv3f22kgb0p666',
        name: '王小虎',
        rule: '我是王小虎我超虎的',
        alarmType: '红灯呼呼呼',
        alarmTime: ['20210105', '20210306'],
        workpageState: '正常',
        dealState: '正常',
        resourceKind: 'ECS资源',
        belongSystem: '业务系统1'
      },
      {
        id: 'i-bp14yxn8vhv3f22kgb0p666',
        name: '王小虎',
        rule: '我是王小虎我超虎的',
        alarmType: '红灯呼呼呼',
        alarmTime: ['20210105', '20210306'],
        workpageState: '正常',
        dealState: '正常',
        resourceKind: 'ECS资源',
        belongSystem: '业务系统1'
      },
      {
        id: 'i-bp14yxn8vhv3f22kgb0p666',
        name: '王小虎',
        rule: '我是王小虎我超虎的',
        alarmType: '红灯呼呼呼',
        alarmTime: ['20210105', '20210306'],
        workpageState: '正常',
        dealState: '正常',
        resourceKind: 'ECS资源',
        belongSystem: '业务系统1'
      }
      ])
    }, 1000)
    //   reject('hahahha')
  })
}
