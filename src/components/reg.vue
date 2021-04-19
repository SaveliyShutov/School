<template>
  <div class="md-layout md-alignment-center-center">
    <form action="#" @submit.prevent="submit">
      <md-card class="md-layout-item md-layout md-size-30 md-small-size-80">
        <md-card-header>
          <div class="md-title">Регистрация</div>
        </md-card-header>

        <md-field md-inline>
          <label>Имя</label>
          <md-input v-model="form.name"></md-input>
        </md-field>

        <md-field md-inline>
          <label> Электронная почта</label>
          <md-input v-model="form.email"></md-input>
        </md-field>
        <md-field md-inline>
          <label> Пароль</label>
          <md-input v-model="form.password"></md-input>
        </md-field>

        <md-button type="submit" class="md-primary">Отправить</md-button>
      </md-card>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
     firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
<style scoped>
.md-layout-item {
  text-align: center;
  border-radius: 50px;
  padding: 50px;
}
/* .md-title {
  
  
} */
</style>