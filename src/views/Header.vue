<template>
  <div class="header" role="header" @click="check">
    <div class="left">
      <img src="../assets/img/logo.svg" alt="" class="logo" />
    </div>
    <form action="">
      <input 
        class="search" 
        type="text" 
        id="" 
        placeholder="Поиск..." 
      />
      <button 
        class="tofind" 
        type="submit"
      >Найти</button>
    </form>
    <div class="right">
      <input class="user-name" v-model="user.login" v-if="!check()" />
      <button class="login" @click="login" v-if="check()">Войти</button>
      <button class="logout" @click="logout" v-if="!check()">Выйти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["data"],
  data: function() {
    return {
      user: {
        login: "",
        pass: ""
      }
    };
  },
  methods: {
    login() {
      this.$emit("login", { active: true });
    },
    logout() {
      localStorage.clear();
      this.user = { login: "", pass: "" };
    },
    check() {
      if (this.user.login === "") return true;
      else return false;
    }
  },
  mounted() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.getItem("user"));
    } else if (sessionStorage.user) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
  },
  watch: {
    data: function(data) {
      if (data.user !== this.user) this.user = data.user;
    }
  }
};
</script>

<style scoped>
.header {
  width: 1180px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  left: 0px;
  width: 182px;
  height: 36px;
}
form {
  display: flex;
  justify-content: space-between;
  width: 402px;
}
.tofind {
  width: 50px;
  height: 36px;
  font-family: Rubik-Medium;
  font-size: 16px;
  line-height: 19px;
  color: #e5261e;
  background-color: inherit;
  cursor: pointer;
}

.search {
  width: 320px;
  height: 36px;
  border-bottom: 1px solid #333333;
  font-family: Rubik-Regular;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
}

.search:focus {
  color: #333333;
  font-family: Rubik-Medium;
  font-style: normal;
  outline: none;
}
.login {
  right: 0px;
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
.login:hover {
  background: #cc221b;
  transition: 0.3s;
  cursor: pointer;
}
.left,
.right {
  width: 250px;
  display: flex;
  height: 38px;
}
.left {
  justify-content: flex-start;
}
.right {
  justify-content: flex-end;
}
.user-name {
  width: calc(250px - 52px - 16px);
  text-overflow: ellipsis;
  text-align: right;
  overflow: hidden;
  margin-right: 16px;
  font-family: Rubik-Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 38px;
  color: #333333;
}
.logout {
  width: 52px;
  height: 38px;
  font-family: Rubik-Medium;
  font-size: 16px;
  line-height: 19px;
  color: #e5261e;
  background-color: inherit;
  cursor: pointer;
}
</style>
