<template>
  <div id="app">
    <div id="nav">
      <router-link id="q" to="/QuestionForm">Задать вопрос</router-link>
      <router-link id="q" to="/">Ответы</router-link> 
    <div id="flexEnd">
      <md-button v-if="user.loggedIn" v-on:click="signOut()" class="md-raised">Выйти</md-button>
    <div v-else>
      <router-link id="q" to="/Log">Войти</router-link> 
      <router-link id="q" to="/Reg">Зарегистрироваться</router-link>
    </div>
    </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default ({
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    async signOut() {
      try{
        await firebase.auth().signOut()
        this.$router.replace({name: "Registration"});
      }
      catch(err){
        console.log(err);
      }
    }
  }
})
</script>

<style>
#app {
  font-family: Arial, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  background-color: #604ec5;
  padding: 15px;
  display:flex;
  flex-direction:row;
  align-items:center;
}

#nav a {
  font-weight: normal;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#flexEnd {
  display:flex;
  justify-content: space-between;
}
#q{
  margin-right: 20px ;
}

</style>
