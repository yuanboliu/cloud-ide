<template>
  <el-container
    class="app-main"
  >
    <el-aside class="app-aside">
      <el-scrollbar>
        
      </el-scrollbar>
    </el-aside>

    <el-container class="app-body">
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array(20).fill(item))
</script>

<style scoped>
.app-main .app-aside {
  width: 60px;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
  z-index: 10;
  background: white;
  overflow-y: scroll;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);

}
.app-body {
  background: #eaeef2;
}
</style>
