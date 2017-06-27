<template>
  <div class="template">
    <ul>
        <li v-for="tweet in tweets">
          <tweet :tweet="tweet"/>
        </li>
    </ul>
  </div>
</template>

<script>
import Tweet from './Tweet.vue'
import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
export default {
  components: {Tweet},
  data () {
    return {
      tweets: []
    }
  },
  created () {
    this.fetchTweets()
  },
  methods: {
    fetchTweets () {
      this.$http.get('http://localhost:8080/list').then(response => {
        this.tweets = response.body
      }, response => {
      // error callback
      })
    }
  }
}
</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}

</style>
