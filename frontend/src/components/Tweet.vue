<template>
  <div class="tweet">
    <div>
      <strong>{{ tweet.auteur.prenom }} {{ tweet.auteur.nom }}</strong>
      <span class="handle">@{{ tweet.auteur.handle }} - {{ moment(tweet.date) }}</span>
    </div>

     <div>
       {{ tweet.contenu }}
     </div>

     <div>
        <ul>
          <li class="button">
            <icon name="reply"/>
          </li>
          <a @click="retweet()">
            <li class="button">
              <icon name="retweet"/> {{ tweet.retweeters.length }}
            </li>
          </a>
          <li class="button">
            <icon name="heart"/>
          </li>
          <li class="button">
            <icon name="envelope"/>
          </li>
        </ul>
      </div>

  </div>
</template>

<script>
import 'vue-awesome/icons'
import moment from 'moment'
import Icon from 'vue-awesome/components/Icon'
import Vue from 'vue'
import Resource from 'vue-resource'
export default {
  name: 'tweet',
  components: {Icon},
  props: ['tweet'],
  methods: {
    moment: function (date) {
      return moment(date).format('DD MMM YYYY')
    },
    retweet: function () {
      this.$http.get('http://localhost:8080/retweet', {params: {utilisateur: 'johndoe', tweet: 10}, responseType: 'text'}).then(response => {
        this.tweets = response.body
      }, response => {
        console.log('error')
      })
    }
  },
  created () {
    moment.locale('fr')
  }
}
</script>

<style scoped>
li.button {
 display: inline-block;
}

a {
 color: #42b983;
}

span.handle {
 color: gray;
}
</style>
