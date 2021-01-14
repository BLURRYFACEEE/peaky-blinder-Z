<template>
  <div class="userTableHold">
    <div class="cloth">
      <div class="table">
        <z-table ref="zTable" :table-func="tableFunc" :table-insert="tableInsert" :table-filters="filterThings">
          <template v-slot:tableCol>
            <el-table-column
              prop="check"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="date"
              label="登录账号"
              sortable
              width="180"
              column-key="date"
              :filters="[perfectFilter]"
              :filter-method="filterHandler"
            />
            <el-table-column
              prop="name"
              label="真实姓名"
              width="180"
            />
            <el-table-column
              prop="address"
              label="联系方式"
              :formatter="formatter"
            />
            <el-table-column
              prop="login"
              label="登录时间"
            />
            <el-table-column
              prop="charge"
              label="负责人"
            >
              <template slot-scope="scope">
                <el-tag v-for="(item,index) in scope.row.charge" :key="index">{{ item }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="tag"
              label="状态"
              width="100"
              :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
              :filter-method="filterTag"
              filter-placement="bottom-end"
            >
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.tag === '家' ? 'primary' : 'success'"
                  disable-transitions
                >{{ scope.row.tag }}</el-tag>
              </template>
            </el-table-column>

            <el-table-column
              fixed="right"
              label="操233作"
              width="120"
            >
              <template slot-scope="scope">

                <el-button type="text" size="small" @click="handleClickCharge(scope.row)">编辑负责人</el-button>
                <el-dialog title="收获哈哈" :visible.sync="dialogFormVisible3" append-to-body>
                  <el-form :model="rowThing">
                    <el-form-item label="系统名称" :label-width="formLabelWidth">
                      <el-input v-model="rowThingCharge.name" autocomplete="off" />
                    </el-form-item>
                    <el-select v-model="value1" multiple placeholder="请选择">
                      <el-option
                        v-for="(item,index) in scope.row.charge"
                        :key="index"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
                    <el-button type="primary" @click="newPushCharge(scope.row.charge)">确 定</el-button>
                  </div>
                </el-dialog>
                <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
                <el-dialog title="收获哈哈" :visible.sync="dialogFormVisible2" append-to-body>
                  <el-form :model="rowThing">
                    <el-form-item label="登录账号" :label-width="formLabelWidth">
                      <el-input v-model="rowThing.date" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="真实姓名" :label-width="formLabelWidth">
                      <el-input v-model="rowThing.name" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="联系方式" :label-width="formLabelWidth">
                      <el-input v-model="rowThing.address" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="最近登录时间" :label-width="formLabelWidth">
                      <el-input v-model="rowThing.login" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth">
                      <el-input v-model="rowThing.tag" autocomplete="off" />
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                    <el-button type="primary" @click="newPush">确 定</el-button>
                  </div>
                </el-dialog>
                <el-button
                  type="text"
                  size="small"
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                >
                  移除
                </el-button>
              </template>
            </el-table-column>
          </template>
        </z-table>
      </div>
    </div>
  </div>
</template>

<script>
// import shockDialog from '../../../../../components/mr_z/shockDialog/index'
// import search from '../../../../../components/mr_z/search/index'
import zTable from '@/components/mr_z/table/index'

import { tableJoke } from '@/api/god/god'
// import { forRealUserTable } from '@/api/god/god'
import { insertUserTable } from '@/api/god/god'

export default {
  name: 'Index',
  components: {
    // shockDialog,
    // search,
    zTable
  },
  data() {
    return {
      filterThings: [
        { type: 'date', input: '', name: '日期' },
        { type: 'name', input: '', name: '名字' },
        { type: 'address', input: '', name: '地址' },
        { type: 'tag', input: '', name: '标签' }
      ],
      perfectFilter: [{
      }],
      tableData: [{
        check: true,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        login: '2020-11-26 16:09:28',
        charge: ['王大帅', '赵天才'],
        tag: '家'
      }, {
        check: false,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        login: '2020-11-24 17:04:28',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }, {
        check: true,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '家'
      }, {
        check: false,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }, {
        check: true,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }, {
        check: true,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }, {
        check: true,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-20 14:48:39',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      }],
      backup: [],
      pushThings: {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-26 16:09:28',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      },
      pageTable: [],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      cutNum: 0,
      pageCutNum: 0,
      rowThing: {},
      rowThingCharge: {},
      value1: [],
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      list: '',
      tableFunc: tableJoke,
      tableInsert: insertUserTable,
      blank: ''
    }
  },
  created() {
    // tableJoke().then(list => {
    //   console.log(list)
    //   this.backup = this.tableData
    //   this.pageCUt()
    // })

    // console.log(this.list)
    // function ha() {
    //   return new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //       resolve()
    //     }, 1000)
    //   })
    // }
    // function he() {
    //   return new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //       resolve()
    //     }, 3000)
    //   })
    // }
    // var a = ha()
    // var b = he()
    // a.then(function success() {
    //   console.log('success')
    // }, function fail() {
    //   console.log('fail')
    // })
    // const v = Promise.all([a, b])
    // v.then(function success() {
    //   console.log('也好了！')
    // })
  },
  mounted() {
    // this.tableData = this.tableType
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    search() {
      // console.log('hahahah')
      const realthings = this.filterThings.filter(item => {
        return item.input.length !== 0
      })
      const ha = this.tableData.filter((item, check) => {
        return realthings.every(function(value) {
          if (value.type === 'startTime' || value.type === 'endTime') {
            const checkTime = (new Date(item.login).getTime() >= new Date(realthings[0].input).getTime()) || (item.login <= new Date(realthings[1].input).getTime())
            return checkTime
          } else {
            return (item[value.type].indexOf(value.input) !== -1)
          }
        })
      })
      this.tableData = ha
      this.pageCUt()
    },
    comeback() {
      this.tableData = this.backup
      this.pageCUt()
    },
    newPush() {
      this.tableData.push(this.pushThings)
      this.backup = this.tableData
      this.pageCUt()
      this.dialogFormVisible = false
    },
    deleteRow(index, rows) {
      this.$refs.zTable.deleteRow(index)
      console.log(this.tableData)
      rows.splice(index, 1)
      this.pageCUt()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 进行分页处理
    pageCUt() {
      const lastCut = Math.floor(this.tableData.length / 5)
      this.pageCutNum = lastCut + 1
      this.pageTable.length = 0
      let lastNumPlus = 5
      if (this.cutNum === lastCut) {
        lastNumPlus = this.tableData.length % 5
      }
      for (let i = this.cutNum * 5; i < this.cutNum * 5 + lastNumPlus; i++) {
        this.pageTable.push(this.tableData[i])
      }
    },
    pageChange(index) {
      this.cutNum = index - 1
      this.pageCUt()
    },
    getExcel(res) {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../../../../utils/Export2Excel.js')
        const tHeader = ['登录账号', '真实姓名', '联系方式', '登录时间', '状态']
        const filterVal = ['date', 'name', 'address', 'login', 'tag']
        const list = res
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '用户管理情况表')
      })
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    handleClick(row) {
      this.rowThing = row
      this.dialogFormVisible2 = true
    },
    handleClickCharge(row) {
      this.rowThingCharge = row
      this.dialogFormVisible3 = true
    },
    newPushCharge(row) {
      console.log(row)
      this.rowThingCharge.charge = this.value1
      this.dialogFormVisible3 = false
    },
    dialogDataCome(data) {
      this.tableData.push(data)
      this.backup = this.tableData
      this.pageCUt()
    },
    // dialog组件的展示
    addShow() {
      this.$refs.dialog1.show()
    },
    // 搜索组件成功的返回函数
    dealSearch(doneFilters) {
      this.tableData = doneFilters
      this.pageCUt()
      // console.log('哈哈')
    },
    searchBack() {
      this.tableData = this.backup
      this.pageCUt()
    }
  }
}
</script>

<style scoped>
.userTableHold {
  background-color: rgba(236, 240, 241,1);
  padding: 10px;
}
  .searchRow {
  }
  .searchRow .el-input {
    margin-top: 5px;
    width: 335px;
  }
  .cloth {
    background-color: #fff;
    padding: 30px 10px;
  }
  .el-button {
    margin-left: 15px;
  }
  .table{
    margin-top: 10px;
    border-top: 1px solid #f0dacf;
    padding-top: 20px;
    padding-bottom: 20px;
    min-height: 600px;
  }
</style>
