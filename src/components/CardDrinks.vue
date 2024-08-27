<template>
    <div class="container-drink">
        <div>
        <MenuLateral />
        </div>
        <div class="drink-container">
            <div class="card" v-for="(drink, index) in Drinks" :key="index">
                <div class="card-title"><h4>{{ drink.name }}</h4></div>
                <div class="card-body">
                    <p>{{ drink.descricao }}</p>
                    <p class="value">{{ drink.valor }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import MenuLateral from './menu-lateral-cardapio/MenuLateral.vue';
import Drinks from '../data/drinks.json';
export default{
    name:   'CardDrink',
    components:{
        MenuLateral,
        Drinks
    },
    data(){
        return{
            Drinks
        }
    }
}
</script>

<style scoped>
.container-drink{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.drink-container{
    display: flex;
    flex-direction: row;
    width: 60%;
    flex-wrap: wrap;
    margin-top: 50px;
    align-items: center;
    gap: 100px;
}

.card{
    background-color: white;
    width: 40%;
    height: 150px;
    padding: 20px;
    border-radius: 5px;
}

.card-title h4{
    text-align: center;
    margin-bottom: 10px;
    color: black;
    font-weight: bolder;
    font-size: 24px;
}

.card-body{
    text-align: justify;
    color: black;
}

.card-body p.value{
    text-align: end;
    font-weight: bolder;
}

@media(width < 1300px){
    .drink-container{
       width: 100%;
       justify-content: center;
       gap: 50px;
    }

    .card{
        min-width: 300px;
        margin: 0px;
    }
}
</style>