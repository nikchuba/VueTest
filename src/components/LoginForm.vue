<template>
  <div class="login-form" @click="close($event)">
    <div class="container">
      <form>
        <h3 class="form">Вход</h3>
        <input
          class="form"
          type="text"
          v-model.trim="user.login"
          placeholder="Логин"
        />
        <input
          class="form"
          type="password"
          v-model.trim="user.pass"
          placeholder="Пароль"
        />
        <div class="checkbox">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"></label>
          <span>Запомнить</span>
        </div>
        <h1 ref="alert"></h1>
      </form>
      <button type="submit" @click="login('Введите логин или пароль', $event)">
        Войти
      </button>
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
      }
    };
  },
  methods: {
    login(msg, event) {
      if (this.user.login == "" || this.user.pass == "") {
        event.preventDefault();
        let alert = this.$refs.alert;
        alert.style.display = "block";
        alert.innerHTML = msg;
      } else {
        this.$emit("loginData", this.user);
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
  padding: 36px 0px;
}
form {
  margin: 0px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  width: 232px;
  height: 36px;
  font-family: Rubik-Regular;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
  border-bottom: 1px solid #333333;
}
input:focus {
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
#checkbox {
  display: none;
}
#checkbox + label {
  width: 16px;
  height: 16px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #333333;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
#checkbox + label:before {
  content: "✔";
  font-size: 12px;
  line-height: 12px;
  opacity: 0;
  transition: 0.3s;
}
#checkbox:checked + label {
  border: 1px solid #333333;
}
#checkbox:checked + label:before {
  color: #e5261e;
  transition: 0.3s;
  opacity: 1;
}
.checkbox {
  display: inline-flex;
  height: 36px;
  width: 232px;
  align-items: left;
}
h1 {
  font-family: Rubik-Regular;
  font-size: 16px;
  line-height: 19px;
  padding: 3px 6px;
  display: none;
  color: #e5261e;
  border-radius: 4px;
}
</style>
