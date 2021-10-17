<template>
  <div>
    <v-alert v-if="isValid" type="success">Testament valid !</v-alert>
    <v-alert v-else-if="false === isValid" type="error">Not a valid testament</v-alert>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Check extends Vue {
  isValid: null|boolean = null;

  async mounted() {
    this.isValid = await this.checkValidity();
  };

  @Prop() readonly hash!: string;
  @Prop() readonly address!: string;
  async checkValidity() {
    console.debug('hash received', this.hash);
    console.debug('address', this.address);
    try {
      const hashReceived = (await this.$stamper().get(this.address));
      return hashReceived === this.hash;
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}
</script>