export default {
    data() {
        return {
          modalState: false,
        };
      },
    methods:{
      close() {
            this.modalState = this.modalState == true ? false : true;
            
          },
        open(){
        this.modalState = this.modalState == false ? true : false;
        }
    }

    
}