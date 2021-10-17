<template>
  <v-row justify="center" align="top">
    <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>
            My identity
          </v-card-title>
          <v-card-text>
            <Account />
          </v-card-text>
        </v-card>
        <v-card class="mt-3" >
          <v-card-title>
            Testament
          </v-card-title>
          <v-card-text>
            <TestamentShow />
          </v-card-text>
        </v-card>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <TestamentStamper v-if="isConnected"/>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    isConnected () {
      return this.$store.state.account.address !== null
    }
  },
})
</script>
