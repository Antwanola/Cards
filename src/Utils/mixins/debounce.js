export default {

    data() {
        return {
          timeout: "",
        };
      },

    methods:{
        debounce(func, time=1000){
            clearTimeout(this.timeout);
              this.timeout = setTimeout(func, time)
            }
        
    }
}