<template>
    <div class="card-container">
        <div class="card" v-for="(bebida, index) in Bebidas" :key="index">
            <div class="card-title"><h1>{{ bebida.cerveja }}</h1></div>
            <div class="card-body">Valor: {{ bebida.valor }} R$</div>
        </div>
    </div>
</template>

<script>
import Bebidas from '../data/bebidas.json';

export default{
    name:'CardBebidas',
    data(){
        return{
            Bebidas,
        }
    }
}
</script>

<style scoped>

.card-container{
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