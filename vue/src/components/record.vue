<!--
 * @Author: your name
 * @Date: 2021-07-21 08:17:25
 * @LastEditTime: 2021-07-22 13:58:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\components\record.vue
-->
<template>
  <div>
  <el-row v-for="(item,key) in getNewarray" :key="key">
    <el-col :span="0.5">{{key+1}}、</el-col>
     <el-col :span="10">{{item.content}}</el-col>
  </el-row>
  <p>{{le}} &nbsp; 条记录已完成</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 name: 'record',
  data() {
    return {
    
    };
  },
  computed: {
    ...mapGetters(['getNewarray']),
    le(){
      return this.getNewarray.length
    }
  }
}
</script>

<style>

</style>

