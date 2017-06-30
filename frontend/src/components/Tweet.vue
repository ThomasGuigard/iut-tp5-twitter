<template>
  <div class="tweet">
    <div>
      <span class="handle">{{ tweet.auteur.prenom }} {{ tweet.auteur.nom }}</span> @{{ tweet.auteur.handle }}
        - {{ tweet.date }}
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
            <icon name="retweet"/>
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
</template>

<script>
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'tweet',
  components: {Icon},
  props: ['tweet']
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
