<template>
        <MenuLateral />
        <router-view />
</template>
<script>

import MenuLateral from '@/components/menu-lateral-cardapio/MenuLateral.vue';
export default{
    name: 'Cardapio',
    components:{
        MenuLateral,

    }
}
</script>
<style scoped>

</style>