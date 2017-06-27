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
export default {
  components: {Tweet},
  data () {
    return {
      tweets: [
        { name: 'Vald', contenu: 'J\'en roule un comme Jean Moulin' },
        { name: 'MacroDu69', contenu: 'Rabais à Perrache frère' },
        { name: 'BicraveurABob', contenu: 'Qui a du caprisun dans le coin ? Je file un bleu' }
      ]
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
