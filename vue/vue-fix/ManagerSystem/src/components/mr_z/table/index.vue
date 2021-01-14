<template>
  <div>
    <slot name="tableQuery">
      <search :table-data="tableData" :filter-things="tableFilters" @searchDone="dealSearch" @searchReborn="searchBack" />
    </slot>
    <slot name="tableButton">
      <div class="tableButtons">
        <shock-dialog ref="dialog1" :dialog-form-visible="dialogFormVisible" @dialogDataOut="dialogDataCome" />
        <el-button type="primary" @click="addShow">新增</el-button>
        <el-button type="info" @click="niger">批量授权角色</el-button>
      </div>
    </slot>
    <div v-if="loadFalse">
      <h2>数据加载失败！</h2>
    </div>
    <el-table
      ref="filterTable"
      v-loading="load"
      :data="pageTable"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <slot name="tableCol" />
    </el-table>
    <div class="paginationBlock">
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageLength"
        :page-sizes="[5,15, 30, 50,100]"
        @size-change="handleSizeChange"
        @current-change="pageChange"
      />
    </div>
  </div>
</template>

<script>
import shockDialog from '@/components/mr_z/shockDialog/index'
import search from '@/components/mr_z/search/index'

import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  components: {
    shockDialog,
    search
  },
  props: {
    // 表格数据来源函数
    tableFunc: {
      type: Function,
      default: () => function() {
      }
    },
    tableInsert: {
      type: Function,
      default: () => function() {
      }
    },
    // 分页长度
    decidePage: {
      type: Number,
      default: 5
    },
    tableFilters: {
      type: Array,
      default: () => {
        return [
          { type: 'resourceKind', input: '', name: '资源分类' },
          { type: 'name', input: '', name: '项目名称' },
          { type: 'id', input: '', name: '实例ID' },
          { type: 'alarmType', input: '', name: '实例名称' },
          { type: 'resourceKind', input: '', name: '实例IP' },
          { type: 'resourceKind', input: '', name: '归属系统' },
          { type: 'rule', input: '', name: '规则名称' },
          { type: 'name', input: '', name: '指标项' },
          { type: 'alarmType', input: '', name: '告警类型' },
          { type: 'dealState', input: '', name: '处理情况' },
          { type: 'workPageState', input: '', name: '是否办结' }
        ]
      }
    }
  },
  data() {
    return {
      filterThings: [
        { type: 'date', input: '' },
        { type: 'name', input: '' },
        { type: 'address', input: '' },
        { type: 'tag', input: '' },
        { type: 'startTime', input: '' },
        { type: 'endTime', input: '' }
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
      }],
      pageTable: [],
      backup: [],
      pushThings: {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        login: '2020-11-26 16:09:28',
        charge: ['王大帅', '赵天才'],
        tag: '公司'
      },
      cutNum: 0,
      nowNum: 0,
      // 默认5项一页
      load: true,
      loadFalse: false,
      dialogFormVisible: false,
      // pageLength: 10,
      pageSize: 5
    }
  },
  computed: {
    ...mapGetters([
      'tableType'
    ]),
    pageLength() {
      return this.tableData.length || 10
    }
  },
  mounted() {
    this.tableFunc().then(list => {
      // 本地data方法
      // console.log(this.tableData)
      // this.tableData = list.data[0].tableData
      //
      // 异步API方法
      // this.tableData = list
      // console.log(list)
      //
      // vuex获得方法（mapGetters）
      // console.log(this.tableType)
      this.tableData = list
      // this.tableData = this.tableType
      this.backup = this.tableData
      this.pageCUt()
      this.load = false
    })
      .catch(err => {
        console.log(err)
        this.load = false
        this.loadFalse = true
      })
    //   const a = 4
    //   if (a > 3) {
    //     console.log(a + '>3')
    //     if (a > 1) {
    //       console.log(a + '>1')
    //       return
    //     }
    //     console.log(a + '<1')
    //     return
    //   }
    //   console.log(a + '<3')
    //   console.log('哈哈')
    // })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
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
    deleteRow(index, rows = this.tableData) {
      rows.splice(index, 1)
      this.pageCUt()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.multipleSelection[0].login = val.length
      console.log(this.multipleSelection)
    },
    // 进行分页处理
    pageCUt() {
      const lastCut = Math.floor(this.tableData.length / this.decidePage)
      this.nowNum = 0.7
      this.pageTable.length = 0
      let lastNumPlus = 5
      if (this.cutNum === lastCut) {
        lastNumPlus = this.tableData.length % 5
      }
      for (let i = this.cutNum * 5; i < this.cutNum * 5 + lastNumPlus; i++) {
        this.pageTable.push(this.tableData[i])
      }
      // console.log(this.pageTable)
    },
    pageChange(index) {
      this.cutNum = index - 1
      // console.log(this.cutNum)
      this.pageCUt()
    },
    dialogDataCome(data) {
      this.tableInsert(data).then(list => {
        console.log(list)
      })
      console.log('ha')
      this.tableData.push(data)
      this.backup = this.tableData
      this.pageCUt()
    },
    addShow() {
      this.$refs.dialog1.show()
    },
    dealSearch(doneFilters) {
      this.tableData = doneFilters
      this.pageCUt()
      // console.log('哈哈')
    },
    searchBack() {
      this.tableData = this.backup
      this.pageCUt()
    },
    niger() {

    }
  }
}
</script>

<style scoped>
.el-table {
  min-height: 500px;
}
  .paginationBlock {
    margin-top: 10px;
    margin-right: 20px;
    text-align: right;
  }
  .tableButtons {
    margin-top: 15px;
  }
</style>
