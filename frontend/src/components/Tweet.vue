<template>
  <div class="tweet">
    {{ tweet.name }} {{ tweet.contenu}}
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
