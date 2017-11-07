import Vue from 'vue'
import Router from 'vue-router'

// view containers ..
import Full from '@/containers/Full'

// views ..
import HelloWorld from '@/views/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Full,
      redirect: 'hello',
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: HelloWorld
        }
      ]
    }
  ]
})
