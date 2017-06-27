<template>
  <div class="template">
    <ul>
        <li v-for="tweet in tweets">{{ tweet.name }} {{ tweet.contenu}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tweets: [ { name: 'tweet1', contenu: 'Zbat money' },
       { name: 'tweet2', contenu: 'J\'en roule un comme Jean-Moulin' },
       { name: 'tweet3', contenu: 'Brulons les tous jusq\'ua la moelle !' }
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
