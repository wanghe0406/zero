/*
 * @Author: your name
 * @Date: 2021-07-21 08:17:25
 * @LastEditTime: 2021-07-22 16:33:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
 //相当于组件的data,专门用来放全局的数据
  state: {
    array:[],
    newarray:[],
    inputvalue:''
  },
  //相当于组件中的computed,getters是全局的 ，computed是组件内部使用的
  getters:{
    getNewarray(state){
      return state.array.filter(x => x.status == 1)
    },
    getLength(state){
      return state.array.filter(x => x.status == 0).length
    }

  },
  //相当于组件中的 methods 不能使用异步（定时器，axios）
   mutations: {
    /**
     * @description: 为input赋值
     * @param {Object} state
     * @param {any} data
     * @return {void}
     */
    setInputValue(state,data){
      state.inputvalue = data
    },
    /**
     * @description: 向数组添加数值
     * @param {*} state
     * @return {*}
     */    
    additem(state){
      const info = {
        id:state.array.length > 0 ? state.array[state.array.length - 1].id + 1 : 0,
        content:state.inputvalue,
        status:0
      }
      state.array.unshift(info);
      state.inputValue = ''
    },
    /* 删除 */
    del(state,index){
      state.array.splice(index,1);
      Vue.prototype.$message({
        message: '记录删除成功',
        type: 'warning'
      })
    },
    /* 改变状态 */
    changestatus(state,key){
      if(state.array[key].status == 1){
        state.array[key].status = 0
      }
      else
      state.array[key].status = 1
    },
    //已完成list
    finArray(state,key){
      if(state.array[key].status == 1){
        state.newarray.unshift(state.array[key])
      }
    }
  },
  //专门用来处理异步，实际修改值的仍然是mutations
  actions: {
   /*  anyncAdd({commit},payload){
      new Promise((resolve,reject)=>{
        if (condition) {

          resolve()
        } else {
          reject()
        }
      }).then(res=>{
        commit('',res)
      }).catch(err=>{
        Vue.prototype.$message(err)
      })
    } */
  },
  modules: {
  }
})
