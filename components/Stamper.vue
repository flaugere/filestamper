<template>
  <v-card>
    <v-file-input v-model="file" truncate-length="15" @change="compute"></v-file-input>
    <v-alert v-if="error">{{ error }}</v-alert>
    <v-card-text>Filestamp : {{ stamp }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ethers } from 'ethers'
@Component
export default class Stamper extends Vue {
  file: ?File = null
  stamp: ?String = null
  error: ?String = null
  async compute() {
    if (this.file) {
      try {
        const content = ethers.utils.toUtf8Bytes(await this.file.text())
        this.stamp = ethers.utils.sha512(content)
        this.$emit('update:value', this.stamp)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>