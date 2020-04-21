<template>
  <div id="app">
    <login-form v-if="active" @loginClose="loginClose"></login-form>
    <div class="wrapper">
      <app-header @login="login" :data="formData"></app-header>
        <div id="nav">
          <router-link to="/films">Фильмы</router-link>
          <router-link to="/tvchannels">Телеканалы</router-link>
        </div>
          <router-view></router-view>
    </div>
    
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
import LoginForm from "./components/LoginForm.vue";

export default {
  name: 'App',
  components: {
    LoginForm,
    AppHeader: Header,
    AppFooter: Footer
  },
  data(){
    return{
      active: false,
      formData: {
        user: {
          login: '',
          pass: ''
        }
      }
    }
  },
  methods: {
    login(status){
      return this.active = status.active
    },
    loginClose(data){
      return [
        this.active = data.active,
        this.formData = data
      ]
    }
  }
}
</script>

<style>
*, *:after, *:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  outline: none;
}

@font-face {
  font-family: Rubik-Light;
  src: url(./assets/fonts/rubik/Rubik-Light.ttf);
}
@font-face {
  font-family: Rubik-Regular;
  src: url(./assets/fonts/rubik/Rubik-Regular.ttf);
}
@font-face {
  font-family: Rubik-Medium;
  src: url(./assets/fonts/rubik/Rubik-Medium.ttf);
}

#app{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 32px;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 27px;
}

#nav a {
  font-family: Rubik-Medium;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: #333333;
  margin: 0 12px;
  padding: 9px 2px;
  border-bottom: 2px solid #ffffff;
  transition: 0.5s;
}

#nav a.router-link-exact-active {
  transition: 0.3s;
  color: #E5261E;
  border-bottom: 2px solid #E5261E;
}

button{
  cursor: pointer;
}



</style>
