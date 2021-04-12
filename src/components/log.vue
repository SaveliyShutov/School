<template>
  <div class="md-layout md-alignment-center-center">
    <md-card class="md-layout-item md-layout md-size-30 md-small-size-80">
      <md-card-header>
        <div class="md-title">Вход</div>
      </md-card-header>
      <md-field md-inline>
        <label>Имя</label>
        <md-input v-model="inline"></md-input>
      </md-field>
      <md-field md-inline>
        <label>Пароль</label>
        <md-input v-model="inline"></md-input>
      </md-field>
    </md-card>
  </div>
</template>
<script>
//import from

export default {
  setup() {},
};
</script>
<style scoped>
.md-layout-item {
  position: absolute;
  top: 15%;
  padding: 50px;
  border-radius: 30px;
  }
.md-title{
position: absolute;
left:40%;
right:40%;
bottom: 70%;
}

</style>