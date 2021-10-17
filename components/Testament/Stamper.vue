<template>
  <v-card>
    <v-card-title>Modify</v-card-title>
    <v-card-text>
      <v-file-input
        v-model="file"
        truncate-length="15"
        placeholder="Select a file"
        @change="compute"
      ></v-file-input>
      <v-alert v-if="error">{{ error }}</v-alert>
      <v-card-text v-if="stamp">
        New testament stamp :
        <v-alert dense text type="info">{{ stamp }}</v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="stamp" color="red" @click="reset">Reset</v-btn>
        <v-btn 
          :disabled="!stamp"
          color="blue-grey"
          class="ma-2 white--text" @click="send">Send</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ethers } from 'ethers'
@Component
export default class Stamper extends Vue {
  file: null|File;
  stamp: null|String;
  error: null|String;
  
  constructor() {
    super();
    this.file = null;
    this.stamp = null;
    this.error = null;
  }

  async compute() {
    if (this.file) {
      this.error = null
      try {
        const content = ethers.utils.toUtf8Bytes(await this.file.text())
        this.stamp = ethers.utils.sha512(content)
      } catch (error) {
        this.error = (error as String)
      }
    }
  }

  reset() {
    this.stamp = null
    this.file = null
  }

  async send() {
    try {
      await this.$stamper().set(this.stamp)
      this.$emit('update:value', this.stamp)
    } catch (error) {
      this.error = 'New testament has not been saved'
      console.error(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-alert {
  font-size: 0.8em;
  word-break: break-all;
}
</style>