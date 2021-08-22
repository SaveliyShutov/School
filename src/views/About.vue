<template>
  <div class="about">
    <div class="md-layout md-alignment-center">
      <div class="md-layout-item md-size-50">
        <md-field md-inline>
          <label>Искать</label>
          <md-input v-model="inline"></md-input>
        </md-field>
      </div>
      <md-button v-on:click="search" class="md-icon-button">
        <img
          src="../assets/search.png"
        />
      </md-button>

      <Card
        v-for="(item, index) in answersArray"
        :key="index"
        :item="item"
        :index="index"
        class="md-layout-item md-size-50 md-xsmall-size-100"
      ></Card>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebaseinit";
import "firebase/firestore";
import Card from "../components/card";
const db = firebase.firestore();

export default {
  name: "About",
  components: {
    Card,
  },
  data: function () {
    return {
      answersArray: [],
      inline: ""
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
    search() {
       let arr = [];
      db.collection("Answers").where("textarea", ">=", this.inline)
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
  },
};
</script>
<style scoped>
.md-layout-item {
  margin: 10px;
}
</style>