import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import DemoForm from '@/components/DemoForm'
import ListPost from '@/components/ListPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/demo-form',
      name: 'DemoForm',
      component: DemoForm
    },
    {
      path: '/posts',
      name: 'ListPost',
      component: ListPost
    }
  ]
})
