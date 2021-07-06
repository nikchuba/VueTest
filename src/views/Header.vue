<template>
  <div class="header" role="header">
    <div class="left">
      <img src="../assets/img/logo.svg" alt="" class="logo" />
    </div>
    <form action="">
      <input class="search" type="text" id="" placeholder="Поиск..." />
      <button class="tofind" type="submit" @click.prevent="">Найти</button>
    </form>
    <div class="right">
      <form @submit.prevent="rename" v-if="!check">
        <input class="user-name" v-model="user.login"/>
        <button class="save-new-name" type="submit"></button>
      </form>
      <button class="signin" @click="signIn" v-if="check">Войти</button>
      <button class="logout" @click="logout" v-if="!check">Выйти</button>
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
        login: undefined,
        pass: undefined
      }
    };
  },
  methods: {
    signIn() {
      this.$emit("signIn", { active: true });
    },
    logout() {
      if (localStorage.user) localStorage.clear();
      else if (sessionStorage.user) sessionStorage.clear();
      this.user = { login: undefined, pass: undefined };
    },
    rename() {
      if (localStorage.user) {
        let user = JSON.parse(localStorage.user);
        user.login = this.user.login;
        localStorage.setItem("user", JSON.stringify(user));
      } else if (sessionStorage.user) {
        let user = JSON.parse(sessionStorage.user);
        user.login = this.user.login;
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    }
  },
  computed: {
    check() {
      if (this.user.login === undefined) return true;
      else return false;
    }
  },
  mounted() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
    } else if (sessionStorage.user) {
      this.user = JSON.parse(sessionStorage.user);
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
.signin {
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
.signin:hover {
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
.save-new-name{
  background: none;
  height: 38px;
  width: 38px;
  background: url("../assets/img/Tick.svg") no-repeat;
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
