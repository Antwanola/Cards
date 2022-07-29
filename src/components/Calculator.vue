<template>
    <section class="flex w-full">
    <div class="m-auto">
    <h1 class="text-3xl text-center my-2">Calculator</h1>
    <p class="text-2xl text-right mt-10  h-10 w-32 overflow-x-scroll" style="direction: rtl"> {{currentNumber}}</p>
    <div class="h-10" >
        <small v-if="selectedOperation">{{prevNumber}} {{selectedOperation}} {{currentNumber}}</small>
    </div>
    <div class=" grid grid-cols-4 gap-1 ">
        <button @click="pressed('1')" class="p-2 border rounded shadow w-10 h-10">1</button>
        <button @click="pressed('2')" class="p-2 border rounded shadow w-10 h-10">2</button>
        <button @click="pressed('3')" class="p-2 border rounded shadow w-10 h-10">3</button>
        <button @click="pressed('+')" class="p-2 border rounded shadow w-10 h-10">+</button>
        <button @click="pressed('4')" class="p-2 border rounded shadow w-10 h-10">4</button>
        <button @click="pressed('5')" class="p-2 border rounded shadow w-10 h-10">5</button>
        <button @click="pressed('6')" class="p-2 border rounded shadow w-10 h-10">6</button>
        <button @click="pressed('-')" class="p-2 border rounded shadow w-10 h-10">-</button>
        <button @click="pressed('7')" class="p-2 border rounded shadow w-10 h-10">7</button>
        <button @click="pressed('8')" class="p-2 border rounded shadow w-10 h-10">8</button>
        <button @click="pressed('9')" class="p-2 border rounded shadow w-10 h-10">9</button>
        <button @click="pressed('*')" class="p-2 border rounded shadow w-10 h-10">X</button>
        <button @click="clear('ce')" class="p-2 border rounded shadow w-10 h-10 ">CE</button>
        <button @click="pressed('0')" class="p-2 border rounded shadow w-10 h-10">0</button>
        <button @click="pressed('=')" class="p-2 border rounded shadow w-10 h-10">=</button>
        <button @click="pressed('/')" class="p-2 border rounded shadow w-10 h-10">/</button>
    </div>
    </div>

    </section>
</template>

<script>
import useWindowEvent from '../Utils/composition/useWindowEvent';
import {ref} from 'vue'
export default {
    setup() {
        //State values
        const operations = ['+', '-', '*', '/'];
        const numbers = ['1', '2', '3', '4','5','6', '7', '8', '9', '0'];
        const currentNumber = ref('');
        const prevNumber = ref('');
        const selectedOperation = ref('');


        //Handle pressed key
        const handleKey=(e)=>pressed(e.key);
        useWindowEvent('keydown',handleKey);
        
       

        //functions
        const pressed = (value) =>{
            if(value === '=' || value === 'Enter') calculate();
            else if(operations.includes(value))applyOperations(value);
            else if(numbers.includes(value)) appendNumber(value);
        };

        const appendNumber =(value)=>{
            currentNumber.value = currentNumber.value + value
        };
        
        const applyOperations = (value) =>{
            calculate();
            prevNumber.value =  currentNumber.value;
            currentNumber.value = '';
            selectedOperation.value = value;
        };
        const clear = (value) =>{
            if(value == 'ce') currentNumber.value = "";
        }
        
        // const del = (value)=> currentNumber.value =[ prevNumber.value].splice()

        const calculate = () =>{
           switch (selectedOperation.value) {
            case ('-'):
            currentNumber.value =( prevNumber.value) - (currentNumber.value);    
            selectedOperation.value = '';            
                break;
            case ('+') :
             currentNumber.value = +prevNumber.value + +currentNumber.value;
             selectedOperation.value = '';                
                break;
            case ('*'):
             currentNumber.value = prevNumber.value * currentNumber.value; 
             selectedOperation.value = '';                
                break;
           
            case ('/'):
             currentNumber.value = prevNumber.value / currentNumber.value;
             selectedOperation.value = '';                
                break;
           
            default: currentNumber.value
                break;
           }
        };


        return {pressed, clear,  selectedOperation, prevNumber, currentNumber}
        
    },
}
</script>
