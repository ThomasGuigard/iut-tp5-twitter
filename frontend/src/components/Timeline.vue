<template>
  <div class="timeline">
    <utilisateurs :utilisateurs="utilisateurs"/>
    <feed :tweets="tweets" :loading="loading" @retweeted="retweet"/>
  </div>
</template>

<script>
import Utilisateurs from './Utilisateurs'
import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
import Feed from './Feed.vue'
export default {
  name: 'timeline',
  components: {Feed, Utilisateurs},
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
      tweet.retweeters.push({handle: 'snoopdog'})
    },
    fetchUtilisateurs: function () {
      this.$http.get('http://localhost:8080/utilisateurs').then(response => {
        this.utilisateurs = response.body
      },
      response => {
        console.log('erreur de récupération des utilisateurs')
      })
    }
  },
  data () {
    return {
      tweets: [],
      utilisateurs: [],
      loading: true
    }
  },
  created () {
    this.fetchTweets()
    this.fetchUtilisateurs()
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
