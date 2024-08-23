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
                    <p>{{ drink.valor }}</p>
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
}

.drink-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 50px;
    margin: 50px auto;
    align-items: center;
    gap: 120px;
}

.card{
    background-color: white;
    min-width: 20vw;
    height: 150px;
    padding: 20px;
    border-radius: 5px;
}

.card-title{
    text-align: center;
    margin-bottom: 10px;
}

.card-body{
    text-align: justify;
}
</style>