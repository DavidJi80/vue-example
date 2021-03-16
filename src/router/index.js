// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import foo from '@/components/foo'
import bar from '@/components/bar'
import user from '@/components/user'
import nestUser from "@/components/nestUser"
import userHome from "@/components/userHome"
import userInfo from "@/components/userInfo"
import userIndex from "@/components/userIndex"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        sidebar: foo,
        main: bar
      }
    },
    {
      path: '/userIndex',
      name: 'userIndex',
      component: userIndex,
      children: [{
        path: '',
        components: {
          default: foo,
          helper: bar
        }
      }]
    },
    {
      path: '/foo',
      name: 'foo',
      component: foo,
      alias: '/a_foo'
    },
    {
      path: '/r_foo',
      redirect: '/foo'
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    }, {
      path: '/r_bar',
      redirect: { name: 'bar' }
    },
    {
      path: '/user/:userId',
      component: user
    },
    {
      path: '/user/',
      component: user
    },
    {
      path: '/nestUser/',
      component: nestUser
    },
    {
      path: '/nestUser/:userId',
      name: 'nestUserParams',
      component: nestUser,
      children: [
        {
          path: '',
          component: userHome
        },
        {
          path: 'info',
          component: userInfo
        }
      ]
    }
  ],
  mode: "history"//干掉地址栏里边的#号键
})
