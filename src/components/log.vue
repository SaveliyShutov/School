<template>
  <div class="md-layout md-alignment-center-center">
    <md-card id="card" class="md-layout-item md-layout md-size-25 md-small-size-80 ">
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
// import { gsap } from "gsap";

export default {
  data() {
    return {
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
      
      
    //   x:-150,
    //   duration: 2,
    // });
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
.md-layout-item {
 border-radius:50px;
 padding:45px;
 
}
.md-layout{
  display:flex;
  justify-content:center;
  margin: 10% auto;


}
</style>