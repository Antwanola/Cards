<template>
  <div class="flex w-full flex-col flex-wrap items-center">
    <h1 class="flex text-center text-3xl my-5">Markdown App</h1>
    <section class="flex w-10/12 my-5 h-screen">
      <article class="border w-1/2">
        <textarea
          :value="text"
          @input="update"
          class="h-full w-full"
          name=""
          id="txt"
        ></textarea>
      </article>

      <article class="w-1/2 border bg-green-200" v-html="markedTxt"></article>
    </section>
  </div>
</template>

<script>
import debounce from '../Utils/mixins/debounce'
export default {
    mixins:[debounce],
  data() {
    return {
      text: "",
      timeout: "",
    };
  },
  methods: {
    update(e) {
        const task = () => this.text = e.target.value;
        this.debounce(task, 500);
     
    },
   
  },
  computed: {
    markedTxt() {
      return this.text;
    },
  },
};
</script>
