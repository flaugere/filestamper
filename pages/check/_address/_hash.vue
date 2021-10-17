<template>
  <div>
      <Account />
      <TestamentCheck :hash="hash" :address="address"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  asyncData({ params }) {
    const hash = params.hash
    const address = params.address
    return { hash, address };
  }
})
</script>
