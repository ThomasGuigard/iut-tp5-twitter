import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Timeline from '@/components/Timeline'
import Tweet from '@/components/Tweet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/Tweet',
      name: 'Tweet',
      component: Tweet
    }
  ]
})
