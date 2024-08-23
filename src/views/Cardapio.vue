<template>
        <MenuLateral />
        <router-view />
</template>
<script>

import CardBebidas from '@/components/CardBebidas.vue';
import MenuLateral from '@/components/menu-lateral-cardapio/MenuLateral.vue';
export default{
    name: 'Cardapio',
    components:{
        MenuLateral,
        CardBebidas
    }
}
</script>
<style scoped>

</style>