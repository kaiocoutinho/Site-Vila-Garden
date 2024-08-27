<template>
    <div class="container-menu">
        <div class="menu-body">
            <div class="menu"><span><router-link to="/cardBebidas" class="link-menu" >Bebidas</router-link></span></div>
            <div class="menu" ><span><router-link class="link-menu" to="/CardDrinks">Drinks</router-link></span></div>
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
    font-weight: bold;
}

.link-menu:focus{
border-bottom: 3px solid green;
}

.menu span:focus{
    border-bottom: 3px solid green;
}

@media(width < 1300px){
    .container-menu{
        position: relative;
        width: 100vw;
        cursor: grabbing;
    }
    .menu-body{
        display: flex;
        gap: 40px;
        flex-direction: row;
        overflow-x: auto;
        min-width: 80px;
        padding: 50px;
    }

    .menu-body div{
        width: 100px;
        padding-right: 50px;
        
    }

    

}


</style>