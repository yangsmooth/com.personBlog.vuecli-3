<template>
  <div class="Footer navbar navbar-expand-lg d-block bg-dark p-0">
        <div class="content navbar-nav mx-sm-auto mx-md-auto">
            <label class="nav-link">©&nbsp;1997-2018 XX公司版权所有</label> 
            <a href="#" class="nav-link d-none d-sm-block d-md-block">公司简介</a> 
            <a href="#" class="nav-link d-none d-sm-block d-md-block">联系方法</a> 
            <a href="#" class="nav-link d-none d-sm-block d-md-block">招聘信息</a> 
            <a href="#" class="nav-link d-none d-sm-block d-md-block">客户服务</a> 
            <a href="#" class="nav-link d-none d-sm-block d-md-block">隐私政策</a> 
            <a href="#" class="nav-link d-none d-sm-block d-md-block">广告服务</a> 
            <a href="#" class="nav-link d-none d-sm-block d-md-block">意见反馈</a> 
            <a href="#" class="nav-link d-none d-sm-block d-md-block">不良信息举报</a>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Footer',
  props:{
  	
  },
  //ES6д��
  data(){
    return {
				
	  }
  },
  computed:{
		
  },
  methods:{
		
  },
  components:{
  	
  }
}
</script>


<style scoped>
.content{
	/*margin: auto 9%;*/
	/* padding-left:10%; */
  justify-content: center;
}
.content a,label{
	color: white;
}
.content a:hover{
	color: #D3D3D3;
}
</style>
