// debug
// alert("Lista E-Mail");


// struttura base vuejs

const { createApp } = Vue;

createApp({
    data(){
       return{
            email: null

       } 
    },
     created() {
         this.generateEmail();
     },
    methods: {
        generateEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    console.log(resp.data)
                })
            }
        }
    }
}).mount('#app');