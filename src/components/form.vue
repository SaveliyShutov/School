<template>
  <div class="main">
    <div>
      <form
        novalidate
        class="md-layout md-alignment-center-center"
        @submit.prevent="sendAnswer"
      >
        <md-card class="md-layout-item md-layout md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">Напиши ответ</div>
          </md-card-header>
          <md-field :class="messageClass">
            <label>Ответ</label>
            <md-textarea v-model="textarea" required></md-textarea>
            <span class="md-error">There is an error</span>
          </md-field>

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending"
              >Отправить</md-button
            >
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved"
          >The user {{ lastUser }} was saved with success!</md-snackbar
        >
      </form>
     
    </div>
  </div>
</template>

<script>
import firebase from "../../firebaseinit";
import "firebase/firestore";
const db = firebase.firestore();
export default {
  name: "form",
  data: function () {
    return {
      textarea: "",
      likes: 0,
      dislikes: 0,
     
    };
  },
  methods: {
    sendAnswer: function () {
      db.collection("Answers")
        .add(this.createObject())
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      (this.textarea = ""), (this.likes = 0), (this.dislikes = 0);
    },
    createObject: function () {
      return {
        textarea: this.textarea,
        likes: this.likes,
        dislikes: this.dislikes,
      };
    },
  },
};
</script>


<style scoped>
.md-field {
  margin: 20px;
}
.md-card {
  padding: 20px;
  width: 400px;
}
</style>

