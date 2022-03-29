<template>
  <div class="md-layout md-alignment-center-center">
    <form action="#" @submit.prevent="submit">
      <md-card
        id="card"
        class="md-layout-item md-layout md-size-30 md-small-size-90"
      >
        <md-card-header>
          <div class="md-title">Регистрация</div>
        </md-card-header>

        <md-field md-inline>
          <label>Имя</label>
          <md-input v-model="name" md-counter="20"></md-input>
        </md-field>

        <md-field md-inline>
          <label> Электронная почта</label>
          <md-input v-model="email"></md-input>
        </md-field>
        <md-field md-inline>
          <label> Пароль</label>
          <md-input v-model="password" md-counter="20"></md-input>
        </md-field>

        <md-button type="submit" class="md-primary">Отправить</md-button>
      </md-card>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";
import "firebase/auth";
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
       firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
       this.$router.replace({name: "Answers",});
      }
      catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.md-layout-item {
  border-radius: 50px;
  padding: 45px;
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 10% auto;
}
</style>