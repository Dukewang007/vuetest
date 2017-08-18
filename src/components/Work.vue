<!-- 实现轮播图 -->
<template>
  <div class="block">
    <span class="demonstration"> Hover 指示器触发</span>
    <ul height="150px">
      <li v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </li>
    </ul>
    <div class="xd">
	    
	    <button @click="openDialog">dsog</button>
	    <dialog :visible.sync="visible"></dialog> 
	</div>
  </div>
  
</template>

<script>
	import dlog from './Dialog'
	export default {
		name:"Work",
		components:{
	      dlog
	    },
	    data(){
			return{
				visible: true
			}
		},
	    methods: {
	      openDialog() {
	      	console.log(this)
	        this.visible = true // 通过data显式控制dialog
	      }
	    }
	}
	console.log(this.dlog)
	console.log(dlog)
</script>