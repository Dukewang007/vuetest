<template>
  <div >
    <div class="pic-main">
      <ul class="lunbo fix">
        <li class="lunbo-item" v-for="item in picnum"></li>
      </ul>
      <div class="move-click">
        <span class="glyphicon glyphicon-menu-left"></span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
      <ul class="lunbo-ul-index">
        <li class="lunbo-index lunbo-index-active" v-for="item in picnum">
          <span class="lunbo-index-btn"></span>
        </li>
      </ul>
    </div>
    
  </div>

</template>

<script>
export default {
  name: 'Lunbo',
  
  data () {
    return {
      picnum: [
        {message: 'Foo' },
        {message: 'Bar' },
        {message: 'Bar' },
        {message: 'Bar' }
      ]
    }
  },
  mounted(){
    this.autoPlay();
  },
  methods:{
    autoPlay(){
      console.log(111);
      
    },
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .fix {
      zoom: 1;
  }

  .fix:after {
      display: block;
      content: 'clear';
      clear: both;
      line-height: 0;
      visibility: hidden;
  }
  ul{
    list-style: none;
   
  }
  .pic-main{
    width: 300px;
    overflow: hidden;
    position: relative;
  }
  .pic-main:hover{
    .move-click{
      span{
        display: block;
      }
    }
  }
  .lunbo{
    margin-top: 10px;
    width: 1200px;
    position: relative;

  }
  .lunbo:hover{
    transform:translate3D(-900px,0,0);
    transition:transform 5s;
  }
  .lunbo-item{
    width: 300px;
    height: 200px;
    float: left;
  }
  .lunbo-item:nth-child(2n+1){
    background: #a40b5d;
  }
  .lunbo-item:nth-child(2n){
    background: #e882b9;
  }
  .move-click{
    span{
      position: absolute;
      font-size: 18px;
      color: #fff;
      top: 50%;
      transform:translateY(-50%);
      display: none;
      width: 18px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      cursor: pointer;
    }
    span:first-child{
      left: 5px;
      
    }
    span:last-child{
      right: 5px;
      
    }
  }
  .lunbo-ul-index{
    position: absolute;
    
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    
    z-index: 2;
  }
  .lunbo-index{
    display: inline-block;
    background-color: transparent;
    padding: 12px 3px;
    cursor: pointer;
  }
  .lunbo-index-btn{
    display: block;
    opacity: .48;
    width: 30px;
    height: 2px;
    background-color: #fff;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: .3s;
  }
</style>
