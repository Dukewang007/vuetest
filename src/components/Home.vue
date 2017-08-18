
<template>
  <div class="jumbotron">
    <h1>任务追踪</h1>
    <p>
      <strong>
        <router-link to="/lunbo">创建一个任dd务</router-link>
      </strong>
    </p>
    <div id="demo">
	  <button v-on:click="show = !show">
	    toggle
	  </button>
	  <transition name="fade">
	    <p v-if="show">hello</p>
	  </transition>
	</div>
	<div class="byong"><span>less样式</span></div><br>
	<div @click="useAlert">弹出alert</div>
	<alert ref="alert"></alert>
	<button v-on:click="counter += 1">增加 1</button>
  	<p>这个按钮被点击了 {{ counter }} 次。</p>
  	<a v-on:click.once="doThis">这个事件只触发了一次</a>
  	<br>
  	<input @keyup.enter="submit" placeholder="监听键盘enter事件">
	<div @click.ctrl="doSomething">Do something</div>
  </div>
 	
</template>
<script>
	import Alert from './Alert.vue'
	
	export default {
		name:"Home",
		components:{
			Alert
		},
		data(){
			return{
				show:true,
				counter:0
			}
		},
		methods:{
			useAlert(){
				let option = new Object();
				option.title = "这是alert弹出框";
				option.content = '终于报错了';
				this.$refs.alert.showAlert(option)
				
			},
			doThis(){

				console.log(1)
			
			},
			submit($event){
				console.log($event)
				alert("启用了enter")
			},
			doSomething(){
				console.log("-------------")
			}
		}
	}

</script>
<style lang="less">
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	  opacity: 0
	}
	.byong{
		span{
			color: #a40b5d;
		}
	}
</style>