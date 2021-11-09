<template>
  <div>
    <div v-if="address">
      <v-alert
        color="primary"
        dark
        icon="mdi-home"
        border="left"
        :title="address"
      >{{ shortAddress }}</v-alert>
    </div>
    <Authentication v-else/>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Account extends Vue {
  get address() {
    if (this.$store) {
      return this.$store.state.account.address
    }
  }

  get shortAddress(): string {
    if (this.$store) {
      return this.$store.state.account.address.substring(0, 10);
    }

    return '';
  }
}
</script>
<style lang="scss" scoped>
.v-alert {
  width: 150px;
}
</style>
