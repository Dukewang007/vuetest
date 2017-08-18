<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="javascripr:;">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home" >首页</router-link></li>
          <li><router-link to="/logtime">计划列表</router-link></li>
          <li><router-link to="/work">工作列表</router-link></li>
          <li><router-link to="/hello">欢迎VUE</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="col-sm-3">
        <sidebr></sidebr>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  
  export default {
    name:"App",
    data(){
      return{
        isActive:true
      }
    },
    components :{'sidebr':Sidebar}
  }
  console.log(window)
  window.name = "这是解决跨域问题";
 
</script>
<style>
  .nav {
    
      color: #a40b5d;
    
  }
  .router-link-active{
    border-bottom: 2px solid #666;

  }
</style>