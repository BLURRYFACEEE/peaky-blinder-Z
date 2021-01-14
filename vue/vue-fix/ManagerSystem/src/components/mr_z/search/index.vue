<!--查询组件、自定义查询名称以及数组功能，也有重置和导出Excel功能-->
<template>
  <div class="main">
    <div class="cloth">
      <el-form :model="filterThings.value" label-position="right">
        <el-row>
          <el-col v-for="(item,index) in filterThings" :key="index" :span="6"><span class="colWrap">{{ item.name }}：<el-input v-model="item.input" autocomplete="off" /></span></el-col>
          <el-col :span="6"><span class="colWrap"><span>告警时间：</span>
            <el-date-picker
              v-model="filterTime.startTime"
              type="datetime"
              placeholder="选择日期时间"
            /></span></el-col>
          <el-col :span="6"><span class="colWrap"><span class="specialZhi">至：</span>
            <el-date-picker
              v-model="filterTime.endTime"
              type="datetime"
              placeholder="选择日期时间"
            />
          </span></el-col>
        </el-row>
      </el-form>
      <div class="filterInput" />
      <div class="threeBig">
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="plain" @click="comeback">重置</el-button>
        <el-button type="success" @click="getExcel(doneFilters)">导出EXCEL</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [{
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
        }]
      }
    },
    filterThings: {
      type: Array,
      default: () => {
        return [
          // { check: true },
          { type: 'date', input: '', name: '日期' },
          { type: 'name', input: '', name: '名字' },
          { type: 'address', input: '', name: '地址' },
          { type: 'tag', input: '', name: '负责人' }
          // { tyep: 'startTime', input: '' },
          // { type: 'endTime', input: '' }
        ]
      }
    }

  },
  data() {
    return {
      formLabelWidth: '60px',
      // filterThings: [
      //   { type: 'date', input: '', name: '日期' },
      //   { type: 'name', input: '', name: '名字' },
      //   { type: 'address', input: '', name: '地址' },
      //   { type: 'tag', input: '', name: '负责人' },
      //   { type: 'startTime', input: '', name: '开始时间' },
      //   { type: 'endTime', input: '', name: '结束时间' }
      // ],
      doneFilters: this.tableData,

      filterTime: {
        startTime: null,
        endTime: null
      }
    }
  },
  methods: {
    search() {
      // console.log('hahahah')

      const realthings = this.filterThings.filter(item => {
        return item.input.length !== 0
      })
      if (this.filterTime.startTime !== null) {
        realthings.push({ type: 'startTime', input: this.filterTime.startTime })
      }
      if (this.filterTime.endTime !== null) {
        realthings.push({ type: 'endTime', input: this.filterTime.endTime })
      }
      console.log(realthings)
      this.doneFilters = this.tableData.filter((item, check) => {
        // if (this.filterTime.startTime !== null) {
        //   const checkTime = new Date(item.login).getTime() >= new Date(this.filterTime.startTime).getTime()
        //   return checkTime
        // } else if (this.filterTime.endTime !== null) {
        //   const checkTime = new Date(item.login).getTime() <= new Date(this.filterTime.endTime).getTime()
        //   return checkTime
        // } else if () {
        //   const checkTime = new Date(item.login).getTime() <= new Date(this.filterTime.endTime).getTime() && new Date(item.login).getTime() >= new Date(this.filterTime.startTime).getTime()
        //   return checkTime
        // }
        return realthings.every(function(value) {
          if (value.type === 'startTime' && value.type === 'endTime') {
            const checkTime = (new Date(item.login).getTime() >= new Date(value.input).getTime()) && (new Date(item.login).getTime() <= new Date(realthings[realthings.length - 1]).getTime())
            return checkTime
          }
          if (value.type === 'startTime') {
            const checkTime = (new Date(item.login).getTime() >= new Date(value.input).getTime())
            return checkTime
          }
          if (value.type === 'endTime') {
            const checkTime = (new Date(item.login).getTime() <= new Date(value.input).getTime())
            return checkTime
          } else {
            return (item[value.type].indexOf(value.input) !== -1)
          }
        })
      })
      // console.log(ha)
      this.$emit('searchDone', this.doneFilters)
      // this.tableData = doneFilters
      // this.pageCUt()
    },
    comeback() {
      this.doneFilters = this.tableData
      this.$emit('searchReborn')
    },
    getExcel(res) {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../../utils/Export2Excel.js')
        const tHeader = ['登录账号', '真实姓名', '联系方式', '登录时间', '状态']
        const filterVal = ['date', 'name', 'address', 'login', 'tag']
        const list = res
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '用户管理情况表')
      })
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style scoped>
  .main {
    border-bottom: 1px solid #efefef
  }
  .cloth {
    max-width: 1250px;
    padding: 30px 0 60px 10px;
  }
  .el-col {
    margin-top: 10px;
    /*margin-left: 10px;*/
  }
  .colWrap{
    float: right;
  }
  .el-input {
    display: inline-block;
    width: 195px;
  }
  .el-date-editor {
    display: inline-block;
    width: 190px;
  }
  .threeBig {
    float: right;
  }

  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .timeTitle {
    /*text-align: center;*/
  }
  .specialZhi{
    margin-right: 10px;
  }
</style>
