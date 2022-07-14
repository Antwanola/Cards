<script >
// import DCHeros from './components/DCHeros.vue';
import Header from './components/Header.vue';
import Calendar from './components/Calendar.vue';
export default {
  components:{
    // DCHeros,
    Header,
    Calendar
}
}   
  
</script>

<template >
<Header/>
<div class="w-full flex">
  <!-- <DCHeros/> -->
<router-view></router-view>

</div>
</template>

<style>

</style>
