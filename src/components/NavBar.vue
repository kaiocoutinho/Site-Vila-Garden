<template>
    <div class="container">
        <div class="nav-bar">
            <span><router-link to="/"  class="link">Ínicio</router-link></span>
            <span><router-link to="/Cardapio" class="link">Cardápio</router-link></span>
            <span><router-link to="/Localização" class="link">Localização</router-link> </span>
        </div>
    </div>
        
</template>

<script setup>

</script>

<style scoped>
.container{
    width: 100%;
    height: 80px;
    background-color: #215F3A;/*2D814F*/
    text-align: right;
    justify-content: center;
    align-content: center;
}

.nav-bar{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 80px;
    text-align: center;
    margin-right: 40px;
}
span{
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
}
.link{
    color: #fff;
    font-weight: bold;  
    text-decoration: none;
}

@media(width < 530px){
    .container{
        text-align: center;
    }
    .nav-bar{
        margin-right: 0px;
        justify-content: center;
    }
    span{
        font-size: 20px;
    }
}




</style>