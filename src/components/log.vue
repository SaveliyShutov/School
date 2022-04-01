<template>
  <div class="md-layout md-alignment-center-center">
    <md-card class="md-layout-item md-size-30 md-small-size-90">
      <md-card-header>
        <div class="md-title">Вход</div>
      </md-card-header>
      <md-field md-inline>
        <label>Почта</label>
        <md-input v-model="email"></md-input>
      </md-field>
      <md-field md-inline>
        <label>Пароль</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-button v-on:click="submit()" class="md-primary">Отправить</md-button>
    </md-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
   mounted() {
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
  methods: {
    async submit() {
      try{
        firebase.auth().signInWithEmailAndPassword(this.email, this.password) 
        this.$router.replace({name: "Answers",});
      }
      catch(err){
        console.log(err)
      }
    },
  },
};
</script>
<style scoped>
.md-card {
  padding: 30px;
  border-radius: 30px;
  margin: 50px;
}
</style>