import Vue from 'vue'
import VueRouter from 'vue-router'
import MyTodo from '../views/MyTodo.vue'
import Login from '../views/Login.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mytodo',
    component: MyTodo
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
	children:[
	                {
	                    path:'signin',
						name:'Signin',
	                    component:SignIn,
	                },
	                {
	                    path:'signup',
						name:'Signup',
	                    component:SignUp,
	                }
	                ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach(function(to,from,next){
// 	if(to.name==='Mytodo'){
// 		console.log("我跳转到登录页面")
		
// 		next({
// 			path:'/Login'
// 		})
// 	}else{
// 		next()
// 		console.log("我没在主页面上")
// 	}
// 	next('Login')
// 	console.log("我进行跳转到登录页面了")
// })

export default router
