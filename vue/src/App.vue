<!--
 * @Author: your name
 * @Date: 2021-07-21 08:17:25
 * @LastEditTime: 2021-07-22 13:53:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\App.vue
-->
<template>
  <div>
    <div id="nav">
      <router-link class="mar" to="/">备忘录</router-link>
      <router-link to="/finished">已完成</router-link>
      <hr>
    </div>
    <router-view/>
  </div>
</template>

<style>
.mar {
  margin-right: 30px;
}
#nav a {
  font-size: 27px;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
