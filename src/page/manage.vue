<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-plus"></i>预约</template>
                        <el-menu-item index="appointment">预约入城</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-plus"></i>文章</template>
                        <el-menu-item index="artlist">文章列表</el-menu-item>
                        <el-menu-item index="publish">发布文章</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-plus"></i>留言</template>
                        <el-menu-item index="leaveWordList">留言列表</el-menu-item>
                        <el-menu-item index="publishLeaveWord">发布留言</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-plus"></i>用户</template>
                        <el-menu-item index="adminUser">用户列表</el-menu-item>
                    </el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{

	}
</style>
