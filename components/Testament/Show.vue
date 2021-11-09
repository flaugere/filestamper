<template>
  <div>
    <NuxtLink v-if="testamentStamp" ref='link' :to="`/check/${$store.state.account.address}/${testamentStamp}`">
      {{ testamentStamp }}
    </NuxtLink>
    <div v-else>None found</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Show extends Vue {
  testamentStamp: null|string = null

  mounted() {
    this.getTestamentStamp();
  }

  async getTestamentStamp() {
    setTimeout(() => {
        this.getTestamentStamp();
    }, 5000);
    if (!this.$store.state.account || !this.$store.state.account.address) {
      return;
    }
    this.testamentStamp = await this.$stamper().get(this.$store.state.account.address);
    this.$store.commit('testament/setHash', this.testamentStamp);
  }
};
</script>

<style lang="scss" scoped>
.v-alert {
  font-size: 0.8em;
  word-break: break-all;
}
</style>