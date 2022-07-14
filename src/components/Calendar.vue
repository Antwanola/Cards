<template>
  <div class="m-auto">
    <h1 class="text-3xl my-2 text-center">Vue Calendar</h1>
    <!-- <h2>{{startDay()}}</h2> -->
    <section class="flex mx-4 text-2xl">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="mx-2 font-bold">{{ currentYear }}</h2>
    </section>
    <section class="flex">
      <p class="text-center w-[14.28%]" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="flex flex-wrap my-2">
      <p class="text-center w-[14.28%]" v-for="num in startDay()" :key="num">
        <!-- {{num}} -->
      </p>
      <p
        :class="currentDateClass(num)"
        class="text-center w-[14.28%]"
        v-for="num in daysInMonth(currentYear, currentMonth)"
        :key="num"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between">
      <button class="border-solid border-2 border-grey-500 w-16 rounded-md" @click="prev">
        Prev
      </button>
      <button class="border-solid border-2 border-grey-500 w-16 rounded-md" @click="next">
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date().getMonth() + 1,
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentYear: new Date().getFullYear(),
    };
  },

  methods: {
    daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    startDay() {
      // console.log(new Date().getMonth())
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
    },
    next() {
      if (this.currentMonth === 12) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 1) {
        this.currentMonth = 12;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num){
        const fullMonth = new Date(this.currentYear, this.currentMonth-1, num).toDateString();
        const toDay = new Date().toDateString();
        return fullMonth ==toDay ? "bg-green-500 text-white rounded-lg w-auto": " ";
    }
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth - 1).toLocaleString("default", {
        month: "long",
      });
    },
  },
};
</script>
