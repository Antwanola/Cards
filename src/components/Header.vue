<template>
  <nav class="w-full flex justify-between items-center bg-orange-600 h-auto p-5 text-sm font-medium text-white">
    <div class="text-sm w-16  sm:w-6/12 sm:text-3xl">
    <a>DC Heros</a>
    </div>
    <div v-for="route in routes" :key="route.name" class=" flex items-center justify-between">
      <router-link class="" :to="route.path">{{route.name}}</router-link>     
    </div>
  </nav>
</template>

<script>
import {routes} from '../router/router'
export default {
  data(){
    return {
      routes
    }
  },
  setup() {
    
  },
}
</script>
