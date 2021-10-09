<template>
    <div>
      <div v-if="address">My address : {{ address }}</div>
       <div v-else>You're an anonymous friend</div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Account extends Vue {
  get address() {
    if (this.$store) {
      return (this.$store.state.account.address as String)
    }
  }
}
</script>