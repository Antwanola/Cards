<template>
  <div class="full flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in colors" :key="color">
      <transition>
        <div class="h-[350px]" v-if="currentSlide === index" :class="color"></div>
      </transition>
    </div>
    <div class="w-full h-[340px]">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(color, index) in colors"
          @click="slide(index)"
          :key="index"
          :class="currentSlide === index ? 'bg-orange-900' : 'bg-gray-300'"
          class="w-4 h-4 mx-4 rounded-full shadow-lg"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["bg-teal-600", "bg-yellow-600", "bg-pink-600"],
      currentSlide: 0,
      interval: "",
    };
  },
  methods:{
    slide(index){
        this.currentSlide = index
    }
  },
  mounted() {
    this.interval = setInterval(() => {
    this.currentSlide == 2 ? (this.currentSlide = 0) : this.currentSlide++;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>


