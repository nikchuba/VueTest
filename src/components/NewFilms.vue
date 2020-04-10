<template>
    <div class="new-films">
        <div class="film" v-for="card in cards" :key="card.name">
            <div class="film-card" v-bind:style="{backgroundImage: 'url(' + card.img + ')'}">
                <div class="specification">
                    {{card.text}}
                </div>
            </div>
            <p>{{card.name}}</p>
        </div>
    </div>
</template>

<script>
import CartIMG from '../assets/img/Cartoon.png'
import BatIMG from '../assets/img/Batman.png'
import HollIMG from '../assets/img/Hollywood.png'
import StripIMG from '../assets/img/Strippers.png'

export default {
    data(){
        return{
            cards:[
                {
                img: CartIMG, 
                text: 'Мульт в кино. Выпуск №103. Некогда грустить! Мульт в кино. Выпуск №103. Некогда грустить! Мульт в кино. Выпуск №103. Некогда грустить!', 
                name: 'Мульт в кино. Выпуск №103. Некогда грустить!'
                },
                {
                img: BatIMG, 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
                name: 'Новый Бэтмен'
                },
                {
                img: HollIMG, 
                text: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.', 
                name: 'Однажды... в Голливуде'
                },
                {
                img: StripIMG, 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                name: 'Стриптизёрши'
                },
            ]
        }
    }
}
</script>

<style scoped>
.new-films{
    display: flex;
    justify-content: space-between;
}

.film {
    width: 280px;
}

.film-card{
    width: 280px;
    height: 370px;
    border-radius: 8px;
    background-size: cover;
    margin-bottom: 16px;
    cursor: pointer
}
.specification{
    font-family: Rubik-Regular;
    padding: 16px;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #F2F2F2;
    background: #333333;
    opacity: 0;
    height: 100%;
    border-radius: inherit;
    transition: 0.5s;
}
.specification:hover{
    opacity: 0.8;
    transition: 0.3s;
}
p {
    font-family: Rubik-Regular;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
}
</style>