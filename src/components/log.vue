<template>
<div>
<md-field :class="messageClass">
      <label>Required Field</label>
      <md-input v-model="required" required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field :class="messageClass">
      <label>Required Field</label>
      <md-input v-model="required" required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
</div>

</template>
<script>
//import from

export default {
  setup() {},
};
</script>
<style scoped>
</style>