<template>
  <div>
    <v-btn ref="login" elevation="2" plain outlined color="secondary" @click="login">Login</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Authentication extends Vue {
  isMetaMaskInstalled = () : Boolean => {
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }

  async login() {
    if (this.isMetaMaskInstalled() === false) {
      this.$emit('error', 'MetaMask missing');
      return;
    }
    try {
      this.$store.commit('account/setAddress', await this.$blockchain().getAccount())
    } catch (error) {
      console.error(error)
    }
  }
}
</script>>

<style>
</style>