<template>
	<div class="login-wrapper">
		<el-card class="box-card">
		 <div slot="header" class="clearfix">
		   <span>注册</span>
		   <el-button style="float: right; padding: 3px 0" type="text"><router-link to='/Login'>我要登录</router-link></el-button>
		 </div>
		  <!-- 表单 -->
		  <el-form label-position="top" label-width="80px" :model="formLabelAlign" :rules="rules" ref="ruleForm">
		    <el-form-item label="用户名" prop='name'>
		      <el-input v-model="formLabelAlign.name"></el-input>
		    </el-form-item>
		    <el-form-item label="密码" prop='password'>
		      <el-input v-model="formLabelAlign.password"></el-input>
		    </el-form-item>
			<el-form-item class="btn-localtion">
			   <el-button type="primary"  @click="submitForm('ruleForm')">登录</el-button>
			   <el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		  </el-form>
		</el-card>
	</div>
</template>

<script>
	export default{
		name:'SignIn',
		data() {
			return{
				formLabelAlign: {
				name: '',
				password: '',},
				rules: {
				          name: [
				            { required: true, message: '请输入账号', trigger: 'blur' },
				            { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
				          ],
						  password:[
							  { required: true, message: '您还没有输入密码', trigger: 'blur' },
							  { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
						  ]
						  },
			}
		},
		
		methods:{
		async submitForm(){
				try{
					await this.$refs.ruleForm.validate()
				}catch(error){
					console.log("登录错误")
				}	
			},
			resetForm(){ this.$refs.ruleForm.resetFields();}
		},
	}
</script>

<style scoped>
	.clearfix span{
			/* color: white; */
		    font-size: 1.5rem;
		    font-weight: 600;
		    line-height: 1.5rem;
	}
	.el-card__header {
	    background-color: #409EFF;
		text-align: center;
	}
	.box-card{
		width: 30vw;
	}
	.btn-localtion{
		text-align: center;
	}
	.clearfix sapn{
		color: #fff;
		}
</style>