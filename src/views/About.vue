<template>
  <div class="about">
    <md-button v-on:click="readStore" class="md-raised md-accent"
      >Accent</md-button
    >
    <div class="md-layout md-alignment-center">
      <div
        v-for="item in answersArray"
        :key="item.userName"
        class="md-layout-item md-size-50  md-xsmall-size-100"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-header> </md-card-header>

            <md-card-content>
              {{ item.textarea }} | {{ item.userName }} | {{ item.number }}
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
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
            arr.push(doc.data());
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
      this.answersArray = arr;
      console.log(this.answersArray);
    },
  },
};
</script>
<style scoped>
.md-layout-item {
 
  margin: 10px;
}
</style>