<!--
 * @Author: your name
 * @Date: 2021-07-21 08:17:25
 * @LastEditTime: 2021-07-22 13:57:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\components\unrecord.vue
-->
<template>
<div>
  <el-row v-for="(item,key) in mbgs" :key="key">
    <el-col :span="0.5">{{key+1}}、</el-col>
    <el-col :class=" item.status > 0  ? 'green' : 'grey'" :span="8" >{{item.content}}</el-col>
    <el-button type="danger" plain @click="$store.commit('del',key)">删除</el-button>&nbsp;
    <el-button @click="$store.commit('changestatus',key)">{{viewkey[item.status]}}</el-button>
  </el-row>
</div>
</template>
<script>
/* import { mapState } from 'vuex' */
export default {
  name: 'unrecord',
  data(){
    return {
      mbgs:this.$store.state.array,
      num:[],
      viewkey:['未完成','完成']

    }
  },
  computed:{
  },
  methods: {
/*     btnchange(key){
      this.$store.commit('change',key);
      console.log(this.mbgs)
      if(this.$store.state.btnarray[key] == '完成'){
         this.$store.state.newarray[key] = this.mbgs[key]
         this.num[key]=key
      }else {
        this.$store.state.newarray.splice(key,1)
        this.num[key]=-1
}
    } */
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.green {
  color: green;
}
.grey {
  color: grey;
}
</style>