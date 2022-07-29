<script >
import Header from './components/Header.vue';
import Login from './components/Login.vue';

export default {
  components:{
    Header,
    Login,
},
data(){
  return {
    isOpen: false
  }
}
}   
  
</script>

<template >
<Header @open-modal="isOpen = true"/>
<div class="flex w-full ">
<router-view></router-view>
<Login @close="isOpen = false" v-if="isOpen"/>
</div>
</template>

<style>

</style>
