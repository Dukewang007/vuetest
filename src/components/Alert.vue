<template>
	<div id="alert">
		
		<div class="model-mask" v-show="show">
			<div class="modal-alert">
				<div class="alert-header">
	                <span>{{ title }}</span> 
	            </div>
	            <div class="alert-content">
	                {{ content }}
	            </div>
	            <div class="alert-btns">
	                <button class="btn" @click="cancel">取 消</button>
	                <button class="btn btn-primary" @click="confirm">确 定</button>
	            </div>
			</div>
		</div>
	</div>
</template>
<script>

	export default{
		name:"Alert",
		data(){
			return{
				title: "",
				content: "",
				show:false,
				onCancel: false,
              	onOk: false,
			}
		},
		methods:{
			//取消方法
			cancel(){
		        this.show = false
		        document.body.style.overflow = ''
		    },
		    confirm(){
		    	this.show = false;
		    	
		    },
		    //调用组件的方法
		    showAlert(setting){
		    	this.show = true
		    	console.log(11)
		        this.title = setting.title ||  '标题'
		        this.content = setting.content || '内容'
		        
		        
		        document.body.style.overflow = 'hidden'
		    }
		}
	}
	
</script>
<style lang="scss">

	@import "../less/style.scss";
	.tat{
		font-family: "Microsoft Yahei";
		color:#333;
	}
</style>