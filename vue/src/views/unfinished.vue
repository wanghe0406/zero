<!--
 * @Author: your name
 * @Date: 2021-07-21 08:17:25
 * @LastEditTime: 2021-07-22 15:28:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\unfinished.vue
-->
<template>
 <div>
  <el-input class="wid" v-model="ftest" @change="handleInputChange()" placeholder="请输入内容"></el-input>
  <el-button type="primary" @click="additemlist()">添加事项</el-button>
  <unrecord/>
 <p>{{getLength}} &nbsp; 条未办事项</p>
  </div>
</template>
<script>
import unrecord from '@/components/unrecord.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'unfinished',
  components: {
    unrecord
  },
  data(){
    return {
      ftest:''
    }
  },
  computed:{
    ...mapState(['inputvalue']),
    ...mapGetters(['getLength'])
  },
  methods:{
    //监测变化
      handleInputChange() {
      this.$store.commit('setInputValue', this.ftest)
    },
    //增加数据
    additemlist(){
      if(this.ftest == ''){
        this.$message.warning('文本框内容不能为空！')
      }else{
        this.$store.commit('additem')
        this.ftest = ''
      }

    }
  }
}
</script>
<style scoped>
.wid {
  width: 30%;
  margin-bottom: 20px;
}
</style>
