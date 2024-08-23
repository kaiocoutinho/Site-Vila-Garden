<template>
<div class="container">
    <div>
    <MenuLateral />
    </div>
    <div class="bebidas-container">
        <div class="card" v-for="(bebida, index) in Bebidas" :key="index">
            <div class="card-title"><h1>{{ bebida.cerveja }}</h1></div>
            <div class="card-body">Valor: {{ bebida.valor }} R$</div>
        </div>
    <div class="bebidas-container">
        <div class="card" v-for="drink in Drinks" :key="drink.id">
        <div class="card-title"><h1>{{ drink.name }}</h1></div>
        <div class="card-body">Descricao: {{ drink.descricao }}</div>
    </div>
    </div>
    <div>
        
    </div>
    </div>
</div>
</template>

<script>

import Bebidas from '../data/bebidas.json';
import Drinks from '../data/drinks.json';
import MenuLateral from './menu-lateral-cardapio/MenuLateral.vue';
export default{
    name:'CardBebidas',
    components:{
        MenuLateral
    },
    data(){
        return{
            Bebidas,
            Drinks,
        }
    }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
}

.bebidas-container{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
}
.card{
    width: 80%;
    height: 7vh;
    display: flex;
    background-color: #ffffff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
}

.card-title h1{
    color: #2D814F;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.card-body{
    font-size: 1.5rem;
    color: #2D814F;
    font-weight: bold;
}

@media(width < 600px){
    .card{
        width: 90%;
        margin: 0;
    }
}

</style>