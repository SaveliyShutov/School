<template>
  <div class="md-layout md-alignment-center-center">
    <md-card class="md-layout-item md-size-60 md-small-size-90">
      <md-card-header>
        <div class="md-title">{{ item.shortQ }}</div>
      </md-card-header>

      <md-card-content>
        {{ item.textarea }}
      </md-card-content>
    </md-card>
    <md-card class="md-layout-item md-size-60 md-small-size-90">
      <md-card-header>
        <div class="md-title">Ваш ответ:</div>
      </md-card-header>

      <md-card-content>
        {{item.answer}}
      </md-card-content>
       <form
        @submit.prevent="sendAnswer"
        class="md-layout-item md-alignment-center-start"
      >
        <md-field>
          <label>Добавьте ваш ответ!</label>
          <md-textarea v-model="textarea"></md-textarea>
        </md-field>
        <md-button type="submit" class="md-primary" :disabled="sending"
          >Отправить</md-button
        >
      </form>

    </md-card>
  </div>
</template>
<script>
import firebase from "../../firebaseinit";
import "firebase/firestore";
const db = firebase.firestore();
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      item: null,
      textarea: "",
    };
  },
    computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  mounted() {
    this.item = this.$route.params.item;
    console.log(this.item);
  },
  methods: {
    sendAnswer: function () {
      if (this.user.loggedIn) {
         db.collection('Answers')
         .doc(this.item.refId)
         .update({answer: this.textarea});
      } else {
        console.log("There is an error(")
      }
    },
  },
};
</script>
<style scoped>
.md-card {
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
}
</style>
