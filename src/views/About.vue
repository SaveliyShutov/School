<template>
  <div class="about">
    <md-button v-on:click="readStore" class="md-raised md-accent"
      >Accent</md-button
    >
    <ul>
      <li v-for="item in answersArray" :key="item.userName">
        {{ item.textarea }}
         {{ item.userName }}
          {{ item.number }}
          
      </li>
    </ul>
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