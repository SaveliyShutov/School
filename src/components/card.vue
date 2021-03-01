<template>
  <div >   
         <md-card md-with-hover>
          <md-ripple>
            <md-card-header> </md-card-header>

            <md-card-content>
              {{ item.textarea }} | {{ item.userName }} | {{ item.number }} 
        
            </md-card-content>

            <md-card-actions>
              <md-badge class="md-primary" :md-content="likeAr">
                <md-button
                  class="md-icon-button"
                  v-on:click="Likes(item.refId)"
                >
                  <img
                    src="https://clipart-best.com/img/like/like-clip-art-77.png" />
                </md-button>
              </md-badge>
            </md-card-actions>

            <md-card-actions>
              <md-badge class="md-primary" :md-content="dislikeAr">
                <md-button
                  class="md-icon-button"
                  v-on:click="disLikes(item.refId)"
                >
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/08_thumbs_down-3-512.png"
                  />
                </md-button>
              </md-badge>
            </md-card-actions>

            <md-button class="md-raised">Ответить</md-button>
          </md-ripple>
        </md-card>
      </div>
 
</template>

<script>
import firebase from "../../firebaseinit";
import "firebase/firestore";
const db = firebase.firestore();

export default {
  name: "Card",
  components: {},
  data: function () {
    return {
   
      likeAr: this.item.likes,
      dislikeAr: this.item.dislikes,
    };
  },
    props: {
    item: Object,
    index:Number
  },
  methods: {       
    
    
    Likes(ref) { 
      this.likeAr = this.likeAr + 1;
      var docRef = db.collection("Answers").doc(ref);

      docRef.set(
        {
          likes:this.likeAr
        },
        { merge: true }
      );
    },
    disLikes(ref) {
      this.dislikeAr = this.dislikeAr + 1;
      var docRef = db.collection("Answers").doc(ref);
       docRef.set(
        {
          dislikes:this.dislikeAr
        },
        { merge: true }
      );
        
    },
  },
};
</script>
<style scoped>
.md-layout-item {
  margin: 10px;
}
</style>