import {onMounted, onUnmounted} from 'vue'


export default function useWindowEvent(eventName, handleKey){
 //Mounted
 onMounted(()=>window.addEventListener(eventName, handleKey));
        
 //Unmounted
 onUnmounted(()=>window.removeEventListener(eventName,handleKey));
}