const state = {
  type: [{
    date: '2016-05-02',
    name: '俺是耕田滴',
    address: '上海市普陀区金沙江路 1518 弄',
    login: '2020-11-26 16:09:28',
    charge: ['王大帅', '赵天才'],
    tag: '家'
  }, {
    date: '2016-05-04',
    name: '我是打工人',
    address: '上海市普陀区金沙江路 1517 弄',
    login: '2020-11-24 17:04:28',
    charge: ['王大帅', '赵天才'],
    tag: '公司'
  }, {
    date: '2016-05-01',
    name: '我坐办公室',
    address: '上海市普陀区金沙江路 1519 弄',
    login: '2020-11-20 14:48:39',
    charge: ['王大帅', '赵天才'],
    tag: '家'
  }, {
    date: '2016-05-03',
    name: '我躺床上',
    address: '上海市普陀区金沙江路 1516 弄',
    login: '2020-11-20 14:48:39',
    charge: ['王大帅', '赵天才'],
    tag: '公司'
  }, {
    date: '2016-05-03',
    name: '我环游世界',
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
  }]
}

const mutations = {
  setType(state, type) {
    state.type = type
  },
  setCharge(state, payload) {
    state.type[payload.index].charge = payload.charge
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
