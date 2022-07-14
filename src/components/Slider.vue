<template>
    <div class="full flex-wrap w-full">
       <div class="absolute w-full" v-for="(color, index) in colors" :key="color" >
        <transition name="fade">
        <div class="h-[350px] " v-if="currentSlide === index" :class="color">
        </div>        
        </transition>
       </div>
    </div>
</template>



<script>

export default {
    data(){
        return {
            colors:['bg-teal-600', 'bg-yellow-600', 'bg-pink-600'],
            currentSlide:0,
            interval:''

        }
    },
    mounted() {              
       this.interval = setInterval(() => {
        console.log('mounted')
        this.currentSlide == 2 ? this.currentSlide = 0 : this.currentSlide++
       }, 2000)
    },
    beforeUnmount(){
        clearInterval(this.interval)
    }
}
</script>

<style scoped>
.fade-enter-from{
    opacity: 0;
    transform: translateX(-100px);
}
.fade-leave-to{
    opacity: 0;
    transform: translateX(100px);
}
</style>