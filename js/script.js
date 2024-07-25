// debug
// alert("Lista E-Mail");


// struttura base vuejs

const { createApp } = Vue;

createApp({
    data(){
       return{
            emailList: []

       } 
    },
    //  created() {
    //      this.generateEmail();
    //  },
    methods: {
        generateEmail() {
            this.emailList = [];
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    console.log(resp.data);
                    this.emailList.push(resp.data.response)
                })
            }
        }
    }
}).mount('#app');