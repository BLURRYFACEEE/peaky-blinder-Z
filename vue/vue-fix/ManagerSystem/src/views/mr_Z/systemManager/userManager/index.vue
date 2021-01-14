<template>
  <div>
    <user-table />
  </div>
</template>

<script>
import userTable from './userTable/index'
import { getChild } from '@/api/god/god'

export default {
  name: 'Index',
  components: {
    userTable
  },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  }
}
</script>

<style scoped>

</style>
