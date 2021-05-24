<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header> </md-card-header>

        <md-card-content>
          {{ item.textarea }} | {{ item.userName }} | {{ item.number }}
        </md-card-content>

        <md-card-actions>
          <md-badge class="md-primary" :md-content="likeAr">
            <md-button class="md-icon-button" v-on:click="Likes(item.refId)">
              <img
                src="https://clipart-best.com/img/like/like-clip-art-77.png"
              />
            </md-button>
          </md-badge>
        </md-card-actions>

        <md-card-actions>
          <md-badge class="md-primary" :md-content="dislikeAr">
            <md-button class="md-icon-button" v-on:click="disLikes(item.refId)">
              <img
                src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/08_thumbs_down-3-512.png"
              />
            </md-button>
          </md-badge>
        </md-card-actions>
<router-link :to="{name:'AnswerForm', params:{user: Ivan}}">
        <md-button v-on:click="toAnsForm (item.refId);" class="md-raised"
          >Ответить</md-button
        >
</router-link>
      </md-ripple>
    </md-card>

    <md-dialog :md-active.sync="active">
      <md-card id="dialog">
        <p>Вы не зарегистрированы.</p>
        <md-dialog-actions>
          <md-button class="md-primary" @click="toReg">Registration</md-button>
          <md-button class="md-primary" @click="toAuth">Log in</md-button>
        </md-dialog-actions>
      </md-card>
    </md-dialog>
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
    index: Number,
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
.md-layout-item {
  margin: 10px;
}
#dialog {
  border-radius: 60px;
  padding: 50px;
}
.md-dialog-container {
  border-radius: 60px !important;
}
</style>