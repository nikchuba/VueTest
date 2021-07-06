<template>
  <div id="app">
    <transition name="fade">
      <login-form
        v-if="active"
        @close="close"
        @loginData="loginData"
      ></login-form>
    </transition>
    <div class="wrapper">
      <app-header @signIn="signIn" :data="data"></app-header>
      <div id="nav">
        <router-link to="/films">Фильмы</router-link>
        <router-link to="/tvchannels">Телеканалы</router-link>
      </div>
      <transition name="router">
        <router-view></router-view>
      </transition>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "App",
  components: {
    LoginForm,
    AppHeader: Header,
    AppFooter: Footer
  },
  data() {
    return {
      active: false,
      data: {}
    };
  },
  methods: {
    loginData(data) {
      if (data) {
        this.active = false;
        this.data = data;
      }
    },
    signIn(status) {
      return (this.active = status.active);
    },
    close(data) {
      return (this.active = data.active);
    }
  }
};
</script>

<style>
*,
*:after,
*:before {
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

#app {
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
  color: #e5261e;
  border-bottom: 2px solid #e5261e;
  transition-delay: 0.2s;
  transition-duration: 0.4s;
}

button {
  cursor: pointer;
}

.fade-enter-active {
  animation-name: formOpen;
  animation-duration: 0.5s;
}
@keyframes formOpen {
  0% {
    opacity: 0;
  }
  30% {
    transform: scale3d(1.2, 1.2, 1.2);
    filter: contrast(1.2);
    opacity: 1;
  }
  100% {
    opacity: 1;
    filter: contrast(1);
  }
}
.fade-leave-active {
  animation-name: formClose;
  animation-duration: 0.5s;
}
@keyframes formClose {
  0% {
    opacity: 1;
    filter: contrast(1);
  }
  30% {
    transform: scale3d(1.2, 1.2, 1.2);
    filter: contrast(1.2);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.router-enter-active {
  animation-name: routerEnter;
  animation-delay: 0.2s;
  animation-duration: 0.4s;
}
@keyframes routerEnter {
  0% {
    opacity: 0.4;
    transform: scale3d(0.82, 0.82, 0.82);
  }
  40% {
    transform: scale3d(1.02, 1.02, 1.02);
  }
  100% {
    opacity: 1;
  }
}

.router-leave-active {
  animation: routerLeave 0.2s ease-in;
}
@keyframes routerLeave {
  0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
  60% {
    transform: scale3d(0.86, 0.86, 0.86);
  }
  100% {
    opacity: 0.4;
    transform: scale3d(0.8, 0.8, 0.8);
  }
}
</style>
