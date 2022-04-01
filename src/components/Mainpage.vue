<template>
  <div class="main">
    <form
      novalidate
      class="md-layout md-alignment-center-center"
      @submit.prevent="sendQuestion"
    >
      <md-card class="md-layout-item md-size-30 md-small-size-90">
        <md-card-header>
          <div class="md-title">Задай вопрос</div>
        </md-card-header>

        <md-field md-inline>
          <label>Ваш вопрос одним предложением!</label>
          <md-input v-model="shortQ" maxlength="100"></md-input>
        </md-field>
        <md-field :class="messageClass">
          <label>Вопрос</label>
          <md-textarea
            v-model="textarea"
            required
            maxlength="500"
          ></md-textarea>
          <span class="md-error">There is an error</span>
        </md-field>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending"
            >Отправить</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
    <md-snackbar
      :md-position="center"
      :md-duration="3000"
      :md-active.sync="showSnackbar"
      md-persistent
    >
      <span>Вы не вошли в аккаунт!</span>
      <md-button class="md-primary" @click="showSnackbar = false">Ок</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import firebase from "../../firebaseinit";
import "firebase/firestore";
const db = firebase.firestore();
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  name: "Mainpage",
  data: function () {
    return {
      textarea: "",
      dislikes: 0,
      likes: 0,
      name: "Савелий",
      shortQ: "",
      showSnackbar: false,
    };
  },
  methods: {
    sendQuestion: function () {
      if (this.user.loggedIn) {
        db.collection("Answers")
          .add(this.createObject())
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
        (this.textarea = ""),
          (this.shortQ = ""),
          (this.likes = 0),
          (this.dislikes = 0),
          (this.name = "SaveliyShutov");
      }
      else{
        this.showSnackbar = true;
      }
    },
    createObject: function () {
      return {
        textarea: this.textarea,
        shortQ: this.shortQ,
        likes: this.likes,
        dislikes: this.dislikes,
        name: this.name,
      };
    },
    toReg() {
      this.$router.replace({
        name: "Registration",
      });
    },
    toAuth() {
      this.$router.replace({
        name: "LogIn",
      });
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

