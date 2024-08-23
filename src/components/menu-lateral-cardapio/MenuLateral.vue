<template>
    <div class="container-menu">
        <div class="menu-body">
            <div class="menu"><span><router-link to="/cardBebidas" class="link-menu" >Bebidas</router-link></span></div>
            <div class="menu" ><span>Drinks</span></div>
            <div class="menu" ><span>Porções</span></div>
            <div class="menu" ><span>Churasquinho</span></div>
        </div>
    </div>
</template>

<script>
export default{
    name: "MenuLateral",
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.container-menu{
    background-color: white;
    width: 20vw;
    height: 90%;
    position: fixed;
    border-radius: 5px;
}

.menu-body{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}


.menu span{
    color: black;
    font-size: 24px;
}

.link-menu{
    text-decoration: none;
    color: black;
}


</style>