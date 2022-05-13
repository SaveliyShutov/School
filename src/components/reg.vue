<template>
  <div>
    <form
      action="#"
      class="md-layout md-alignment-center-center"
      @submit.prevent="submit()"
    >
      <md-card class="md-layout-item md-size-30 md-small-size-90">
        <md-card-header>
          <div class="md-title">Регистрация</div>
        </md-card-header>

        <md-field md-inline>
          <label>Имя</label>
          <md-input v-model="name" maxlength="20"></md-input>
        </md-field>

        <md-field md-inline>
          <label> Электронная почта</label>
          <md-input v-model="email"></md-input>
        </md-field>
        <md-field md-inline>
          <label> Пароль</label>
          <md-input
            v-model="password"
            type="password"
            maxlength="20"
          ></md-input>
        </md-field>

        <md-button type="submit" class="md-primary">Отправить</md-button>
      </md-card>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";
import "firebase/auth";
const db = firebase.firestore();
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: null,
    };
  },
  mounted() {
    // gsap.from("#card", {
    //   scrollTrigger: {
    //     trigger: "#card",
    //     start: "top bottom-=200px",
    //     once: true,
    //     toggleActions: "restart pause resume pause",
    //   },
    //   x: 150,
    //   duration: 2,
    // });
  },
  methods: {
    async submit() {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            return db.collection("Users").doc(cred.user.uid).set({
              name: this.name,
              email: this.email,
            });
          })
          .then((data) => {
            data.user.updateProfile({
              displayName: this.name,
            });
          });
        this.$router.replace({ name: "Answers" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapGetters({
      user: "user",
      userIn: "userIn",
    }),
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