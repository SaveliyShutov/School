<template>
  <div class="about">
    <md-button v-on:click="readStore" class="md-raised md-accent"
      >Обновить</md-button
    >

    <div class="md-layout md-alignment-center">
   
       <Card  v-for="(item, index) in answersArray"
        :key="index"
        :item="item"
        :index="index"
        class="md-layout-item md-size-50 md-xsmall-size-100"></Card>
   
  </div>
  </div> 
</template>

<script>

import firebase from "../../firebaseinit";
import "firebase/firestore";
import Card from '../components/card';
const db = firebase.firestore();

export default {
  name: "About",
  components: {
    Card
   
  },
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