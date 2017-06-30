<template>
  <div class="tweet">
    {{ tweet.auteur.prenom }} {{ tweet.auteur.nom }} @{{ tweet.auteur.handle }} - {{ tweet.date }}
    {{ tweet.contenu }}
  </div>
</template>

<script>
export default {
  name: 'tweet',
  props: ['tweet']
}
</script>

<style scoped>

</style>
