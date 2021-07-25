<template>
  <div class="login-form" @click="close($event)">
    <div class="container">
      <form @submit.prevent="login()">
        <div class="form-wrapper">
          <h3 class="form">Вход</h3>
          <input
            class="form form-input"
            type="text"
            v-model.trim="user.login"
            placeholder="Логин"
          />
          <input
            class="form form-input"
            type="password"
            v-model.trim="user.pass"
            placeholder="Пароль"
          />
          <label class="checkbox">
            <input class="check-input" type="checkbox" v-model="tick"/>
            <span class="check-box"></span>
            Запомнить
          </label>
          <transition name="alert">
            <p v-if="active">Введите логин или пароль</p>
          </transition>
        </div>
        <button type="submit">
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      user: {
        login: "",
        pass: ""
      },
      tick: false,
      active: false
    };
  },
  methods: {
    login() {
      if (this.user.login === "" || this.user.pass === "") {
        this.active = true;
      } else {
        let user = this.user;
        if (this.tick === true) {
          localStorage.setItem("user", JSON.stringify(user));
          this.$emit("loginData", { user, tick: this.tick });
        } else if (this.tick === false) {
          sessionStorage.setItem("user", JSON.stringify(user));
          this.$emit("loginData", { user, tick: this.tick });
        }
      }
    },
    close(event) {
      if (event.target.className === "login-form")
        this.$emit("close", { active: false });
    }
  }
};
</script>

<style scoped>
h3 {
  font-family: Rubik-Medium;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: #333333;
}
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(51, 51, 51, 0.6);
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: absolute;
  position: fixed;
}
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  width: 304px;
  height: 394px;
  border-radius: 8px;
  /* padding: 36px 0px; */
}
.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  margin: 36px 36px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.form-input {
  width: 232px;
  height: 36px;
  font-family: Rubik-Regular;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
  border-bottom: 1px solid #333333;
}
.form-input:focus {
  font-family: Rubik-Medium;
  color: #333333;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}
.form {
  margin-bottom: 18px;
}

button {
  width: 113px;
  height: 38px;
  font-family: Rubik-Medium;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background: #e5261e;
  border-radius: 4px;
  transition: 0.5s;
}
button:hover {
  background: #cc221b;
  transition: 0.3s;
  cursor: pointer;
}
span {
  font-family: Rubik-Regular;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  margin-left: 8px;
}
.check {
  padding: 1.5em;
}
.check-input {
  position: absolute;
  -webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.check-box {
  position: absolute;
  margin-left: -1.5em;
	width: 1em;
	height: 1em;
  background: url("../assets/img/check-off.svg") no-repeat;
}
.check-input:checked + .check-box {
  position: absolute;
  width: 1em;
  height: 1em;
  background: url("../assets/img/check-on.svg") no-repeat;
}
p {
  font-family: Rubik-Regular;
  font-size: 16px;
  line-height: 19px;
  padding: 3px 6px;
  color: #e5261e;
  border-radius: 4px;
  user-select: none;
}
.alert-enter-active {
  animation-name: formOpen;
  animation-duration: 0.4s;
}
@keyframes formOpen {
  0% {
    opacity: 0;
  }
  20% {
    transform: scale3d(1.2, 1.12, 1.12);
    opacity: 1;
    background-color: #e5261e;
    color: white;
  }
  100% {
    opacity: 1;
    filter: contrast(1);
  }
}
</style>
