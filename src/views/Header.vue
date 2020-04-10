<template>
    <div class="header" role="header">
        <div class="left">
            <img src="../assets/img/logo.svg" alt="" class="logo">
        </div>
        <form action="">
            <input class="search" type="text" id="" placeholder="Поиск..." v-model="name">
            <button class="tofind" type="submit">Найти</button>
        </form>
        <div class="right">
            <div class="user-name">{{data.user}}</div>
            <button class="login" :class="data.none" @click="loginOn">Войти</button>
            <button class="logout none" :class="data.visible">Выйти</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        data: {
            type: Object,
            default(){
                return{}
            }
        }
    },
    methods: {
        loginOn(){
            this.$emit('loginOn', {active: true, local: localStorage})
        }
    },
    data: ()=>{
        return{name: ''}
    },
    mounted() {
        if (localStorage.name) {
            this.name = localStorage.name;
    }
    },
    watch: {
        name(newName) {
            localStorage.name = newName;
        }
    }
}
</script>

<style scoped>
.header{
    width: 100%;
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
form{
    display: flex;
    justify-content: space-between;
    width: 402px;
}
.tofind{
    width: 50px;
    height: 36px;
    font-family: Rubik-Medium;
    font-size: 16px;
    line-height: 19px;
    color: #E5261E;
    background-color: inherit;
    cursor: pointer;
}

.search{
    width: 320px;
    height: 36px;
    border-bottom: 1px solid #333333;
    font-family: Rubik-Regular;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
}

.search:focus{
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
    color: #FFFFFF;
    background: #E5261E;
    border-radius: 4px;
    transition: 0.5s;
}
.login:hover {
    background: #CC221B;
    transition: 0.3s;
    cursor: pointer;
}
.left, .right{
    width: 250px;
    display: flex;
    height: 38px;
}
.left{
    justify-content: flex-start;
}
.right{
    justify-content: flex-end;
}
.user-name{
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
.logout, .logout:hover{
    width: 52px;
    height: 38px;
    font-family: Rubik-Medium;
    font-size: 16px;
    line-height: 19px;
    color: #E5261E;
    background-color: inherit;
    cursor: pointer;
}
.none{
    display: none;
}
.visible{
    display: block;
}
</style>