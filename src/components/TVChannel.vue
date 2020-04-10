<template>
    <div class="tv-channel">
        <div class="wrapper-img">
            <img v-bind:src="tvchannels.logo" alt="">
        </div>
        <section class="broadcasts">
            <h1>{{tvchannels.name}}</h1>
            <div class="broadcast now">
                <div class="time">13:00</div>
                <div class="title">{{tvchannels.broadcasts.id[1]}}</div>
            </div>
            <div class="broadcast">
                <div class="time">14:00</div>
                <div class="title">{{tvchannels.broadcasts.id[2]}}</div>
            </div>
            <div class="broadcast">
                <div class="time">15:00</div>
                <div class="title">{{tvchannels.broadcasts.id[3]}}</div>
            </div> 
        </section>
    </div>
</template>

<script>
export default {
    props: {
        tvchannels: {
            type: Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style>
.tv-channel{
    display: inline-flex;
    align-items: center;
    width: 1180px;
    height: 162px;
    background: #F2F2F2;
    border-radius: 8px;
    margin-bottom: 16px;
}

:last-child.tv-channel{
    margin-bottom: 0;
}

.wrapper-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 100%;
}

.broadcasts{
    display: flex;
    width: auto;
    height: 122px;
    flex-direction: column;
}

h1{
    margin-bottom: 5px;
    font-family: Rubik-Medium;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
}

.broadcast{
    display: inline-flex;
    font-family: Rubik-Regular;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin-top: 12px;
}
.now{
    color: #E5261E;
}
.time{
    width: 46px;
    margin-right: 16px;
}
</style>