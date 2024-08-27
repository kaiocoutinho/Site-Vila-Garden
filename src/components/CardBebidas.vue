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
    </div>
</div>
</template>

<script>

import Bebidas from '../data/bebidas.json';
import MenuLateral from './menu-lateral-cardapio/MenuLateral.vue';
export default{
    name:'CardBebidas',
    components:{
        MenuLateral
    },
    data(){
        return{
            Bebidas,
            bebidasShow:false
        }
    },
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
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 50px auto;
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

@media(width < 1300px){
    .bebidas-container{
        width: 100%;
        margin-top: 60px;
    }

    .card{
        width: 90%;
        margin: 0;
    }
}

</style>