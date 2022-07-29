<template>
  <div class="w-full flex  py-5 ">
    <div class="m-auto">
      <h1 class="text-3xl font-semibold text-center">{{ count }} Heros </h1>
      <ul class="" v-for="(hero, index) in dcHeros" :key="hero.name">
      <li class="my-5 flex justify-between">
        <h1>
          {{ hero.name }}
          
        </h1>
        <span class="" >
          <button
              @click="remove(index)"
              class="w-10 text-white rounded-lg bg-red-800">
              X
            </button>
          </span>
      </li>
    </ul>
    <input class="border-4 rounded-lg" v-model="inputVal" ref="inputRef"/>
    <button
      class="bg-[#000] rounded-lg h-auto w-32 ml-6 text-white"
      @click="addHero"
    >
      Send
    </button>
    </div>
    
    

    
  </div>
</template>

//script
<script>
import {computed, onMounted, ref} from 'vue'
export default {
  name: "DCHeros",

setup(){
    const inputRef = ref('');  
     const inputVal = ref('');
     const dcHeros = ref([
        { name: "Batman" },
        { name: "Iron man" },
        { name: "Superman" },
        { name: "Cat woman" },
        { name: "Dr Manhattan" },
      ]);

    const addHero = ()=> {
      if (inputVal.value !=="") {
        dcHeros.value.push({ name: inputVal.value });
        inputVal.value = "";
      }
    };

    const remove = (index) => {
      dcHeros.value.splice(index, 1);
      // console.log(this.dcHeros.filter((hero,i)=> i!=index))
    };

    onMounted(()=>{
      inputRef.value.focus();

    })

    const count =computed({
      get:()=>dcHeros.value.length
    })

    // computed(()=>{
    
    //   return this.dcHeros.length;
    // })


return {dcHeros,inputVal,inputRef, addHero, remove, count }
},
  

};
</script>
