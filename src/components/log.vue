<template>
  <div class="md-layout md-alignment-center-center">
    <md-card class="md-layout-item md-layout md-size-30 md-small-size-80">
      <md-card-header>
        <div class="md-title">Вход</div>
      </md-card-header>
      <md-field md-inline>
        <label>Почта</label>
        <md-input v-model="form.email"></md-input>
      </md-field>
      <md-field md-inline>
        <label>Пароль</label>
        <md-input v-model="form.password"></md-input>
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
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
  methods: {
    submit() {
      console.log("Hello");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({
          name:"Answers",
          });
          console.log("Регистрация прошла успешно!");
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
<style scoped>
.md-layout-item {
  position: absolute;
  top: 15%;
  padding: 50px;
  border-radius: 30px;
}
.md-title {
  position: absolute;
  left: 40%;
  right: 40%;
  bottom: 70%;
}
</style>