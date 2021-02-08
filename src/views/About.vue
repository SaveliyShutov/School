<template>
  <div class="about">
    <md-button v-on:click="readStore" class="md-raised md-accent"
      >Обновить</md-button
    >

    <div class="md-layout md-alignment-center">
      <div
        v-for="item in answersArray"
        :key="item.userName"
        class="md-layout-item md-size-50 md-xsmall-size-100"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-header> </md-card-header>

            <md-card-content>
              {{ item.textarea }} | {{ item.userName }} | {{ item.number }} |
              {{ item.refId }}
            </md-card-content>

            <md-card-actions>
              <md-badge class="md-primary" :md-content="likeAr">
                <md-button class="md-icon-button" v-on:click="like">
                  <img
                    src="https://clipart-best.com/img/like/like-clip-art-77.png"
                  />
                </md-button>
              </md-badge>
            </md-card-actions>

            <md-card-actions>
              <md-badge class="md-primary" :md-content="dislikeAr">
                <md-button class="md-icon-button" v-on:click="dislike">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/08_thumbs_down-3-512.png"
                  />
                </md-button>
              </md-badge>
            </md-card-actions>
            <md-button
              v-on:click="readLikes(item.refId)"
              class="md-raised md-accent"
              >Update</md-button
            >
            <md-button class="md-raised">Ответить</md-button>
          </md-ripple>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebaseinit";
import "firebase/firestore";
const db = firebase.firestore();

export default {
  name: "About",
  components: {},
  data: function () {
    return {
      answersArray: [],
      likeAr: 0,
      dislikeAr: 0,
    };
  },
  methods: {
    readStore() {
      let arr = [];
      db.collection("Answers")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let tempObj;
            tempObj = doc.data();
            tempObj.refId = doc.id;
            arr.push(tempObj);
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
      this.answersArray = arr;
      console.log(this.answersArray);
    },
    like: function () {
      this.likeAr = this.likeAr + 1;
      db.collection("Answers")
        .add(this.like())
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });

      this.number = 0;
    },
    createObject: function () {
      return {
        number: this.number,
      };
    },
    dislike: function () {
      this.dislikeAr = this.dislikeAr + 1;
    },
    readLikes(ref) {
    
      var docRef = db.collection("Answers").doc(ref);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
};
</script>
<style scoped>
.md-layout-item {
  margin: 10px;
}
</style>