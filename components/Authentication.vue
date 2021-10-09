<template>
  <div>
    <v-btn ref="login" elevation="2" plain outlined color="secondary" @click="login">Login</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Authentication extends Vue {
  isMetaMaskInstalled: Boolean = () => {
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }

  async login() {
    if (false === this.isMetaMaskInstalled()) {
      this.$emit('error', 'MetaMask missing');
      return;
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      this.$store.commit('account/set', accounts[0])
    } catch (error) {
      console.error(error)
    }
  }
}
</script>>

<style>
</style>