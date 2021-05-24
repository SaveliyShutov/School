<template>
  <div id="app">
    <div id="nav">
      <router-link to="/QuestionForm">Question form</router-link> |
      <router-link to="/Answers">Answers</router-link> |
      <router-link to="/Form">Form</router-link>  |
      <router-link to="/Log">Log in</router-link> |
      <router-link to="/Reg">Registration</router-link>
      <md-button v-on:click="signOut()" class="md-raised">LogOut</md-button>
    </div>
    <router-view />
  </div>
</template>
<script>
import firebase from "firebase";
export default ({
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Registration"
          });
        });
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #7b68ee;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
