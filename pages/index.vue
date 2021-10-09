<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="d-flex justify-center flex-column">
        <div class="flex-row pa-2">
          <Account />
        </div>
        <div class="flex-row pa-2">
          <Stamper v-if="isConnected"/>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    isConnected () {
      return null !== this.$store.state.account.address
    }
  },
})
</script>
