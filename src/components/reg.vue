<template>

  <div class="md-layout md-alignment-center-center ">
     <form action="#" @submit.prevent="submit">
      <md-card id="card" class="md-layout-item md-layout md-size-30 md-small-size-80 ">
        <md-card-header>
          <div class="md-title">Регистрация</div>
        </md-card-header>

        <md-field md-inline>
          <label>Имя</label>
          <md-input v-model="form.name"></md-input>
        </md-field>

        <md-field md-inline>
          <label> Электронная почта</label>
          <md-input v-model="form.email"></md-input>
        </md-field>
        <md-field md-inline>
          <label> Пароль</label>
          <md-input v-model="form.password"></md-input>
        </md-field>

        <md-button type="submit" class="md-primary">Отправить</md-button>
      </md-card>
     </form>
  </div>
</template>
<script>
import firebase from "firebase";
import { gsap } from "gsap";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
   mounted() {
    gsap.from("#card", {
      scrollTrigger: {
        trigger: "#card",
        start: "top bottom-=200px",
        once: true,
        toggleActions: "restart pause resume pause",
      },
      
      
      x:150,
      duration: 2,
    });
  },
  methods: {
    submit() {
     firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
<style scoped>
.md-layout-item {
 border-radius:50px;
 padding:45px;
 display:flex;
 justify-content:center;
 
}
form{
  display:flex;
  justify-content:center;
  width: 100%;
  text-align: center;
  margin: 10% auto;
}

</style>