import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import System from '../views/system.vue'
import login from '../views/login.vue'



Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name:"login",
      component:login
    },
  { 
  
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/system',

    children:[
      
      {
        path :'system',
        name:'system',
        component: System
      },
      {
        path :'table',
        name:'Table',
        component:() => import('../views/table.vue' )},
      {  
      path :'news',
      name:'News',
      component:() => import('../views/news.vue' )},              
      {  
        path :'item',
        name:'Item',
        component:() => import('../views/item.vue')},
   {  
      path :'commit',
      name:'Commit',
      component:() => import('../views/commit.vue')},
      {  
        path :'project',
        name:'Project',
        redirect:'/home/project/projectHome',
        component:() => import('../views/project.vue'),
        children:[
          {path :'projectHome',
          name:'ProjectHome',
          component:() => import('../views/projectHome.vue')},
          {path :'addProject',
          name:'AddProject',
          component:() => import('../views/addProject.vue')}
        ]

        
      },
      {  
        path :'admin',
        name:'Admin',
        component:() => import('../views/admin.vue')},        

    ]
  },
  {
    path:'*',
    redirect:'/home/system'
  }
]
  

const router = new VueRouter({
  // linkExactActiveClass:'active',
  linkActiveClass:'active',
  
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
