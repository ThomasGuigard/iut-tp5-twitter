<template>
  <div class="tweet">
    <div class="column">
      <img :src="avatar"/>
    </div>
   <div class="column">
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
           <li class="button">
             <a @click="retweet()">
               <icon name="retweet"/> {{ tweet.retweeters.length }}
             </a>
           </li>
           <li class="button">
             <icon name="heart"/>
           </li>
           <li class="button">
             <icon name="envelope"/>
           </li>
         </ul>
       </div>
   </div>

  </div>
</template>

<script>
import 'vue-awesome/icons'
import moment from 'moment'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'tweet',
  components: {Icon},
  props: ['tweet', 'currentUser'],
  computed: {
    avatar: function () {
      return 'https://robohash.org/TEXT?' + this.tweet.auteur.handle + '?size=100x100'
    }
  },
  methods: {
    moment: function (date) {
      return moment(date).format('DD MMM YYYY')
    },
    retweet: function () {
      this.$http.get('http://localhost:8080/retweet', {params: {utilisateur: this.currentUser, tweet: this.tweet.id}, responseType: 'text'}).then(
      response => {
        this.$emit('retweeted', this.tweet.id)
      },
       response => {
         console.log('error retweet')
       })
    }
  },
  created () {
    moment.locale('fr')
  }
}
</script>

<style scoped>
div.column {
  display: inline-block;
}

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
