<template>
  <div><h2>{{foo}}</h2></div>
</template>

<script>
import mixinDemo from './mixin/mixinDemo'
export default {
  name: 'index',
  mixins: [mixinDemo]
}
</script>

<style scoped>

</style>
