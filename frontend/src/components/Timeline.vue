<template>
  <div class="timeline">
    <feed :tweets="tweets" :loading="loading" @retweeted="retweet"/></li>
  </div>
</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
import Feed from './Feed.vue'
export default {
  name: 'timeline',
  components: {Feed},
  methods: {
    fetchTweets: function () {
      this.$http.get('http://localhost:8080/list').then(response => {
        this.tweets = response.body
        this.loading = false
      }, response => {
        console.log('error')
      })
    },
    retweet: function (id) {
      var tweet = this.tweets.find(tweet => tweet.id === id)
      tweet.retweeters.push({handle: 'johndoe'})
    }
  },
  data () {
    return {
      tweets: [],
      loading: true
    }
  },
  created () {
    this.fetchTweets()
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
