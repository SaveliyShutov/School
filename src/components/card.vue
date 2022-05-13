<template>
  <div>
    <md-card class="card" md-with-hover>
      <md-ripple>
        <md-card-header> {{ item.shortQ }}</md-card-header>
        <md-card-content>
          {{ item.name }}
          {{ user.data.displayName }}
        </md-card-content>
        <md-card-actions>
          <div class="DisAndLikes">
            <md-badge class="md-primary" :md-content="likeAr" md-dense>
              <md-button class="md-icon-button" v-on:click="Likes(item.refId)">
                <span class="material-icons"> thumb_up_off_alt </span>
              </md-button>
            </md-badge>
            <md-badge :md-content="dislikeAr">
              <md-button
                class="md-icon-button"
                v-on:click="disLikes(item.refId)"
              >
                <span class="material-icons"> thumb_down </span>
              </md-button>
            </md-badge>
          </div>
          <router-link :to="{ name: 'AnswerForm', params: {item: this.item, ref: this.ref}}">
            <md-button v-on:click="toAnsForm(item.refId)" class="md-raised"
              >Ответить</md-button
            >
          </router-link>
        </md-card-actions>
      </md-ripple>
    </md-card>

    <md-snackbar
      :md-position="center"
      :md-duration="3000"
      :md-active.sync="active"
      md-persistent
    >
      <span>Вы не вошли в аккаунт!</span>
      <md-button class="md-primary" @click="active = false">Ок</md-button>
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
  name: "Card",
  components: {},
  data: function () {
    return {
      likeAr: this.item.likes,
      dislikeAr: this.item.dislikes,
      active: false,
    };
  },
  props: {
    item: Object,
    index: Object
  },
  methods: {
    Likes(ref) {
      if (this.user.loggedIn) {
        this.likeAr = this.likeAr + 1;
        var docRef = db.collection("Answers").doc(ref);

        docRef.set(
          {
            likes: this.likeAr,
          },
          { merge: true }
        );
      } else {
        this.active = true;
      }
    },
    disLikes(ref) {
      if (this.user.loggedIn) {
        this.dislikeAr = this.dislikeAr + 1;
        var docRef = db.collection("Answers").doc(ref);
        docRef.set(
          {
            dislikes: this.dislikeAr,
          },
          { merge: true }
        );
      } else {
        this.active = true;
      }
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
    toAnsForm(ref) {
      console.log(ref);
    },
  },
};
</script>
<style scoped>
#dialog {
  border-radius: 60px;
  padding: 50px;
}
.md-dialog-container {
  border-radius: 60px !important;
}
.md-card {
  border-radius: 20px;
  padding: 5px;
}
.md-card-content {
  display: flex;
  justify-content: flex-start;
}
.md-card-header {
  display: flex;
  justify-content: flex-start;
}
.DisAndLikes {
  margin: 10px;
}
</style>